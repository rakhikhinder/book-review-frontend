import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Alert,
  Form,
} from "react-bootstrap";
import Footer from "../components/Footer";
import { API_BASE_URL } from "./api";

const BookDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const book = state?.book;

  const [votes, setVotes] = useState({
    up: book?.votecount || 0,
    down: book?.unvotecount || 0,
  });

  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [review, setReview] = useState({ title: "", message: "" });
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  useEffect(() => {
    const checkLogin = () => {
      const user = localStorage.getItem("user");
      const loggedIn = !!user;
      setIsLoggedIn(loggedIn);
      if (loggedIn) setError("");
    };

    checkLogin();

    window.addEventListener("userLoggedIn", checkLogin);
    return () => window.removeEventListener("userLoggedIn", checkLogin);
  }, []);

  const handleVote = async (type) => {
    if (!isLoggedIn) {
      setError("You must be logged in to vote.");
      return;
    }

    try {
      const endpoint =
        type === "up"
          ? `${API_BASE_URL}/books/${book._id}/vote`
          : `${API_BASE_URL}/books/${book._id}/unvote`;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) throw new Error("Vote failed");

      setVotes((prev) => ({
        ...prev,
        [type]: prev[type] + 1,
      }));
    } catch (err) {
      setError("Failed to register vote.");
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setError("You must be logged in to leave a review.");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));
    const payload = {
      user_id: user._id,
      book_id: book._id,
      title: review.title,
      message: review.message,
    };

    try {
      const res = await fetch(`${API_BASE_URL}api/reviews`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to submit review");
      setReviewSubmitted(true);
      setReview({ title: "", message: "" });
    } catch (err) {
      setError("Failed to submit review.");
    }
  };

  if (!book) {
    return (
      <Container className="mt-4">
        <h4>Book not found</h4>
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

        {error && <Alert variant="danger">{error}</Alert>}
        {reviewSubmitted && (
          <Alert variant="success">Review submitted successfully!</Alert>
        )}

        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-start"
          >
            <Card className="mb-4" style={{ width: "100%", maxWidth: "300px" }}>
              <Card.Img
                variant="top"
                src={book.image || "https://via.placeholder.com/300x400"}
                style={{
                  maxHeight: "400px",
                  width: "100%",
                  objectFit: "contain",
                  borderRadius: "8px",
                }}
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

            {book.genre && (
              <p>
                <strong>Genre:</strong> {book.genre}
              </p>
            )}
            {book.language && (
              <p>
                <strong>Language:</strong> {book.language}
              </p>
            )}
            {book.publisher && (
              <p>
                <strong>Publisher:</strong> {book.publisher}
              </p>
            )}
            {book.published_date && (
              <p>
                <strong>Published Date:</strong> {book.published_date}
              </p>
            )}

            <div className="d-flex align-items-center gap-3 my-3">
              <Button
                variant="outline-success"
                onClick={() => handleVote("up")}
              >
                👍 {votes.up}
              </Button>
              <Button
                variant="outline-danger"
                onClick={() => handleVote("down")}
              >
                👎 {votes.down}
              </Button>
            </div>

            {book.purchase_link && (
              <Button
                variant="primary"
                size="lg"
                onClick={() => window.open(book.purchase_link, "_blank")}
                className="mt-3"
              >
                Buy Now
              </Button>
            )}
          </Col>
        </Row>

        <hr className="my-5" />
        <h4>Leave a Review</h4>
        <Form onSubmit={handleReviewSubmit}>
          <Form.Group controlId="reviewTitle" className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a title for your review"
              value={review.title}
              onChange={(e) => setReview({ ...review, title: e.target.value })}
              required
            />
          </Form.Group>

          <Form.Group controlId="reviewMessage" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Write your review here"
              value={review.message}
              onChange={(e) =>
                setReview({ ...review, message: e.target.value })
              }
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit Review
          </Button>
        </Form>
      </Container>

      <Footer />
    </>
  );
};

export default BookDetails;
