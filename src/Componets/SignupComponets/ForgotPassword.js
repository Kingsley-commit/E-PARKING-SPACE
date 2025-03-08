import "../../Styles/Dashboard.css";
import "../../Styles/Home.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
  const [email, setEmail] = useState({email: ''});
  const navigate = useNavigate();

  const handleEmail = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(
        "https://localhost:7040/api/Account/ForgotPassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(email),
        }
      );

      const data = await response.text();

      if (response.ok) {
      console.log(data);
      navigate('/EmailMessage')
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="sign_component_container">
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sign_component_content"
      >
        <h3>Forgot Password</h3>
        <p>Please enter your gmail to recover your password.</p>

        <form className="sign_component_form">
          <div className="sign_component_cnp">
            <label>Email Address</label>
            <div className="user_input">
              <i className="fa-solid fa-envelope"></i>
              <input
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setEmail({...email, email:e.target.value})}
              />
            </div>
          </div>
          <input type="submit" value="Send" onClick={handleEmail} />
        </form>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
