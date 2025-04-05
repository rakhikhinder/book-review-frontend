import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  Alert,
  Spinner,
  Modal,
  Badge,
} from "react-bootstrap";
import { FaThumbsUp, FaThumbsDown, FaTrash } from "react-icons/fa";
import Footer from "../components/Footer";

const BookDetails = () => {
  const { state } = useLocation();
  const { bookId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("currentBookId", bookId);
  }, [bookId]);

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userVote, setUserVote] = useState(null);
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [reviewToDelete, setReviewToDelete] = useState(null);
  const [deleteError, setDeleteError] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  let userId = null;

  useEffect(() => {
    const checkAuth = () => {
      const userData = JSON.parse(localStorage.getItem("user"));
      userId = userData?._id || null;
      const token = localStorage.getItem("token");
      if (userData && token) {
        setUser(userData);
        setIsAuthenticated(true);
        const voteStatus = localStorage.getItem(
          `vote_${bookId}_${userData._id}`
        );
        setUserVote(voteStatus);
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();

    const handleAuthChange = () => checkAuth();

    window.addEventListener("storage", handleAuthChange);
    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("storage", handleAuthChange);
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, [bookId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const userData = JSON.parse(localStorage.getItem("user"));
        userId = userData?._id || null;

        console.log("Submitting review with:", {
          user_id: userId,
          book_id: bookId,
        });

        if (state?.book) {
          setBook(state.book);
        } else {
          const bookResponse = await fetch(
            `http://127.0.0.1:3000/api/books/${bookId}`
          );
          if (!bookResponse.ok) throw new Error("Failed to load book");
          const bookData = await bookResponse.json();
          setBook(bookData);
        }

       const reviewsResponse = await fetch(
         `http://127.0.0.1:3000/api/reviews/book/${bookId}`
       );


        if (!reviewsResponse.ok) throw new Error("Failed to load reviews");

        const reviewsData = await reviewsResponse.json();
        setReviews(Array.isArray(reviewsData) ? reviewsData : []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setReviewError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [bookId, state?.book]);

  const handleVote = async (type) => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: `/bookDetails/${bookId}` } });
      return;
    }

    try {
      if (userVote === type) return;

      const response = await fetch(
        `http://127.0.0.1:3000/api/books/${bookId}/vote`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ voteType: type }),
        }
      );

      if (!response.ok) throw new Error("Failed to submit vote");

      const updatedBook = await response.json();
      setBook((prev) => ({ ...prev, ...updatedBook }));
      setUserVote(type);
      localStorage.setItem(`vote_${bookId}_${user?._id}`, type);
    } catch (error) {
      console.error("Voting error:", error);
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setReviewError("");
    setSubmitSuccess(false);

    if (!newReview.trim()) {
      setReviewError("Please enter a review");
      return;
    }

    if (!isAuthenticated) {
      setReviewError("Please login to submit a review");
      navigate("/login", { state: { from: `/bookDetails/${bookId}` } });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://127.0.0.1:3000/api/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          book_id: bookId,
          message: newReview,
          title: `Review for ${book.title}`,
          user_id: user?._id,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit review");

      const result = await response.json();

      const newReviewObj = {
        _id: result._id,
        user_id: user?._id,
        user: { name: user.name },
        message: newReview,
        createdAt: new Date().toISOString(),
        book_id: bookId,
      };

      setReviews((prev) => [...prev, newReviewObj]);
      setNewReview("");
      setSubmitSuccess(true);
    } catch (error) {
      setReviewError(error.message || "Failed to submit review");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteClick = (review) => {
    setReviewToDelete(review);
    setShowDeleteModal(true);
    setDeleteError("");
  };

  const handleDeleteConfirm = async () => {
    setIsDeleting(true);
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/reviews/${reviewToDelete._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) throw new Error("Failed to delete review");

      setReviews((prev) => prev.filter((r) => r._id !== reviewToDelete._id));
      setShowDeleteModal(false);
      setReviewToDelete(null);
    } catch (error) {
      setDeleteError(error.message || "Failed to delete review");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteCancel = () => {
    setShowDeleteModal(false);
    setReviewToDelete(null);
    setDeleteError("");
  };

  if (isLoading) {
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (!book) {
    return (
      <Container className="mt-4">
        <Alert variant="warning">Book not found</Alert>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Back to Home
        </Button>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-4">
        <Button
          variant="outline-secondary"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          ← Back
        </Button>

        <Row>
          <Col xs={12} md={4}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={book.image || "https://via.placeholder.com/300x400"}
                style={{ height: "400px", objectFit: "cover" }}
              />
            </Card>
          </Col>
          <Col xs={12} md={8}>
            <h2>{book.title}</h2>
            <h5 className="text-muted">by {book.author_name}</h5>
            <p className="lead">
              {book.description ||
                "A captivating story that will inspire and motivate readers."}
            </p>

            <div className="mb-4">
              <Button
                variant={userVote === "like" ? "primary" : "outline-primary"}
                className="me-2"
                onClick={() => handleVote("like")}
                disabled={!isAuthenticated}
              >
                <FaThumbsUp />{" "}
                <Badge bg="secondary">{book.votecount || 0}</Badge>
              </Button>
              <Button
                variant={userVote === "dislike" ? "danger" : "outline-danger"}
                onClick={() => handleVote("dislike")}
                disabled={!isAuthenticated}
              >
                <FaThumbsDown />{" "}
                <Badge bg="secondary">{book.unvotecount || 0}</Badge>
              </Button>
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open(book.purchase_link, "_blank")}
              className="mb-4"
            >
              Buy Now
            </Button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col>
            <h4>Customer Reviews</h4>

            <Card className="mb-4">
              <Card.Body>
                <h5>Write a Review</h5>
                {reviewError && <Alert variant="danger">{reviewError}</Alert>}
                {submitSuccess && (
                  <Alert variant="success">
                    Review submitted successfully!
                  </Alert>
                )}
                <Form onSubmit={handleReviewSubmit}>
                  <Form.Group controlId="reviewText" className="mb-3">
                    <Form.Label>Your Review</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      placeholder="Share your honest thoughts about this book..."
                      disabled={isSubmitting}
                    />
                  </Form.Group>
                  <Button
                    variant="success"
                    type="submit"
                    disabled={isSubmitting || !isAuthenticated}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Submitting...
                      </>
                    ) : (
                      "Submit Review"
                    )}
                  </Button>
                  {!isAuthenticated && (
                    <Alert variant="warning" className="mt-2">
                      Please login to submit a review
                    </Alert>
                  )}
                </Form>
              </Card.Body>
            </Card>

            {Array.isArray(reviews) && reviews.length > 0 ? (
              reviews.map((review) => (
                <Card key={review._id} className="mb-3">
                  <Card.Body>
                    <div className="d-flex justify-content-between mb-2">
                      <div>
                        <strong>{review.user?.name || "Anonymous"}</strong>
                      </div>
                      <div>
                        <small className="text-muted">
                          {new Date(
                            review.createdAt || new Date()
                          ).toLocaleDateString()}
                        </small>
                        {isAuthenticated && user._id === review.user_id && (
                          <Button
                            variant="link"
                            className="text-danger p-0 ms-2"
                            onClick={() => handleDeleteClick(review)}
                            disabled={isDeleting}
                          >
                            <FaTrash />
                          </Button>
                        )}
                      </div>
                    </div>
                    <p className="mb-0">{review.message}</p>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <Card className="mb-3">
                <Card.Body>No reviews yet. Be the first to review!</Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </Container>

      <Modal show={showDeleteModal} onHide={handleDeleteCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {deleteError && <Alert variant="danger">{deleteError}</Alert>}
          Are you sure you want to delete this review?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteCancel}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={handleDeleteConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default BookDetails;
