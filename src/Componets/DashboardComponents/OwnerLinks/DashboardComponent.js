import { Link } from "react-router-dom";
import "../../../Styles/Dashboard.css";
import NothingFound from "../NothingFound";
import ParkingElement from "../ParkingElements";
import ParkingLotForm from "../ParkingLotForm";
import Greeting from "../Greetings";
import { motion } from "framer-motion";
import HereMap from "Heremaps";
const DashboardComponents = () => {
  return (
    <>
      
      <div className="owner_dashboard_container">
      <Greeting />
        <motion.div
          initial={{ opacity: 0, y: 400 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="owner_dashboard_content"
        >
          <div className="owner_map">
            <div className="owner_box">
              <HereMap />
            </div>

            <div className="owner_box">
              <div className="owner_bx_cnt">
                <div className="owner_header">
                  <Link to="./Allotment" className="owner_header_link">
                    View All
                  </Link>
                </div>
                <ParkingElement/>
              </div>
            </div>
          </div>
          <div className="owner_row">
            <div className="owner_box2">
              <div className="owner_header">
                <Link to="./Payment" className="owner_header_link">
                  View All
                </Link>
              </div>
              <div className="own_err">
                <div className="own_err_content">
                  <i className="fas fa-wallet"></i>
                  <h2>No payment</h2>
                  <p>No one has made any payment</p>
                </div>
              </div>
            </div>
            <div className="owner_box3">
              <div className="own_err">
                <div className="own_err_content">
                  <i className="fas fa-user-group"></i>
                  <h2>No Driver</h2>
                  <p>No driver has booked.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default DashboardComponents;
