import React, { useState } from 'react'
import {FaKey} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import './auth.css';
const SetNewPassword = () => {

  const[inputData, setInputData]= useState({
    password:"",
    cpassword:"",
  })

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('forget', inputData);
    setInputData({
      password: "",
      cpassword:"",
    });
  };
  return (
    <div>
      <div className="forget_password pt-5 common_auth_height_con">
         
           <div className="row container-fluid">
             <div className="col-12">
             <div className="forget_data">
               <div className="contact_forget_form">
               <div className="key_data text-center mx-auto d-table">
               <span className='d-flex align-items-center justify-content-center'><FaKey /> </span>
               </div>
               
                 <h3 className='text-center'>Set new password</h3>
                 <p className='text-center'>Your new password must be different to <br/>previously used passwords.</p>
                 <form onSubmit={(e) => handleSubmit(e)}>
                 <div className="form-group mb-3">
                 <label htmlFor="password">Password</label>
                 <input
                   type="password"
                   name="password"
                   id="password"
                   className="form-control"
                   placeholder="Enter password"
                   required
                   autoComplete="off"
                   onChange={handleInput}
                   value={inputData.password}
                 />
               </div>

               <div className="form-group mb-3">
                 <label htmlFor="cpassword">Confirm-Password</label>
                 <input
                   type="password"
                   name="cpassword"
                   id="cpassword"
                   className="form-control"
                   placeholder="Enter confirm password"
                   required
                   autoComplete="off"
                   onChange={handleInput}
                   value={inputData.cpassword}
                 />
               </div>

               <button className="btn btn-black d-block w-100 mt-2 mb-2" type="submit">Reset Password</button>

                 </form>
                 <div className="text-center">
                 <NavLink className='nav-link' to='/'><span> <BiArrowBack/> Back to login</span></NavLink>
                 </div>
               </div>

             </div>
           </div>
         </div>
      </div>
    </div>
  )
}

export default SetNewPassword