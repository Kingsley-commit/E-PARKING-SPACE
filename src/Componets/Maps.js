import "../Styles/Home.css";
import mapicon from "../assets/mapIcon.jpg";
import mapicon2 from "../assets/mapicon4.jpg";
import mapicon3 from "../assets/mapicon3.jpg";
import { motion } from "framer-motion";
const Maps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="map_container"
    >
      <div className="blur"></div>
      <div className="map_content">
        <div className="map_image_container">
          <img src={mapicon} alt="map" />
          <img src={mapicon2} alt="map" />
          <img src={mapicon3} alt="map" />
        </div>
        <div className="intro">
          <h1>Nearest Parking Spot</h1>
          <p>
            Our integrated interactive map allows users to locate available
            parking spots in real-time, guiding them to the best options nearby.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </motion.div>
  );
};

export default Maps;
