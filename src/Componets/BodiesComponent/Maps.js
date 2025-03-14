import "../../Styles/Home.css";
import mapicon from "../../assets/mapIcon.jpg";
import mapicon2 from "../../assets/mapicon4.jpg";
import mapicon3 from "../../assets/mapicon3.jpg";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Maps = () => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className="map_container"
    >
      <div className="blur"></div>
      <div className="map_content">
        <div className="intro">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Nearest Parking Spot
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            Our integrated interactive map allows users to locate available
            parking spots in real-time, guiding them to the best options nearby.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            onClick={() => {navigate("./LoginComponent")}}
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Maps;
