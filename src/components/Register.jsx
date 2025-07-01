import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./styles.scss";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, "Username must be 15 characters or less")
    .required("Username is required"),
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
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function Register() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status
  const navigate = useNavigate(); // Initialize the navigate function

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true); // Set loading to true when form is submitted
      const { confirmPassword, ...userData } = values;
      try {
        const response = await axios.post(
          "http://main-fileflow-backend-production.up.railway.app/register",
          userData
        );
        console.log("Registration successful:", response.data);
        toast.success("Registration successful!");
        setErrorMessage(""); // Clear any previous error messages
        navigate("/login"); // Redirect to the login page
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Registration failed");
        console.error(
          "Registration failed:",
          error.response?.data || error.message
        );
        toast.error("Registration failed, please try again.");
      } finally {
        setLoading(false); // Reset loading state after request completes
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
          <p className="title">Register</p>
          <p className="message">
            Signup now and check out what we got to offer!
          </p>

          <label>
            <input
              required
              type="text"
              className="input"
              {...formik.getFieldProps("username")}
            />
            <span>Username</span>
          </label>
          {formik.touched.username && formik.errors.username && (
            <div className="error">{formik.errors.username}</div>
          )}

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

          <label>
            <input
              required
              type="password"
              className="input"
              {...formik.getFieldProps("confirmPassword")}
            />
            <span>Confirm Password</span>
          </label>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="error">{formik.errors.confirmPassword}</div>
          )}

          {/* Conditionally render the submit button or loading indicator */}
          {!loading ? (
            <button type="submit" className="fancy-button-alt">
              Register
            </button>
          ) : (
            <div className="loading-indicator">
              <div className="loader" />
            </div>
          )}

          {errorMessage && <div className="error">{errorMessage}</div>}
          <p className="signin">
            Already have an account?
            <Link to="/login" className="login-link">
              Login
            </Link>
          </p>
        </form>
      </div>
    </PageWrapper>
  );
}

export default Register;
