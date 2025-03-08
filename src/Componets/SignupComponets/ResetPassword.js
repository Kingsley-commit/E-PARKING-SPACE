import "../../Styles/Dashboard.css";
import "../../Styles/Home.css";
import { motion } from "framer-motion";
const ResetPassword = () => {
  return (
    <div className="sign_component_container">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sign_component_content"
      >
        <h3>Reset Password</h3>
        <p>Reset your password to continue</p>

        <form className="sign_component_form">
          <div className="sign_component_cnp">
            <label>New Password</label>
            <div className="user_input">
              <i className="fa-solid fa-key"></i>
              <input type="text" placeholder="Enter your new password" />
            </div>
          </div>

          <div className="sign_component_cnp">
            <label>Confirm Password</label>
            <div className="user_input">
              <i className="fa-solid fa-key"></i>
              <input type="text" placeholder="Confirm Password" />
            </div>
          </div>

          <div className="sign_component_cnp">
            <label>Email Address</label>
            <div className="user_input">
              <i className="fa-solid fa-envelope"></i>
              <input type="text" placeholder="Enter your email address" />
            </div>
          </div>

          <input type="submit" value="Confirm Password" />
        </form>
      </motion.div>
    </div>
  );
};

export default ResetPassword;
