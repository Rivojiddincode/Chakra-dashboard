import React from 'react'
import "./SignUp.css"
import { FaFacebookF, FaApple, FaGoogle } from "react-icons/fa";
export default function SignUp() {
  return (
    <div className="wrapper">
      <div className="top-section">
        <h1>Welcome!</h1>
        <p>
          Use these awesome forms to login or create new account in your
          project for free.
        </p>
      </div>

      <div className="form-box">
        <h3>Register with</h3>

        <div className="socials">
          <div className="icon"><FaFacebookF /></div>
          <div className="icon"><FaApple /></div>
          <div className="icon"><FaGoogle /></div>
        </div>

        <p className="or">or</p>

        <label>Name</label>
        <input type="text" placeholder="Your full name" />

        <label>Email</label>
        <input type="email" placeholder="Your email address" />

        <label>Password</label>
        <input type="password" placeholder="Your password" />

        <div className="remember">
          <input type="checkbox" id="check" />
          <label htmlFor="check">
            <span className="toggle"></span>
            Remember me
          </label>
        </div>

        <button className="btn">SIGN UP</button>

        <p className="login-text">
          Already have an account? <span>Sign in</span>
        </p>
      </div>
    </div>
  )
}
