//Admin
import AdminUsers from "Componets/DashboardComponents/AdminLinks/AdminUsers";
import Analytics from "Componets/DashboardComponents/AdminLinks/Analytics";
import Settings from "Componets/DashboardComponents/AdminLinks/Settings";
// Owner
import Sidenav from "../Componets/DashboardComponents/SidenavComponents";
import BodyComponent from "../Componets/DashboardComponents/BodyComponets";
import DashboardComponents from "Componets/DashboardComponents/OwnerLinks/DashboardComponent";
import Allotment from "Componets/DashboardComponents/OwnerLinks/Allotment";
import Payment from "Componets/DashboardComponents/OwnerLinks/Payment";
import Users from "Componets/DashboardComponents/OwnerLinks/UsersDashboard";
import Reports from "Componets/DashboardComponents/OwnerLinks/Report";
//Driver
import DriverPayement from "Componets/DashboardComponents/DriverLinks/DriverPayment";
import Navigation from "Componets/DashboardComponents/DriverLinks/Navigation";
import Parking from "Componets/DashboardComponents/DriverLinks/Parking";
import { Routes, Route } from "react-router-dom";
import "Styles/Dashboard.css";
const Dashboard = () => {
  return (
    <div>
      <div className="dashboard_container">
        <div className="dashboard_content">
          <Sidenav />
          <Routes>
            {/*Route For Admin */}
            <Route path="/AdminUsers" element={<AdminUsers />}></Route>
            <Route path="/Analytics" element={<Analytics />}></Route>
            <Route path="/Settings" element={<Settings />}></Route>
            {/*Route For Owner */}
            <Route path="/" element={<BodyComponent />}>
              <Route index element={<DashboardComponents />} />
              <Route path="/Allotment" element={<Allotment />} />
              <Route path="/Payment" element={<Payment />} />
              <Route path="/UserDashboard" element={<Users />} />
              <Route path="/Report" element={<Reports />} />
              {/*Route for Driver components */}
              <Route path="/Parking" element={<Parking />}></Route>
              <Route path="/DriverPayment" element={<DriverPayement />}></Route>
              <Route path="/Navigation" element={<Navigation />}></Route>
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
