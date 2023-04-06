import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Container/Pages/Home";
import Contact from "./Container/Pages/Contact";
import Tasks from "./Container/Pages/Tasks";
import Notes from "./Container/Pages/Notes";
import Signup from "./Container/Auth/Signup";
import ForgetPassword from "./Container/Auth/ForgetPassword";
import Dashboard from "./Container/Pages/Dashboard";

import { useSelector } from "react-redux";
import CheckEmail from "./Container/Auth/CheckEmail";
import VarifyEmail from "./Container/Auth/VarifyEmail";
import EmailVerified from "./Container/Auth/EmailVerified";
import PasswordReset from "./Container/Auth/PasswordReset";
import SetNewPassword from "./Container/Auth/SetNewPassword";

// const getLocalItems = () => {
//   const list = localStorage.getItem("lists");
//   if (list) {
//     return JSON.parse(localStorage.getItem("lists"));
//   } else {
//     return [];
//   }
// };

const App = () => {
  const { token } = useSelector((state) => state.contact);
  // const [data, setData] = useState(getLocalItems());
  // useEffect(() => {
  //   setData(token);
  //   localStorage.setItem("lists", JSON.stringify(data));
  // }, [data]);

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(token));
  }, [token]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />}  />
          {token && <Route path="/tasks" element={<Tasks />} />}
          {token && <Route path="/notes" element={<Notes />} />}
          {token && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/checkemail" element={<CheckEmail />} />
          <Route path="/verifyemail" element={<VarifyEmail />} />
          <Route path="/emailverified" element={<EmailVerified /> } />
          <Route path="/passwordreset" element={<PasswordReset /> } />
          <Route path="/setnewpassword" element={<SetNewPassword /> } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
