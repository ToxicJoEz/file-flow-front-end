// src/Login.jsx
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useDispatch
import { login } from "../authSlice"; // Go one level up to access authSlice.js
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

// Define the validation schema for login
const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      "Invalid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

function Login() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State for loader
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize dispatch

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://main-fileflow-backend-production.up.railway.app/login",
          values
        );
        console.log("Login successful:", response.data);
        toast.success("Login successful!");

        // Extract the token and avatar from the response
        const { token, avatar } = response.data;

        if (token) {
          // Dispatch both token and avatar to Redux store
          dispatch(login({ token }));

          // Store the token in localStorage
          localStorage.setItem("auth", token);
        }

        setErrorMessage("");
        navigate("/dashboard");
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Login failed");
        console.error("Login failed:", error.response?.data || error.message);
        toast.error("Login failed, please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <PageWrapper>
      <div className="bg-[url('/assets/background1.png')] h-full bg-cover bg-center flex items-center justify-center h-screen">
        <form
          className="form border border-gray-300"
          onSubmit={formik.handleSubmit}
        >
          <p className="title">Login</p>
          <p className="message">Login to access our cool features!</p>

          <label>
            <input
              required
              type="email"
              className="input"
              {...formik.getFieldProps("email")}
            />
            <span>Email</span>
          </label>
          {formik.touched.email && formik.errors.email && (
            <div className="error">{formik.errors.email}</div>
          )}

          <label>
            <input
              required
              type="password"
              className="input"
              {...formik.getFieldProps("password")}
            />
            <span>Password</span>
          </label>
          {formik.touched.password && formik.errors.password && (
            <div className="error">{formik.errors.password}</div>
          )}

          {/* Conditionally render the submit button or the loader div */}
          {!loading ? (
            <button type="submit" className="fancy-button-alt">
              Login
            </button>
          ) : (
            <div className="loading-indicator">
              <div className="loader" />
            </div>
          )}

          {errorMessage && <div className="error">{errorMessage}</div>}
          <p className="signin">
            Don't have an account? .
            <Link to="/register" className="login-link">
              Register
            </Link>
          </p>
          <p className="signin">
            Forgot your password? .
            <Link to="/forgot-password" className="login-link">
              reset password
            </Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}

export default Login;
