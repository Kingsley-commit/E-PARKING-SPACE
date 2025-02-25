import "../../Styles/Dashboard.css";
import { useState } from "react";
import { motion } from "framer-motion";
const ParkingLotForm = () => {
  const [showLots, setShowLot] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const handleCreateNewOwner = () => {
    setShowLot(true);
    setShowForm(true);
  };

  const closeParkingForm = () => {
    setShowForm(false);
    setShowLot(true);
  };

  return (
    <div className="mainlink_container">
      {showLots && (
        <div className="add_container">
          <div className="add_content">
            <h3>Parking Lot</h3>
            <p>Become a parkng lot owner by clicking this button.</p>
            <button onClick={handleCreateNewOwner}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </div>
      )}

      {showForm && (
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="parking_form_container"
        >
          <div className="cancel_btn" onClick={closeParkingForm}>
            &times;
          </div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="parking_form_content"
          >
            <div className="parking_form">
              <h1>Parking Lot Information</h1>
              <p>Please enter all the neccessary forms correctly.</p>
              <form>
                <div className="park_inp">
                  <label>Parking Lot Name</label>
                  <input
                    type="text"
                    placeholder="Enter the name of parking lots"
                  />
                </div>
                <div className="park_inp">
                  <label>Location</label>
                  <input type="text" placeholder="Enter your location" />
                </div>
                <div className="park_inp">
                  <label>Total Spaces</label>
                  <input type="number" placeholder="Enter your total spaces" />
                </div>
                <div className="park_inp">
                  <label>Availabe Space</label>
                  <input type="number" placeholder="Enter available Space" />
                </div>
                <div className="park_inp">
                  <label>Parking Type</label>
                  <select>
                    <option>Select Parking Type</option>
                    <option>Public</option>
                    <option>Private</option>
                    <option>Reserved</option>
                  </select>
                </div>

                <div className="park_inp">
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="Enter your price per hour"
                  />
                </div>

                <div className="park_inp">
                  <label>Handicap</label>
                  <select>
                    <option>Do you have a space for handicap</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="park_inp">
                  <label>EV charging</label>
                  <select>
                    <option>Do you have EV charging</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <div className="park_inp">
                  <label>Security</label>
                  <select>
                    <option>Do you have Security</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <input type="submit" value="Submit"></input>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ParkingLotForm;
