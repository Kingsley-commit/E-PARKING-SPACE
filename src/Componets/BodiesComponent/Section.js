import "../../Styles/Home.css";
import { motion } from "framer-motion";
const Section = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
      className="cool"
    >
      <h2>Goals, To acheive</h2>
      <div className="cool_content">
        <motion.div
          initial={{ opacity: 0, x: -400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="cool_box"
        >
          <h3>
            <i className="fas fa-car"></i>Seamless Parking Experience
          </h3>
          <p> Ensure a smooth and efficient parking process for users.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="cool_box"
        >
          <h3>
            {" "}
            <i className="fas fa-map-marker-alt"></i>Real-time Slot Availability{" "}
          </h3>
          <p>Display available parking spots Google Map API.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 400 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="cool_box"
        >
          <h3>
            {" "}
            <i className="fas fa-laptop-code"></i>User-Friendly Interface
          </h3>
          <p> Design an intuitive and visually appealing UI.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="cool_box"
        >
          <h3>
            {" "}
            <i className="fas fa-credit-card"></i>Secure Payment Integration
          </h3>
          <p>Implement a safe and fast online payment system.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 210 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="cool_box"
        >
          <h3>
            <i className="fas fa-route"></i>Smart Navigation
          </h3>
          <p>Guide users to the nearest available parking spot.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="cool_box"
        >
          <h3>
            <i className="fas fa-book"></i>Reports
          </h3>
          <p>Provide insights on parking usage for better management.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section;
