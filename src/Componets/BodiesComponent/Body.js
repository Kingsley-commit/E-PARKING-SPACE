import carv from "../../assets/carv.png";
import Map from "./Maps";
import "../../Styles/Home.css";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Section from "Componets/BodiesComponent/Section";

const Body = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation both on scroll up and down
    threshold: 0.1, // Adjust the threshold as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="body_container">
      <div className="body_content">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          transition={{ duration: 0.9 }}
          className="body_text"
        >
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.9 }}
            className="h1_type"
          >
            Find Your<h1><i className="fas fa-search"></i>Parking Space!</h1>
          </motion.div>
          <motion.div
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.9 }}
            className="body_text_para"
          >
            <p>
              The EParking System is a web-based platform designed to simplify
              and enhance the parking experience. By leveraging APIs for
              real-time data management, this system allows users to find, book,
              and manage parking spaces seamlessly.
            </p>
          </motion.div>
          <motion.button
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 0.9 }}
            className="check_button"
            onClick={() => navigate("/LoginComponent")}
          >
            Check Availability<i className="fa solid fa-right-arrow"></i>
          </motion.button>
        </motion.div>
        <img src={carv} alt="ima" className="car_image"></img>
      </div>
      <Section />
      <Map />
    </div>
  );
};

export default Body;