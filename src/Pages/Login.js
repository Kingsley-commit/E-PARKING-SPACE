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
          transition={{ duration: 0.4 }}
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
            <img src={bm8} alt="car" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
