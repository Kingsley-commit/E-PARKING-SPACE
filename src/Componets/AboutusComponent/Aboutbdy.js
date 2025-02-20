import "../../Styles/About.css";
import { motion } from "framer-motion";
import UserForAboutUS from "../AboutusComponent/UsersForAboutUs";
const Aboutbdy = () => {
  return (
    <div>
      <div className="about_content_body">
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="about_intro"
        >
          <h1>About Us</h1>
          <p>
            Welcome to SmartPark, your ultimate solution for finding available
            parking spaces in urban areas. Our platform utilizes the power of
            Google API to provide real-time parking availability updates, making
            the parking experience as convenient and efficient as possible.
          </p>
          <button>Get In Touch</button>
        </motion.div>
        <div>
          <UserForAboutUS />
        </div>
        <motion.section
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          viewport={{ once: true }}
        >
          <div className="about_selection_cards">
            <div className="about_section_header">
              <i className="fa solid fa-lightbulb"></i>Our Vision
            </div>
            <div className="about_section_body">
              <li>
                To transform urban parking by making it efficient, accessible,
                and hassle-free for everyone, ensuring a smoother and more
                sustainable experience in every city.
              </li>
            </div>
          </div>
          <div className="about_selection_cards">
            <div className="about_section_header">
              <i className="fa solid fa-bullseye"></i>Our Mission
            </div>
            <div className="about_section_body">
              <li>
                To deliver real-time parking availability through seamless
                integration with Google API, helping drivers find parking
                faster, reduce stress, and save time while promoting smarter
                city infrastructure.
              </li>
            </div>
          </div>
          <div className="about_selection_cards">
            <div className="about_section_header">
              <i className="fa solid fa-gem"></i>Our Values
            </div>
            <div className="about_section_body">
              <li>
                Continuously improving and leveraging technology to enhance
                parking solutions.
              </li>
              <li>
                Reducing traffic congestion and fuel consumption for a greener
                environment.
              </li>
              <li>
                Prioritizing ease of use and accessibility for all drivers.
              </li>
              <li>
                Ensuring accurate and real-time parking information through
                trusted data sources.
              </li>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Aboutbdy;
