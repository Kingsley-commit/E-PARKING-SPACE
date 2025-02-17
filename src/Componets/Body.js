import carv from "../assets/carv.png";
import Map from "./Maps";
import "../Styles/Home.css";
import { motion } from "framer-motion";
const Body = () => {
  return (
    <div className="body_container">
      <div className="body_content">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="body_text"
        >
          <div>
            Find Your<h1>Parking Space!</h1>
          </div>
          <div>
            <p>
              The EParking System is a web-based platform designed to
              simplify and enhance the parking experience. By leveraging APIs
              for real-time data management, this system allows users to find,
              book, and manage parking spaces seamlessly.
            </p>
          </div>
          <button className="check_button">
            Check Availability<i className="fa solid fa-right-arrow"></i>
          </button>
        </motion.div>
        <img src={carv} alt="ima" className="car_image"></img>
      </div>
      <Map />
    </div>
  );
};

export default Body;
