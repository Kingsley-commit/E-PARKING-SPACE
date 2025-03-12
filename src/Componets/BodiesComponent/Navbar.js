import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import "../../Styles/Home.css";
const Navbar = () => {
  //To show Nav bar
  const handleOpenNav = () => {
    const width = window.innerWidth;
    let nav_bar = document.querySelector(".nav_bar");
    width <= 768 ? (nav_bar.style.width = "100%") : (nav_bar.style.width = "0");
  };

  window.onclick = (e) => {
    if (e.target === document.querySelector(".nav_bar")) {
      document.querySelector(".nav_bar").style.width = "0";
    }
  };
  //Navigation
  const navigate = useNavigate();
  //Login signin
  const loginPage = () => {
    navigate("/LoginComponent");
  };

  //login page
  const signinpage = () => {
    navigate("/signup");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="navbar_container"
    >
      <div className="logo_design">
        <div>
          <i className="fa-solid fa-car"></i>
        </div>
        <h1>EParking System</h1>
      </div>

      <nav className="nav_bar">
        <Link to="/" className="nav_link">
          <span>Home</span>
        </Link>

        <Link to="/About" className="nav_link">
          <span>About</span>
        </Link>

        <Link to="/Dashboard" className="nav_link">
          <span>Dashboard</span>
        </Link>

        <div className="button_container phone_button_container">
        <button onClick={loginPage}>Log In</button>
        <button onClick={signinpage}>Sign In</button>
      </div>
      </nav>

      <div className="sidenav_icon" onClick={handleOpenNav}>
        &#9776;
      </div>
      <div className="button_container laptop_button_container">
        <button onClick={loginPage}>Log In</button>
        <button onClick={signinpage}>Sign In</button>
      </div>
    </motion.div>
  );
};

export default Navbar;
