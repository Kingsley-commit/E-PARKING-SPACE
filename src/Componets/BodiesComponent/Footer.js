import "../../Styles/Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Footer = () => {
  const date = new Date();
  return (
    <motion.footer
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="footer"
    >
      <div className="footer_content">
      <div className="logo_design">
        <div>
          <i className="fa-solid fa-car"></i>
        </div>
        <h1>E Parking System</h1>
      </div>

      <nav>
        <Link to="/" className="footer_links">
          Home
        </Link>

        <Link to="/About" className="footer_links">
          About
        </Link>

        <Link to="/Dashboard" className="footer_links">
          Dashboard
        </Link>
      </nav>

      <div className="footer_form">
        <label>Subscribe</label>
        <div className="footer_inp">
          <input type="email" placeholder="Enter Your Email" />
          <input type="submit" value="Subscribe"></input>
        </div>
      </div>
</div>
      <div className="copy">
        &copy;
        {date.toLocaleDateString("en-US", {
          year: "numeric",
        })} Smart Parking System. All Rights Reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
