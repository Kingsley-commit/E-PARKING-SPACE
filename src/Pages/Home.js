import Navbar from "../Componets/Navbar";
import Body from "../Componets/Body";
import bg3 from "../assets/bg3.jpg";
import "../Styles/Home.css";

const Home = () => {
  return (
    <div className="container">
      <img src={bg3} alt="Parking Lot" className="bg_img"/>
      <div className="container_content">
        <Navbar />
        <Body />
      </div>
    </div>
  );
};

export default Home;
