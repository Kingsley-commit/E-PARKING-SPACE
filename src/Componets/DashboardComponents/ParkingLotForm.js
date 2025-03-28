import "../../Styles/Dashboard.css";
import { useState, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import NothingFound from "./NothingFound";
const AddLots = lazy(() => import("./ParkingElements"));

const ParkingLotForm = () => {
  const [showLots, setShowLot] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showLotElement, setShowLotElement] = useState(false);
  const [removeNothingFound, setNothingFound] = useState(true);
  const [error, setError] = useState([]);
  const [refreshData, setRefreshData] = useState(false);

  const [parkingLot, setParkingLotData] = useState({
    name: "",
    location: "",
    totalSlots: 0,
    availableSlots: 0,
    vehicleType: "",
    isAvailable: true,
    amount: 0,
  });

  const validate = () => {
    let newErrors = {};

    if (parkingLot.name === "") {
      newErrors.name = "Name must be filled";
    } else if (parkingLot.location === "") {
      newErrors.location = "Location must be filled";
    } else if (parkingLot.totalSlots === "") {
      newErrors.totalSlots = "Total Space must be filled.";
    } else if (parkingLot.availableSlots === "") {
      newErrors.availableSlots = "Available spaces must be filled.";
    } else if (parkingLot.vehicleType === "") {
      newErrors.vehicleType = "Vehicle type must be filled";
    } else if (parkingLot.amount === "") {
      newErrors.amount = "Amount must be filled";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleParkingForm = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(
          "https://smart-parking-system-backend-3.onrender.com/api/ParkingSpace/AddParkingSpace",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(parkingLot),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to save parking lot data");
        }

        alert("Parking lot added successfully");
        localStorage.setItem("ParkingLot", JSON.stringify(parkingLot));
        // Reset form
        setParkingLotData({
          name: "",
          location: "",
          totalSlots: 0,
          availableSlots: 0,
          vehicleType: "",
          isAvailable: true,
          amount: 0,
        });

        setError([]);
        setShowLotElement(true);
        setNothingFound(false);
        setShowForm(false);
        setRefreshData(true); // Trigger data refresh
      } catch (error) {
        console.error("Error saving parking lot:", error);
      }
    }
  };

  const handleCreateNewOwner = () => {
    setShowLot(true);
    setShowForm(true);
  };

  const closeParkingForm = () => {
    setShowForm(false);
    setShowLot(true);
  };

  const handleDataRefresh = () => {
    setRefreshData(false);
  };

  return (
    <div className="mainlink_container">
      {showLots && (
        <div className="add_container">
          {showLotElement && (
            <Suspense>
              <div>
                <AddLots
                  refreshData={refreshData}
                  onRefresh={handleDataRefresh}
                />
              </div>
            </Suspense>
          )}

          <div className="add_content">
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
              <p>Please enter all the necessary forms correctly.</p>
              <form>
                <div className="park_inp">
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={parkingLot.name}
                    onChange={(e) => {
                      setParkingLotData({
                        ...parkingLot,
                        name: e.target.value,
                      });
                    }}
                    required
                  />
                  <div className="err">{error.name}</div>
                </div>
                <div className="park_inp">
                  <label>Location</label>
                  <div className="location_input">
                    <input
                      type="text"
                      placeholder="Enter your location"
                      value={parkingLot.location}
                      onChange={(e) => {
                        setParkingLotData({
                          ...parkingLot,
                          location: e.target.value,
                        });
                      }}
                      required
                    />
                  </div>
                  <div className="err">{error.location}</div>
                </div>
                <div className="park_inp">
                  <label>Total Spaces</label>
                  <input
                    type="number"
                    placeholder="Enter your total spaces"
                    value={parkingLot.totalSlots}
                    onChange={(e) => {
                      setParkingLotData({
                        ...parkingLot,
                        totalSlots: e.target.value,
                      });
                    }}
                    required
                  />
                  <div className="err">{error.totalSlots}</div>
                </div>
                <div className="park_inp">
                  <label>Available Spaces</label>
                  <input
                    type="number"
                    placeholder="Enter your available spaces"
                    value={parkingLot.availableSlots}
                    onChange={(e) => {
                      setParkingLotData({
                        ...parkingLot,
                        availableSlots: e.target.value,
                      });
                    }}
                    required
                  />
                  <div className="err">{error.availableSlots}</div>
                </div>
                <div className="park_inp">
                  <label>Vehicle Type</label>
                  <input
                    type="text"
                    placeholder="Enter your vehicle type"
                    value={parkingLot.vehicleType}
                    onChange={(e) => {
                      setParkingLotData({
                        ...parkingLot,
                        vehicleType: e.target.value,
                      });
                    }}
                    required
                  />
                  <div className="err">{error.vehicleType}</div>
                </div>
                <div className="park_inp">
                  <label>Amount</label>
                  <input
                    type="number"
                    placeholder="Enter your amount"
                    value={parkingLot.amount}
                    onChange={(e) => {
                      setParkingLotData({
                        ...parkingLot,
                        amount: e.target.value,
                      });
                    }}
                    required
                  />
                  <div className="err">{error.amount}</div>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  onClick={handleParkingForm}
                ></input>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ParkingLotForm;
