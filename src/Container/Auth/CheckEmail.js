import React from "react";
import { TbMessage2 } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./auth.css";
const CheckEmail = () => {
  return (
    <div>
      <section className="check_email_wrapper">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="form_container">
              <div className="text-center">
                <div className="d-flex justify-content-center">
                  <span className="span_message">
                    <TbMessage2 />{" "}
                  </span>
                </div>
                <h5 className="mt-2 fw-bold">Check your email</h5>
                <p>
                  We sent a password reset link to <br /> olivia@untitledui.com
                </p>
              </div>
              <div className="button_style mt-4">
                <button className="btn btn-dark w-100">Open email app</button>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex mt-3">
                  <span className="me-2">Didn't receive the email?</span>
                  <NavLink className="nav-link fw-bold">
                    Click to resend
                  </NavLink>
                </div>
              </div>
              <div className="back_login text-center mt-4">
                <NavLink className="nav-link" to="/">
                  <span className="me-1">
                    <IoMdArrowRoundBack />{" "}
                  </span>
                  Back to Login{" "}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CheckEmail;
