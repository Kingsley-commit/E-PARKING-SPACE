import "../../../Styles/Dashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Greeting from "../Greetings";

const Parking = () => {
  const [showBooking, setShowBooking] = useState([]); // Store fetched parking data
  const [owner, setOwner] = useState(false); // Boolean state for owner view
  const [showParkingOwners, setShowParkingOwners] = useState([]);
  const navigate = useNavigate();

  // Function to show Owners
  const openLots = () => {
    setOwner(true);
  };

  // Function to show Available Parking Lots
  const availsLot = () => {
    setOwner(false);
  };

  // Function to handle booking
  const handleBookElement = () => {
    fetch(`https://localhost:7040/api/Booking/AddBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert("Booking successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Fetch parking spaces
  useEffect(() => {
    fetch("https://localhost:7040/api/ParkingSpace/GetAllParkingSpaces", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowBooking(data); // Store fetched data
      })
      .catch((err) => console.error(err));
  }, []);

  // Fetch parking owners
  useEffect(() => {
    fetch("https://localhost:7040/api/ParkingOwner/GetAllParkingOwners", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowParkingOwners(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const viewParkingDetails = async (id) => {
    console.log("Viewing parking details for:", id);
    try {
      const response = await fetch(
        `https://localhost:7040/api/ParkingOwner/GetParkingOwnerById/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      
      if (response.ok) {
        navigate('/Dashboard/Navigation');
        localStorage.setItem("parkingOwnerById", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Failed to fetch parking owner details:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="dashboard_cp"
    >
      <div className="dashboard_cp_content">
        <Greeting />
        <div>
          {!owner ? ( // Show Available Parking Lots if `owner` is false
            <div className="book_container">
              <div className="book_header">
                <h1>Available Parking Lots</h1>
                <button onClick={openLots}>
                  <i className="fas fa-user-group"></i> Display Owners
                </button>
              </div>
              <div className="book_content">
                {showBooking.length > 0 ? (
                  showBooking.map((lot) => (
                    <div key={lot.ownerId} className="book_element">
                      <div className="book_element_nodes">
                        <div className="book_text">Parking Lot Name</div>
                        <div className="book_data">{lot.name}</div>
                      </div>
                      <div className="book_element_nodes">
                        <div className="book_text">Location</div>
                        <div className="book_data">{lot.location}</div>
                      </div>
                      <div className="book_element_nodes">
                        <div className="book_text">Total Slots</div>
                        <div className="book_data">{lot.totalSlots}</div>
                      </div>
                      <div className="book_element_nodes">
                        <div className="book_text">Available Slots</div>
                        <div className="book_data">{lot.availableSlots}</div>
                      </div>
                      <div className="book_element_nodes">
                        <div className="book_text">Vehicle Type</div>
                        <div className="book_data">{lot.vehicleType}</div>
                      </div>
                      <div className="book_element_nodes">
                        <div className="book_text">Price</div>
                        <div className="book_data">
                          <i className="fas fa-naira-sign"></i>
                          {lot.amount}
                        </div>
                      </div>
                      <button onClick={handleBookElement}>
                        Book
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No parking lots available.</p>
                )}
              </div>
            </div>
          ) : (
            // Show Owners Section when `owner` is true
            <div className="owner_dash">
              <div className="book_header">
                <h1>Owners</h1>
                <button onClick={availsLot}>
                  <i className="fas fa-car-side"></i> Available Lots
                </button>
              </div>
              <table cellSpacing="0" className="driver_container">
                <thead>
                  <tr>
                    <th>Full name</th>
                    <th>Email address</th>
                    <th>Phone number</th>
                    <th>Check details</th>
                  </tr>
                </thead>
                <tbody>
                  {showParkingOwners.length > 0 ? (
                    showParkingOwners.map((owners) => {
                      return (
                        <tr key={owners.ownerId}>
                          <td>{owners.name}</td>
                          <td>{owners.email}</td>
                          <td>{owners.phoneNumber}</td>
                          <td>
                            <button
                              className="owners_btn"
                              onClick={() => viewParkingDetails(owners.ownerId)}
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <tr>
                      <td colSpan="4">No parking owners found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Parking;