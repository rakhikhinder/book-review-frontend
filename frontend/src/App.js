import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import React, { useState } from "react";
function App() {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <>
        <div style={{ backgroundColor: "white" }}>
          {/* Navbar Section */}
          <nav
            className="navbar navbar-expand-lg navbar-light"
            style={{ backgroundColor: "#095847", padding: "10px" }}
          >
            
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/home">
                    Home
                  </Link>
                </li>


                </ul>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bookDetails" element={<BookDetails />} />
          </Routes>

      </div>
    </>
  );
}

export default App;
