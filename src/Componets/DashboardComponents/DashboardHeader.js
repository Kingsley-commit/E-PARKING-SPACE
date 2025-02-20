import "Styles/Dashboard.css";
const DashboardHeader = () => {
  return (
    <div className="dashboard_header">
      <div className="input_container">
        <i className="fas fa-search"></i>
        <input type="text" placeholder="Search Input..."></input>
      </div>
      <button>
        <i className="fas fa-map-marker-alt"></i>
      </button>
    </div>
  );
};

export default DashboardHeader;
