import { Route, Routes, Link, useNavigate } from "react-router-dom";
import "./App.css";
import UserProfile from "./pages/auth/Updateprofile";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import React, { useState, useEffect } from "react";
import ResetPassword from "./pages/auth/Resetpassword";
import Profile from "./pages/auth/Profile";
import UpdateProfile from "./pages/auth/Updateprofile";
import Logout from "./pages/auth/Logout";
import AuthModal from "./components/AuthModal";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AllBooks from "./pages/AllBooks";

function App() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  return (
    <div style={{ backgroundColor: "white", minHeight: "100vh" }}>
      <nav
        className="navbar navbar-expand-lg navbar-light justify-content-between"
        style={{
          backgroundColor: "#095847",
          padding: "10px",
          position: "sticky",
          top: 0,
          zIndex: 999,
        }}
      >
        <h3 className="text-white m-0">Apple Books</h3>
        {isLoggedIn ? (
          <div className="dropdown">
            <button
              className="btn btn-light rounded-circle"
              style={{ width: "40px", height: "40px" }}
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-person-fill"></i>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <Link className="dropdown-item" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/update-profile">
                  Update Profile
                </Link>
              </li>
              <li>
                <button className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <button
            className="btn btn-light"
            onClick={() => setShowAuthModal(true)}
          >
            Sign In
          </button>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/bookDetails/:bookId" element={<BookDetails />} />

        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/user/:username" element={<UserProfile />} />
        <Route path="/update-profile" element={<UpdateProfile />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onLoginSuccess={handleLoginSuccess}
        />
      )}
    </div>
  );
}

export default App;
