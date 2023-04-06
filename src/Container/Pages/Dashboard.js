import React from "react";
import { NavLink } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {


  return (
    <div className="Home_wrapper">
     <Sidebar />
     <main className="mainContent">
      <h1 className="main_Heading">
        Welcome back, <br />
        Gabriele
      </h1>
      <h5 className="mt-6">Your Workspace</h5>
      <div className="row">
        <div className="col-md-4">
          <div className="common_col mt-4">
            <NavLink to={"/notes"} className="nav-link">
              Notes
            </NavLink>
          </div>
        </div>

        <div className="col-md-4">
          <div className="common_col mt-4">
            <NavLink to={"/contact"} className="nav-link">
              Contacts
            </NavLink>
          </div>
        </div>

        <div className="col-md-4">
          <div className="common_col mt-4">
            <NavLink to={"/tasks"} className="nav-link">
            Tasks
            </NavLink>
          </div>
        </div>
      </div>
      </main>
    </div>
  );
};

export default Dashboard;
