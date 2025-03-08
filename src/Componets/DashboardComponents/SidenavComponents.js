import "../../Styles/Dashboard.css";
import "../../Styles/Home.css";
import { useNavigate } from "react-router-dom";

const Sidenav = () => {
  const navigate = useNavigate();

  // Redirect to Dashboard on page load
  const handleClickLink = (path) => {
    setTimeout(() => {
      navigate(path);
    }, 200);
  };

  // Get user data
  const user = JSON.parse(localStorage.getItem("user")) || { role: [] };
  const userRoles = Array.isArray(user.role) ? user.role : [user.role];
  console.log("User roles:", userRoles); // Debugging output

  // Sidebar links by roles
  const roles = {
    Admin: [
      {
        icon: "fa fa-users",
        name: "Manage Users",
        onClick: () => handleClickLink("/Dashboard/Users"),
      },
      {
        icon: "fa fa-cogs",
        name: "Settings",
        onClick: () => handleClickLink("/Dashboard/Settings"),
      },
      {
        icon: "fa fa-chart-line",
        name: "Analytics",
        onClick: () => handleClickLink("/Dashboard/Analytics"),
      },
    ],
    Driver: [
      {
        icon: "fa fa-parking",
        name: "Parking Spots",
        onClick: () => handleClickLink("/Dashboard/Parking"),
      },
      {
        icon: "fa fa-user",
        name: "Profile",
        onClick: () => handleClickLink("/Dashboard/UserDashboard"),
      },
      {
        icon: "fa fa-wallet",
        name: "Payments",
        onClick: () => handleClickLink("/Dashboard/DriverPayment"),
      },
      {
        icon: "fa fa-road",
        name: "Navigation & Details",
        onClick: () => handleClickLink("/Dashboard/Navigation"),
      },
      {
        icon: "fa fa-sign-out-alt",
        name: "Logout",
        onClick: () => handleClickLink("/LoginComponent"),
      },
    ],
    Owner: [
      {
        icon: "fa fa-columns",
        name: "Dashboard",
        onClick: () => handleClickLink("/Dashboard"),
      },
      {
        icon: "fa fa-car-side",
        name: "Allotment",
        onClick: () => handleClickLink("/Dashboard/Allotment"),
      },
      {
        icon: "fa fa-user",
        name: "Profile",
        onClick: () => handleClickLink("/Dashboard/UserDashboard"),
      },
      {
        icon: "fa fa-wallet",
        name: "Payments",
        onClick: () => handleClickLink("/Dashboard/Payment"),
      },
      {
        icon: "fa fa-file-alt",
        name: "Report",
        onClick: () => handleClickLink("/Dashboard/Report"),
      },
      {
        icon: "fa fa-sign-out-alt",
        name: "Logout",
        onClick: () => handleClickLink("/LoginComponent"),
      },
    ],
  };

  return (
    <div className="sidenav">
      <div className="sidenav_content">
        <div className="sidenav_header">
          <div className="logo_design dashboard_logo">
            <div>
              <i className="fa-solid fa-car"></i>
            </div>
            <h1>EParking System</h1>
          </div>
        </div>

        <nav>
          <ul>
            {userRoles.map((role) =>
              roles[role]?.map((link, index) => (
                <li key={index} onClick={link.onClick} className="dashboard_list">
                  <span>
                    <i className={link.icon}></i>
                    <p>{link.name}</p>
                  </span>
                </li>
              ))
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidenav;
