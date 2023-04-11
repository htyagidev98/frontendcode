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



































// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import { useSelector } from 'react-redux';
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useNavigate } from 'react-router-dom';
// const VerifyEmail = () => {


//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate();
//   const { userDetails, userTokenUuid } = useSelector((state) => state.contact);
//   const { token, uuid } = userTokenUuid;

//   const { info } = userDetails;
//   const email = info?.accepted[0];
//   const inputRefs = [
//     React.createRef(),
//     React.createRef(),
//     React.createRef(),
//     React.createRef(),
//   ];

//   // console.log('email', email)

//   const handleChange = (index, event) => {
//     const value = event.target.value;
//     setOtp(prevState => {
//       const newState = prevState.split('');
//       newState[index] = value;
//       return newState.join('');
//     });
//     if (value) {
//       if (index < 3) {
//         inputRefs[index + 1].current.focus();
//       }
//     } else {
//       if (index > 0) {
//         inputRefs[index - 1].current.focus();
//       }
//     }
//   };

//   const handleSubmit = async event => {
//     event.preventDefault();
//     const otpr = parseInt(otp, 10);
//     // try {
//       const res = await fetch("/otp/verification", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           token,
//           uuid
//         },
//         body: JSON.stringify({
//           email,
//           otp: otpr,
//         }),
//       });
//       const data = await res.json();
//       if (res.status === 200) {
//         navigate('/setnewpassword')
//       } else if (res.status === 400) {
//         toast.error('Invalid User');
//       } else if (res.status === 422) {
//         toast.error("Invalid Otp")
//       }
//     // } catch (e) {
//     //   toast.error('Error Occured')
//     // }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="otpContainer">
//         {[0, 1, 2, 3].map(index => (
//           <input
//             key={index}
//             type="text"
//             autoComplete="off"
//             className="otpInput"
//             value={otp[index] || ''}
//             onChange={e => handleChange(index, e)}
//             ref={inputRefs[index]}
//             maxLength="1"
//           />
//         ))}
//         <ToastContainer />
//       </div>
//       <Button className="primary mt-2" type="submit">
//         Verify Otp
//       </Button>
//     </form>
//   );
// };

// export default VerifyEmail;





























// import React, { useState } from "react";
// import { TbCodeAsterix, TbMessage2 } from "react-icons/tb";
// import { IoMdArrowRoundBack } from "react-icons/io";
// import { NavLink, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./auth.css";
// import { useSelector } from 'react-redux';
// import axios from 'axios';
// const VerifyEmail = () => {
//   const navigate= useNavigate();
//   const { userDetails } = useSelector((state) => state.contact);
//   const { info } = userDetails;


//   const email = info?.accepted[0];
//   const [data, setData] = useState({
//     firstDigit: "",
//     secondDigit: "",
//     thirdDigit: "",
//     fourthDigit: "",
//   })


//   const { firstDigit,
//     secondDigit,
//     thirdDigit,
//     fourthDigit } = data;




//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setData((preval) => {
//       return {
//         ...preval,
//         [name]: value,
//       };
//     });
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { firstDigit, secondDigit, thirdDigit, fourthDigit } = data
//     const one = parseInt(firstDigit);
//     const two = parseInt(secondDigit);
//     const three = parseInt(thirdDigit);
//     const four = parseInt(fourthDigit);
//     const mainData = one + "" + two + "" + three + "" + four;
//     const otp = parseInt(mainData, 10);

//     try {
//       const res = await axios.post('/otp/verification', { email: email, otp: otp, })
//       // console.log(res.data);
//       if(res.status===200){
//           navigate('/setnewpassword');
//       } 
//     } catch (e) {
//       toast.error('Invalid otp')
//     }


//     // console.log('otp', otp)
//   }



//   return (
//     <div>
//       <section className="check_email_wrapper">
//         <div className="row">
//           <div className="col-12 mx-auto">
//             <div className="form_container">
//               <div className="text-center">
//                 <div className="d-flex justify-content-center">
//                   <span className="span_message">
//                     <TbMessage2 />{" "}
//                   </span>
//                 </div>
//                 <h5 className="mt-2 fw-bold">Check your email</h5>
//                 <p>
//                   We sent a password reset link to <br /> olivia@untitledui.com
//                 </p>
//               </div>
//               <div className="check_email_otp">
//                 <input type="number" name="firstDigit" className="input_email_control" value={firstDigit} onChange={handleInput} />
//                 <input type="number" name="secondDigit" className="input_email_control" value={secondDigit} onChange={handleInput} />
//                 <input type="number" name="thirdDigit" className="input_email_control" value={thirdDigit} onChange={handleInput} />
//                 <input type="number" name="fourthDigit" className="input_email_control" value={fourthDigit} onChange={handleInput} />
//               </div>

//               <div className="button_style mt-4">
//                 <button className="btn btn-dark w-100" onClick={handleSubmit} >Verify Email</button>
//               </div>
//               <div className="d-flex justify-content-center">
//                 <div className="d-flex mt-3">
//                   <span className="me-2">Didn't receive the email?</span>
//                   <NavLink className="nav-link fw-bold">
//                     Click to resend
//                   </NavLink>
//                 </div>
//               </div>
//               <div className="back_login text-center mt-4">
//                 <NavLink className="nav-link" to="/">
//                   <span className="me-1">
//                     <IoMdArrowRoundBack />{" "}
//                   </span>
//                   Back to Login{" "}
//                 </NavLink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <ToastContainer />
//     </div>
//   );
// };

// export default VerifyEmail;