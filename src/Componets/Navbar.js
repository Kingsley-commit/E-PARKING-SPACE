import { Link } from "react-router-dom";
import "../Styles/Home.css";
const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_design">
        <div>
          <i className="fa-solid fa-car"></i>
        </div>
        <h1>E Parking System</h1>
      </div>
      <nav>
        <Link to="/" className="nav_link">
          Home
        </Link>
        |
        <Link to="/Dashboard" className="nav_link">
          Dashboard
        </Link>
      </nav>
      <div className="button_container">
        <button>Log In</button>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
