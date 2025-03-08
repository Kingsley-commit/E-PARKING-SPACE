import "../../../Styles/Dashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import NothingFound from "../NothingFound";

const Navigation = () => {
  const [parkingSpaces, setParkingSpaces] = useState([]);

  useEffect((id) => {
    fetch(`https://localhost:7040/api/Booking/GetBookingById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert('data');
        setParkingSpaces(data);
        const location = JSON.parse(data?.location);
        localStorage.setItem("location", location);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // To display data cards
  const getDataForParkingOwner = JSON.parse(localStorage.getItem("parkingOwnerById"));
  const name = getDataForParkingOwner?.name;
  const email = getDataForParkingOwner?.email;
  const phoneNumber = getDataForParkingOwner?.phoneNumber;

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="dashboard_cp"
    >
      <div className="dashboard_cp_content">
        <div className="navigate_container">
          <h1>Navigate and Details</h1>
          <p>Navigate and view user details</p>
          <div className="navigate_cards">
            <div className="navigate_cards_content">
              {getDataForParkingOwner ? (
                <div className='navigate_details'>
                  <h1>{name}</h1>
                  <p>{email}</p>
                  <p>{phoneNumber}</p>
                  <div className="navigate_buttons">
                    <button>Book</button>
                  </div>
                </div>
              ) : (
                <NothingFound />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;