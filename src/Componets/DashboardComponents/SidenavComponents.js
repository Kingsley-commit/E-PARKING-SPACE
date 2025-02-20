import "Styles/Dashboard.css";
import "Styles/Home.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Sidenav = () => {
    const navigate = useNavigate();

    window.onload = () => {
        handleClickLink('/Dashboard')
    }

    const handleClickLink = (path) => {
        setTimeout(() => {
            navigate(path)
        },200)
    }
  return (
    <div className="sidenav">
      <div className="sidenav_content">
        <div className="sidenav_header">
          <div className="logo_design">
            <div>
              <i className="fa-solid fa-car"></i>
            </div>
            <h1>EParking System</h1>
          </div>
        </div>

        <nav>
          <ul>
            <li onClick={() => handleClickLink('/Dashboard')} className="dashboard_list">
              <span>
                <i className="fas fa-columns"></i>
                <p>Dashboard</p>
              </span>
            </li>
            <li onClick={() => handleClickLink('/Dashboard/Allotment')} className="dashboard_list">
              <span>
                <i className="fas fa-car-side"></i>
                <p>Allotment</p>
              </span>
            </li>
            <li onClick={() => handleClickLink('/Dashboard/User')} className="dashboard_list">
              <span>
                <i className="fas fa-user"></i>
                <p>Users</p>
              </span>
            </li>
            <li onClick={() => handleClickLink('/Dashboard/Payment')} className="dashboard_list">
              <span>
                <i className="fas fa-wallet"></i>
                <p>Payments</p>
              </span>
            </li>
            <li onClick={() => handleClickLink('/Dashboard/Report')}className="dashboard_list">
              <span>
                <i className="fas fa-file-alt"></i>
                <p>Reports</p>
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
