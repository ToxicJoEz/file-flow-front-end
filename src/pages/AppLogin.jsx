// src/LoginViaApp.jsx
import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /[!@#$%^&*(),.?":{}|<>]/,
      "Password must contain at least one special character"
    )
    .required("Password is required"),
});

function LoginViaApp() {
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const redirectURL = new URLSearchParams(location.search).get("redirect");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const payload = { ...values, redirect_uri: redirectURL };

        const response = await axios.post(
          "http://localhost:3001/login",
          payload
        );

        const { token } = response.data;

        if (token && redirectURL) {
          toast.success("Login successful! Redirecting to app...");
          setTimeout(() => {
            window.location.href = `${redirectURL}?token=${token}`;
          }, 1500);
        } else {
          toast.error("Missing token or redirect URL.");
        }
      } catch (error) {
        setErrorMessage(error.response?.data?.message || "Login failed");
        toast.error("Login failed, please try again.");
      } finally {
        setLoading(false);
      }
    },
  });

  // useEffect(() => {
  //   if (!redirectURL) {
  //     toast.error("This page is only for desktop app login.");
  //     window.location.href = "/"; // or any page you want
  //   }
  // }, []);

  return (
    <PageWrapper>
      <div className="bg-[url('/assets/background1.png')] h-full bg-cover bg-center flex items-center justify-center h-screen">
        <form
          className="form border border-gray-300"
          onSubmit={formik.handleSubmit}
        >
          <p className="title">Login via App</p>
          <p className="message">Login to connect your app session</p>

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
        </form>
      </div>
    </PageWrapper>
  );
}

export default LoginViaApp;
