import "../../Styles/Dashboard.css";
import "../../Styles/Home.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
const MessageBoxEmail = () => {
  return (
    <div>
      <div className="sign_component_container">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="sign_component_content"
        >
          <h1>Check your email, a link has been forwarded to you.</h1>
          <i className="fas fa-check"></i>
        </motion.div>
      </div>
    </div>
  );
};

export default MessageBoxEmail;
