import DashboardHeader from "./DashboardHeader";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "Styles/Dashboard.css"; // Fixed import path

const BodyComponent = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

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
