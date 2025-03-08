import { Link } from "react-router-dom";
import { useState, lazy, Suspense } from "react";
import "../../Styles/Dashboard.css";
import "../../Styles/Home.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BookingForm = lazy(() =>
  import("../DashboardComponents/DriverLinks/BookingForm")
);

const LoginComponent = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const redirectUserBasedOnRole = (roles) => {
    if (!roles || roles.length === 0) {
      navigate("/Dashboard"); // Default route
    } else if (roles.includes("Admin")) {
      navigate("/Dashboard/Users");
    } else if (roles.includes("Driver")) {
      navigate("/Dashboard/Parking");
    } else {
      navigate("/Dashboard"); // Default fallback
    }
  };

  const handleClickLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://localhost:7040/api/Account/Login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, password }),
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("role", JSON.stringify(data.role || []));
      redirectUserBasedOnRole(data.role);
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid username or password");
    }
  };

  return (
    <div className="sign_component_container">
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="sign_component_content"
      >
        <div className="logo_design">
          <div>
            <i className="fa-solid fa-car"></i>
          </div>
          <h1>EParking System</h1>
        </div>
        <h3>Welcome Back</h3>
        <p>Please enter your details to sign in.</p>

        <form className="sign_component_form">
          <div className="sign_component_cnp">
            <label>Username</label>
            <div className="user_input">
              <i className="fa-solid fa-user"></i>
              <input
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="sign_component_cnp">
            <label>Password</label>
            <div className="user_input">
              <i className="fa-solid fa-key"></i>
              <input
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="info2">
            <div className="info2_content">
              <input type="checkbox" />
              <label>Remember Me</label>
            </div>
            <p>
              <Link to="/ForgotPassword">Forgot Password</Link>
            </p>
          </div>
          <input type="submit" value="Log in" onClick={handleClickLogin} />
          <div className="info3">
            <p>
              Don't have an account?
              <span>
                <Link to="/Signup">Create account</Link>
              </span>
            </p>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginComponent;
