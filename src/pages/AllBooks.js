import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { API_BASE_URL } from "../api";

const AllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/books`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) throw new Error("Failed to fetch books");

        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleBookClick = (bookId) => navigate(`/bookDetails/${bookId}`);

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">{error}</div>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <button
          className="btn btn-outline-secondary mb-4"
          onClick={() => navigate("/")}
        >
          ← Back to Home
        </button>

        <h1 className="mb-4 text-black fw-bold">All Books</h1>

        <div className="row g-4">
          {books.length > 0 ? (
            books.map((book) => (
              <div className="col-md-4" key={book._id}>
                <div
                  className="card h-100 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleBookClick(book._id)}
                >
                  <img
                    src={book.image || "https://via.placeholder.com/300x400"}
                    className="card-img-top"
                    alt={book.title}
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-success">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      by {book.author}
                    </h6>
                    <p className="card-text">{book.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <strong className="text-success">{book.price}</strong>
                    <button className="btn btn-sm btn-success">Buy</button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info">No books found</div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AllBooks;
