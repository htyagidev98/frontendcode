import React, { useState } from 'react'
import { FaKey } from 'react-icons/fa'
import { NavLink, useNavigate } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import './auth.css';
import { useSelector } from 'react-redux';
import { AiFillEye } from "react-icons/ai";
import { BsEyeSlashFill } from "react-icons/bs"

const SetNewPassword = () => {
  const { userTokenUuid } = useSelector((state) => state.contact);
  const { token, uuid } = userTokenUuid;
  const [errorPassword, setErrorPassword] = useState();
  const [errorCPassword, setErrorCPassword] = useState();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [inputData, setInputData] = useState({
    password: "",
    confirm_password: "",
  })
  const { password, confirm_password } = inputData;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setInputData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
    setErrorPassword('');
    setErrorCPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, confirm_password } = inputData;

    if (password.length < 8) {
      setErrorPassword('Password must be required 8 digit')
    } else if (confirm_password.length < 8) {
      setErrorCPassword('Confirm-Password must be required 8 digit')
    }
    try {
      const res = await fetch("/reset/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token,
          uuid,
        },
        body: JSON.stringify({
          password,
          confirm_password,

        }),
      });
      const data = await res.json();
      if (res.status === 200) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
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
                <p className='text-center'>Your new password must be different to <br />previously used passwords.</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="form-group mb-3">
                    <label htmlFor="password">Password*</label>
                    <div className="parent_hide_show">
                      <input
                        type={show ? "password" : "text"}
                        name="password"
                        id="password"
                        className="form-control"
                        placeholder="Enter password"
                        required
                        autoComplete="off"
                        onChange={handleInput}
                        value={inputData.password}

                      />
                      {password && <span className="child_span_style" onClick={() => setShow(!show)}> {show ? <AiFillEye /> : <BsEyeSlashFill />} </span>}
                    </div>
                  </div>
                  {errorPassword && <p className='text-danger'>{errorPassword} </p>}
                  <div className="form-group mb-3">
                    <label htmlFor="confirm_password">Confirm-Password*</label>
                    <div className="parent_hide_show">
                      <input
                        type={show2 ? "password" : "text"}
                        name="confirm_password"
                        id="confirm_password"
                        className="form-control"
                        placeholder="Enter confirm password"
                        required
                        autoComplete="off"
                        onChange={handleInput}
                        value={inputData.confirm_password}
                      />
                      {confirm_password && <span className="child_span_style" onClick={() => setShow2(!show2)}> {show2 ? <AiFillEye /> : <BsEyeSlashFill />} </span>}
                    </div>
                  </div>
                  {errorCPassword && <p className='text-danger'> {errorCPassword} </p>}
                  <button className="btn btn-black d-block w-100 mt-2 mb-2" type="submit">Reset Password</button>

                </form>
                <div className="text-center">
                  <NavLink className='nav-link' to='/'><span> <BiArrowBack /> Back to login</span></NavLink>
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