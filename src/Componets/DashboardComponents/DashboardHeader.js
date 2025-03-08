import "Styles/Dashboard.css";
import "../../Styles/Home.css";
import { useState, lazy, Suspense } from "react";

const Sidenav = lazy(() => import("../Weather"));

const DashboardHeader = () => {
  const [showSideNav, setShowSideNav] = useState(false);

  return (
    <div className="dashboard_header">
      <div className="input_container">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search Location..." />
      </div>
      <div className="dashboard_icon_btn">
        <button>
          <i className="fas fa-map-marker-alt"></i>
        </button>
        <button onClick={() => setShowSideNav(true)}>
          <i className="fas fa-cloud-sun"></i>
        </button>
      </div>

      {showSideNav && (
        <Suspense>
          {/* Wrap it in a div to use ref */}
          <div>
            <Sidenav />
          </div>
        </Suspense>
      )}
    </div>
  );
};

export default DashboardHeader;
