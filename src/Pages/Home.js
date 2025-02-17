import Navbar from "../Componets/Navbar";
import Body from "../Componets/Body";
import Footer from "../Componets/Footer";
import WhiteBg1 from "../assets/WhiteBg1.jpg";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <img src={WhiteBg1} alt="Parking Lot" className="bg_img"/>
      <div className="container_content">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
