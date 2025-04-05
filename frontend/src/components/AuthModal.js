import React, { useState } from "react";
import SignIn from "../pages/auth/Signin";
import SignUp from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/Forgotpassword";

function AuthModal({ onClose, onLoginSuccess }) {
  const [screen, setScreen] = useState("signin");

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              {screen === "signin"
                ? "Sign In"
                : screen === "signup"
                ? "Sign Up"
                : "Forgot Password"}
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            {screen === "signin" && (
              <SignIn
                onSuccess={onLoginSuccess}
                onForgotPassword={() => setScreen("forgot")}
              />
            )}
            {screen === "signup" && <SignUp onSuccess={onLoginSuccess} />}
            {screen === "forgot" && <ForgotPassword />}
          </div>
          <div className="modal-footer">
            {screen === "signin" && (
              <button
                className="btn btn-link"
                onClick={() => setScreen("signup")}
              >
                Don't have an account? Sign Up
              </button>
            )}
            {screen === "signup" && (
              <button
                className="btn btn-link"
                onClick={() => setScreen("signin")}
              >
                Already have an account? Sign In
              </button>
            )}
            {screen === "forgot" && (
              <button
                className="btn btn-link"
                onClick={() => setScreen("signin")}
              >
                Back to Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
