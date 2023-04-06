import React  from "react";
import {  NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignUpmage from "../assets/images/Section.png";
import {signUpSchema} from './RegistrationSchema'
import {useFormik} from 'formik';

const initialValues={
  name:"",
  email:"",
  password:"",
}



const Signup = () => {
  // const[data, setData]= useState()
  const navigate=useNavigate();
  // console.log('d', data)
  // const [inputData, setInputData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const {values, errors, handleBlur,touched, handleChange, handleSubmit}=useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:async(values,e)=>{
      // e.preventDefault();
      // setData(values)
     const {name, email, password}= values;
    //  toast.success('Registration successful');
    
    const res= await fetch('/signup',{
      method:'POST',
      headers:{
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify({
        name, email, password
      })
    });
    const data= await res.json();
    if(res.status===422 || !data || res.status===400){
        window.alert('Invalid Registration');
    } else{
      window.alert('Registration Successfull');
      setTimeout(()=>{
        navigate('/')
     }, 1000)
    }
    
   
    }
  })
  

  
  // const handleInput = (e) => {
  //   const { name, value } = e.target;
  //   setInputData((preval) => {
  //     return {
  //       ...preval,
  //       [name]: value,
  //     };
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setChunkData(inputData);
  //   toast("Registration Successfully:)");
  //   setInputData({
  //     name: "",
  //     email: "",
  //     password: "",
  //   });
  // };

  return (
    <div className="signup_wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <div className="row">
              <div className="col-md-6">
                <section className="img_section">
                  <div className="img">
                    <img
                      src={SignUpmage}
                      alt="signup_image"
                      className="img-fluid"
                    />
                  </div>
                </section>
              </div>
              <div className="col-md-6">
                <div className="sign_up_form_container pt-4 ">
                  <div className="form_con">
                    <div className="inner_form_data">
                      <div className="form_head">
                        <h3 className="fw-bold">Sign up</h3>
                        <p>Start your 30-day free trial</p>
                      </div>
                      <form onSubmit={handleSubmit} method='POST'>
                        <div className="form_data">
                          <div className="form-group mb-2">
                          <span>
                            <label htmlFor="name"> Name</label>
                            <span className="">*</span>
                            </span>
                            <input
                              pattern="[a-zA-Z]+"
                              type="text"
                              name="name"
                              id="name"
                              className="form-control"
                              placeholder="Enter  name"
                              // required
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.name}
                              onBlur={handleBlur}
                            />
                          </div>
                          {
                            errors.name && touched.name? <p className="text-danger">{errors.name} </p>:null
                          }
                          

                          <div className="form-group mb-2">
                          <span>
                          <label htmlFor="email">Email</label>
                            <span className="">*</span>
                            </span>
                            
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="form-control"
                              placeholder="Enter Email"
                              // required
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.email}
                              onBlur={handleBlur}
                            />
                          </div>

                          {
                            errors.email && touched.email? <p className="text-danger">{errors.email} </p>:null
                          }
                          

                          <div className="form-group mb-2">
                          <span>
                          <label htmlFor="password">Password</label>
                            <span className="">*</span>
                            </span>
                            
                            <input
                              type="password"
                              name="password"
                              id="password"
                              className="form-control"
                              placeholder="Enter Password"
                              // required
                              autoComplete="off"
                              onChange={handleChange}
                              value={values.password}
                              onBlur={handleBlur}
                            />
                            
                          </div>
                          {
                            errors.password && touched.password? <p className="text-danger">{errors.password} </p>:null
                          }
                           
                          <button className="btn btn-black d-block w-100 mt-2">
                            Get started
                          </button>
                          <div className="sign_up_footer d-flex justify-content-center align-items-center mt-3">
                            <div className="footer_data d-flex justify-content-between align-items-center">
                              <span>Already have an account?</span>
                              <NavLink to={"/"} className="nav-link ms-2 fw-bold">
                                Log in
                              </NavLink>
                            </div>
                          </div>
                          <ToastContainer />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
