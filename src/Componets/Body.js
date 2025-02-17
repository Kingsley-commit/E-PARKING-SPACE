import carv from "../assets/carv.png";
import Map from "./Maps";
import "../Styles/Home.css";
const Body = () => {
  return (
    <div className="body_container">
      <div className="body_content">
        <div className="body_text">
          <div>
            Find Your<h1>Parking Space!</h1>
          </div>
          <div>
            <p>
              The E-Smart Parking System is a web-based platform designed to
              simplify and enhance the parking experience. By leveraging APIs
              for real-time data management, this system allows users to find,
              book, and manage parking spaces seamlessly.
            </p>
          </div>
          <button className="check_button">
            Check Availability<i className="fa solid fa-right-arrow"></i>
          </button>
        </div>
        <img src={carv} alt="ima" className="car_image"></img>
      </div>
      <Map />
    </div>
  );
};

export default Body;
