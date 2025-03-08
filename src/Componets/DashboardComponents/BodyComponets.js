import DashboardHeader from "./DashboardHeader";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "Styles/Dashboard.css"; // Fixed import path

const BodyComponent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // 🔥 Fetch the role from localStorage
  const userRole = JSON.stringify(localStorage.getItem("user")) // Default to "Driver" if null

  // Define first links based on roles
  const roleLinks = {
    Admin: "/Dashboard/Users",
    Driver: "/Dashboard/Parking",
    Owner: "/Dashboard",
  };

  useEffect(() => {
    setLoading(true);

    //Redirect to first link based on role when on the dashboard main route
    if (location.pathname === `/Dashboard${userRole}`) {
      navigate(roleLinks[userRole], { replace: true });
      alert('Peace')
    }

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location.pathname, navigate, userRole]);

  return (
    <div className="dashboard_container">
      <div className="dashboard_content">
        <DashboardHeader />
        {loading ? (
          <div className="loader"></div>
        ) : (
          <div className="dashboard_links_container">
            <Outlet />
          </div>
        )}
      </div>
    </div>
  );
};

export default BodyComponent;
