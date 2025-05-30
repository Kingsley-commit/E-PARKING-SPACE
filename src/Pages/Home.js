import Navbar from "../Componets/BodiesComponent/Navbar";
import Body from "../Componets/BodiesComponent/Body";
import Footer from "../Componets/BodiesComponent/Footer";
import WhiteBg1 from "../assets/WhiteBg1.jpg";
import "../Styles/Home.css";
import { useEffect } from "react";

const Home = () => {
  return (
    <div className="container">
      <img src={WhiteBg1} alt="Parking Lot" className="bg_img" />
      <div className="container_content">
        <Navbar />
        <Body />
        <div className="cut_footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
