import Navbar from "../Componets/BodiesComponent/Navbar";
import Aboutbdy from "../Componets/AboutusComponent/Aboutbdy";
import Footer from "../Componets/BodiesComponent/Footer";
import "../Styles/About.css";
const About = () => {
  return (
    <div className="about_container">
      <div className="about_content">
        <div className="about_header">
        <Navbar />
        </div>
        <Aboutbdy />
        <Footer />
      </div>
    </div>
  );
};

export default About;
