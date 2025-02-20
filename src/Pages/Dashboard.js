import Sidenav from "../Componets/DashboardComponents/SidenavComponents";
import BodyComponent from "../Componets/DashboardComponents/BodyComponets";
import DashboardComponents from "Componets/DashboardComponents/DashboardComponent";
import Allotment from "Componets/DashboardComponents/Allotment";
import Payment from "Componets/DashboardComponents/Payment";
import Users from "Componets/DashboardComponents/UsersDashboard";
import Reports from "Componets/DashboardComponents/Report";
import { Routes, Route } from "react-router-dom";
import 'Styles/Dashboard.css';
const Dashboard = () => {
  return (
    <div>
      <div className="dashboard_container">
        <div className="dashboard_content">
          <Sidenav />
          <Routes>
            <Route path="/" element={<BodyComponent />}>
              <Route index element={<DashboardComponents />} />
              <Route path="/Allotment" element={<Allotment />} />
              <Route path="/Payment" element={<Payment />} />
              <Route path="/User" element={<Users />} />
              <Route path="/Report" element={<Reports />} />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
