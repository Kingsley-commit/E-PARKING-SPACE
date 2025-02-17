import Navbar from "../Componets/Navbar";
import Aboutbdy from "../Componets/Aboutbdy";
import Footer from "../Componets/Footer";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="about_container">
      <div className="about_content">
        <Navbar />
        <Aboutbdy />
        <Footer />
      </div>
    </div>
  );
};

export default About;
