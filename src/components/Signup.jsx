import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "./auth.css";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="brand">Lisa</h2>
        <h1>Create an Account</h1>

        {/* Full Name */}
        <div className="input-box">
          <span className="left-icon"><FaUser /></span>
          <input type="text" placeholder="Full Name" />
        </div>

        {/* Email */}
        <div className="input-box">
          <span className="left-icon"><FaEnvelope /></span>
          <input type="email" placeholder="Email" />
        </div>

        {/* Password */}
        <div className="input-box">
          <span className="left-icon"><FaLock /></span>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <span
            className="right-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Helper text */}
        <p className="helper-text">Must be at least 8 characters</p>

        {/* Confirm Password */}
        <div className="input-box">
          <span className="left-icon"><FaLock /></span>
          <input
            type={showConfirm ? "text" : "password"}
            placeholder="Confirm Password"
          />
          <span
            className="right-icon"
            onClick={() => setShowConfirm(!showConfirm)}
          >
            {showConfirm ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button className="auth-btn">Sign Up</button>

        <div className="divider"></div>

        <p className="switch-text">
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </div>
  );
}