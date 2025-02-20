import { Link } from "react-router-dom";
import "../../Styles/Dashboard.css";
import "../../Styles/Home.css";
import { motion } from "framer-motion";
const LoginComponent = () => {
  return (
    <div className="login_container">
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="login_content"
      >
        <div className="logo_design">
          <div>
            <i className="fa-solid fa-car"></i>
          </div>
          <h1>EParking System</h1>
        </div>
        <h3>Welcome Back</h3>
        <p>Please enter your details to sign in.</p>

        <form className="login_form">
          <div className="login_cnp">
            <label>Username</label>
            <div className="user_input">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="Enter your username" />
            </div>
          </div>
          <div className="login_cnp">
            <label>Password</label>
            <div className="user_input">
              <i className="fa-solid fa-key"></i>
              <input type="password" placeholder="Enter your Password" />
            </div>
          </div>
          <div className="info2">
            <div className="info2_content">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>
              <Link to="">Forgot Password</Link>
            </p>
          </div>
          <input type="submit" value="Log in" />
          <div className="info3">
            <p>
              Dont have an account?
              <span>
                <Link to="/Signup">Create account</Link>
              </span>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginComponent;
