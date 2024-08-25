import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomersContext } from "./Customers/CustomerContext";

type formDataType = {
  email: string;
  password: string;
};

export default function Signin() {
  let navigate = useNavigate();
  const context = useContext(CustomersContext);
  const [errorMessage, setErrorMessage] = useState("");

  const schema = z.object({
    email: z.string().min(6, "Email is required"),
    password: z.string().min(6, "Please enter valid password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  if (!context) {
    return <p>Context not available</p>;
  }
  const { isExistingUser } = context;
  let onsubmit = (formData: any) => {
    setErrorMessage("");
    if (isExistingUser(formData.email)) {
      navigate("../home");
    } else {
      setErrorMessage("Login Failed ");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div className="col-md-7 d-none d-md-flex bg-image"></div>
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <div className="w-75">
            <h2 className="text-center mb-4">Login</h2>
            <form onSubmit={handleSubmit(onsubmit)}>
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  {...register("email")}
                />
                <span>{errors.email && errors.email.message?.toString()}</span>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  {...register("password")}
                />
                <span> {errors && errors.password?.message?.toString()}</span>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
            <Link to="/signUp">Sign Up</Link>
            <p>
              {" "}
              {errorMessage && (
                <p style={{ color: "red" }}>{errorMessage}</p>
              )}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
