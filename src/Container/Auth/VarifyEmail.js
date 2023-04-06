import React, {useState} from "react";
import { TbMessage2 } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { NavLink , useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./auth.css";
const VerifyEmail = () => {
const navigate= useNavigate();

  const{userDetails}= useSelector((state)=>state.contact);
  const {otp, info}= userDetails;
  const email=info?.accepted[0]
  const num = otp;
  const[data, setData]= useState(num)
// :white_check_mark: get first digit of number as string
const firstDigitStr = String(data)[0];
const secDigitStr = String(data)[1];
const thirdtDigitStr = String(data)[2];
const fourthDigitStr = String(data)[3];

const varifyOtp =async()=>{
  try {
    const res = await fetch("/otp/verification", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        email,
        otp,
      }),

    });
    const mainData= await res.json();
    // console.log('main', mainData.responseData.data.email)
    if(res.status===200){
       navigate('/setnewpassword');
    } else{
      toast.error('Invalid Credential');
    }
   
   
   
   
  } catch (error) {
    console.log('Error is', error);

  }
}
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
                  We sent a password reset link to <br /> <span>{email} </span>
                </p>
              </div>
              <div className="check_email_otp">
                <input type="number" className="input_email_control" value={firstDigitStr} />
                <input type="number" className="input_email_control" value={secDigitStr} />
                <input type="number" className="input_email_control" value={thirdtDigitStr} />
                <input type="number" className="input_email_control" value={fourthDigitStr}/>
              </div>
              <div className="button_style mt-4">
                <button className="btn btn-dark w-100" onClick={varifyOtp}>Verify Otp</button>
              </div>
              <div className="d-flex justify-content-center">
                <div className="d-flex mt-3">
                  <span className="me-2">Didn't receive the email?</span>
                  <NavLink className="nav-link fw-bold" to={'/forgetpassword'}>
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
      <ToastContainer />
    </div>
  );
};

export default VerifyEmail;
