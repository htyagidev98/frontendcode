import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import LoginImage from ".././assets/images/Section.png";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

import "./auth.css";
import { setToken } from "../Redux/Slices/ContactSlice";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(inputData);

    const { email, password } = inputData;
    //  toast.success('Registration successful');

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    
    const token = data.responseData.token;
    dispatch(setToken(token));

    if (res.status === 422) {
      toast.error("invalid credential");
    } else if (res.status === 404 || res.status === 400) {
      toast.error("User not found!");
    } else if (res.status === 500) {
      toast.error("Internal server Error");
    } else {
      toast.success("Sign in Successfully:)");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    }
  };

  return (
    <div className="signup_wrapper">
      <div className="container-fluid">
        <div className="row pt-5 pb-5">
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="col-md-6 col-12 order-2 order-md-1">
                <section className="form_section">
                  <div className="form_container">
                    <h2 className="text-center fw-bold">Welcome back</h2>
                    <p className="text-center">
                      Welcome back! Please enter your details
                    </p>
                    <form onSubmit={(e) => handleSubmit(e)}>
                      <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Enter Email"
                          required
                          autoComplete="off"
                          onChange={handleInput}
                          value={inputData.email}
                        />
                      </div>

                      <div className="form-group mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          className="form-control"
                          placeholder="Enter Password"
                          required
                          autoComplete="off"
                          onChange={handleInput}
                          value={inputData.password}
                        />
                      </div>

                      <div className="user_check d-flex justify-content-between mt-3 mb-3">
                        <div className="">
                          <input type="checkbox" name="" id="" />
                          <span className="ms-4">Remember for 30 days</span>
                        </div>

                        <div className="forget_pass">
                          <span>
                            <NavLink
                              to={"/forgetpassword"}
                              className="nav-link ms-3"
                            >
                              Forgot password
                            </NavLink>{" "}
                          </span>
                        </div>
                      </div>

                      <button
                        className="btn btn-black d-block w-100 mt-2 mb-2"
                        type="submit"
                      >
                        Sign in
                      </button>

                      <button
                        className="btn btn-success d-block w-100 mt-2 mb-2"
                        type="submit"
                      >
                        <FcGoogle /> Sign in with Google
                      </button>

                      <div className="login_footer">
                        <div className="footer_sec d-flex justify-content-center">
                          <span>Don’t have an account? </span>
                          <NavLink
                            to={"/signup"}
                            className="nav-link ms-2 fw-bold"
                          >
                            Sign up{" "}
                          </NavLink>
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
              <div className="col-md-6 col-12 order-1 order-md-2">
                <section className="img_section">
                  <div className="img">
                    <img
                      src={LoginImage}
                      alt="login_image"
                      className="img-fluid"
                    />
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
