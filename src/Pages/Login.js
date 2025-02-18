import "../Styles/Login.css";
import bm8 from "../assets/bm8.png";
import { motion } from "framer-motion";
const Login = () => {
  return (
    <div>
      <div className="signup_container">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="signup_content"
        >
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="signup_form"
          >
            <span>
              Welcome To
              <br />
              E-parking system
            </span>
            <p>
              Your Hassle-Free Parking Solution! Log in or sign up to find,
              reserve, and manage your parking space effortlessly.
              <br />
              <b>Sign In as:</b>
            </p>
            <div className="sign_btn">
              <button>Driver</button>
              <button>Parking Lot Owner</button>
            </div>
          </motion.div>
          <div className="signup_intro">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="signup_box"
            >
              <p>
                "Our Smart Parking System is equipped with an intuitive
                dashboard, designed for both drivers and parking lot owners"
              </p>

              <div className="sign_box_content">
                <div className="sign_box_user">
                  <h2>Mr Kingsley</h2>
                  <span>Founder</span>
                </div>

                <div className="icon">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
              </div>
            </motion.div>
            <img src={bm8} alt="car" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
