import React, { useState } from "react";
import { TbMessage2 } from 'react-icons/tb';
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const { userDetails, userTokenUuid } = useSelector((state) => state.contact);
  const { token, uuid } = userTokenUuid;
  const { info } = userDetails;
  const email = info?.accepted[0];
  const [otp, setOtp] = useState("");
  const inputRefs = [
    React.createRef(),
    React.createRef(),
    React.createRef(),
    React.createRef(),
  ];

  const handleChange = (index, event) => {
    const value = event.target.value;
    setOtp((prevState) => {
      const newState = prevState.split("");
      newState[index] = value;
      return newState.join("");
    });
    if (value) {
      if (index < 3) {
        inputRefs[index + 1].current.focus();
      }
    } else {
      if (index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const otpr = parseInt(otp, 10);
    try {
      const res = await fetch("/otp/verification", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
          uuid
        },
        body: JSON.stringify({
          email,
          otp: otpr,
        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        navigate('/setnewpassword')
      } else if (res.status === 400) {
        toast.error('Invalid User');
      } else if (res.status === 422) {
        toast.error("Invalid Otp")
      } else if (res.status === 500) {
        toast.error("Internal Server Error")
      }
    } catch (e) {
      toast.error('Error Occured')
    }
  }

  return (
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
                We sent a password reset link to <br /> {email}
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="check_email_otp">
                {[0, 1, 2, 3].map((index) => (
                  <input
                    key={index}
                    type="text"
                    autoComplete="off"
                    className="input_email_control"
                    value={otp[index] || ""}
                    onChange={(e) => handleChange(index, e)}
                    ref={inputRefs[index]}
                    maxLength="1"

                  />
                ))}
              </div>
              <div className="button_style mt-4">
                <button className="btn btn-dark w-100" onClick={handleSubmit}>
                  Verify Email
                </button>
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
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default VerifyEmail;




























