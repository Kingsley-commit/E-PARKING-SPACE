import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../Styles/Home.css";
const Navbar = () => {
  //Navigation
  const navigate = useNavigate();
  //Logiin page
  const loginPage = () => {
    navigate("/login");
  };

  //Signin page
  const signinpage = () => {
    navigate("/signin");
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="navbar_container"
    >
      <div className="logo_design">
        <div>
          <i className="fa-solid fa-car"></i>
        </div>
        <h1>EParking System</h1>
      </div>
      <nav>
        <Link to="/" className="nav_link">
          Home
        </Link>
        |
        <Link to="/About" className="nav_link">
          About
        </Link>
        |
        <Link to="/Dashboard" className="nav_link">
          Dashboard
        </Link>
      </nav>
      <div className="button_container">
        <button onClick={loginPage}>Log In</button>
        <button onClick={signinpage}>Sign In</button>
      </div>
    </motion.div>
  );
};

export default Navbar;
