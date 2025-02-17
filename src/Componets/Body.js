import carv from "../assets/carv.png";
import "../Styles/Home.css";
const Body = () => {
  return (
    <div className="body_container">
      <div className="body_content">
        <div className="body_text">
          <div>
            Find Your<h1>Parking Space!</h1>
          </div>
          <div className="list_vehicles">
            <button><i className="fa-solid fa-car"></i></button>
            <button><i className="fa-solid fa-bicycle"></i></button>
            <button><i className="fa-solid fa-truck"></i></button>
          </div>
          <button className="check_button">
            Check Availability<i className="fa solid fa-right-arrow"></i>
          </button>
        </div>
        <img src={carv} alt="ima" className="car_image"></img>
      </div>
    </div>
  );
};

export default Body;
