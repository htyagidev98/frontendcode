import React from "react";
import { TbMessage2 } from "react-icons/tb";
import { AiOutlineCheckCircle } from "react-icons/ai";
import {IoMdArrowRoundBack} from 'react-icons/io'
import { NavLink } from "react-router-dom";
import "./auth.css";
const EmailVerified = () => {
  return (
    <div>
      <section className="check_email_wrapper">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="form_container">
              <div className="text-center">
                <div className="d-flex justify-content-center">
                  <span className="span_message email_verified_span_bg">
                    <AiOutlineCheckCircle />{" "}
                  </span>
                </div>
                <h5 className="mt-2 fw-bold">Email verified</h5>
                <p>
                Your password has been successfully reset. <br/> Click below to log in magically.
                </p>
              </div>
            
              <div className="button_style mt-4">
                <button className="btn btn-dark w-100">Continue</button>
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

export default EmailVerified;
