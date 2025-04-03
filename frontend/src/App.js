import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BookDetails from "./pages/BookDetails";
import React, { useState } from "react";
import SignIn from "./pages/auth/Signin";
import SignUp from "./pages/auth/Signup";
import ForgotPassword from "./pages/auth/Forgotpassword";
import ResetPassword from "./pages/auth/Resetpassword";
import UpdateProfile from "./pages/auth/Updateprofile";
import Logout from "./pages/auth/Logout";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

               {/*Dropdown for Sign Up*/}
              <div
                className="nav-item dropdown"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign Up
                </a>
                {isOpen && (
                  <ul className="dropdown-menu show">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/signin"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign In
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/signup"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/update-profile"
                        onClick={() => setIsOpen(false)}
                      >
                        Update Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/forgotpassword"
                        onClick={() => setIsOpen(false)}
                      >
                        Forgot Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/reset-password"
                        onClick={() => setIsOpen(false)}
                      >
                        Reset Password
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/logout"
                        onClick={() => setIsOpen(false)}
                      >
                        Logout
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/profiel"
                        onClick={() => setIsOpen(false)}
                      >
                        Profile
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            </ul>
          </div>
        </nav>

        {/* Define Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/bookDetails" element={<BookDetails />} />

          {/* Authentication Routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/update-profile" element={<UpdateProfile />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
