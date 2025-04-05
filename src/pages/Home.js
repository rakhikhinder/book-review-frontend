import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { Carousel } from "react-bootstrap";
import { API_BASE_URL } from "./api";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [topBooks, setTopBooks] = useState([]);
  const [sliderBooks, setSliderBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const samplePlaceholders = [
    "Atomic Habits",
    "The Alchemist",
    "Rich Dad Poor Dad",
    "Deep Work",
  ];
  const navigate = useNavigate();

  const fetchBooks = useCallback(async () => {
    try {
      setLoading(true);
      const topResponse = await fetch(`${API_BASE_URL}/books?limit=3`);
      if (!topResponse.ok) throw new Error("Failed to fetch books");

      const sliderResponse = await fetch(`${API_BASE_URL}/books?limit=5`);
      if (!sliderResponse.ok) throw new Error("Failed to fetch slider books");

      const topData = await topResponse.json();
      const sliderData = await sliderResponse.json();

      setTopBooks(topData);
      setSliderBooks(sliderData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
    let currentIndex = 0;
    const interval = setInterval(() => {
      setPlaceholder(samplePlaceholders[currentIndex]);
      currentIndex = (currentIndex + 1) % samplePlaceholders.length;
    }, 2000);
    return () => clearInterval(interval);
  }, [fetchBooks]);

  const handleBookClick = (book) => {
    navigate(`/bookDetails/${book._id}`, { state: { book } });
  };

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
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <h1 className="mb-4 text-black fw-bold">
          Hello, what do you want to learn?
        </h1>

        <input
          type="text"
          className="form-control form-control-lg mb-4 border-success"
          placeholder={`Try: ${placeholder}`}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        {sliderBooks.length > 0 && (
          <div className="mb-5">
            <h2 className="mb-3 text-black">Popular Picks</h2>
            <Carousel indicators={false} interval={4000}>
              {sliderBooks.map((book) => (
                <Carousel.Item
                  key={book._id}
                  onClick={() => handleBookClick(book)}
                  style={{ cursor: "pointer" }}
                >
                  <div className="d-flex justify-content-center">
                    <img
                      src={book.image || "https://via.placeholder.com/300x400"}
                      alt={book.title}
                      style={{
                        height: "400px",
                        width: "auto",
                        objectFit: "contain",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <Carousel.Caption className="bg-dark bg-opacity-75 rounded p-3">
                    <h3>{book.title}</h3>
                    <p>by {book.author_name}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        )}

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="text-black">Featured Books</h2>
          <button
            className="btn btn-success"
            onClick={() => navigate("/books")}
          >
            View All
          </button>
        </div>

        <div className="row g-4 mb-5">
          {topBooks.length > 0 ? (
            topBooks.map((book) => (
              <div className="col-md-4" key={book._id}>
                <div
                  className="card h-100 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => handleBookClick(book)}
                >
                  <img
                    src={book.image || "https://via.placeholder.com/300x400"}
                    className="card-img-top"
                    alt={book.title}
                    style={{
                      height: "300px",
                      width: "auto",
                      objectFit: "contain",
                      margin: "0 auto",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-success">{book.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      by {book.author_name}
                    </h6>
                    <p className="card-text">
                      {book.description || "A captivating read."}
                    </p>
                  </div>
                  <div className="card-footer">
                    <button
                      className="btn btn-sm btn-success w-100"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(book.purchase_link, "_blank");
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info">
                No featured books available
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
