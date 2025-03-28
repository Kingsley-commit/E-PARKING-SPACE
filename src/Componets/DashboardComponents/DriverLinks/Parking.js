import "../../../Styles/Dashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Greeting from "../Greetings";
const PaymentForm = lazy(() => import("./PaymentForm"));
const BookingDetails = lazy(() => import("./BookingElementDetails"));

const Parking = () => {
  const [showBooking, setShowBooking] = useState([]); // Store fetched parking data
  const [owner, setOwner] = useState(false); // Boolean state for owner view
  const [showParkingOwners, setShowParkingOwners] = useState([]);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showBookingDetails, setShowBookingDetails] = useState([]);
  const [showMainBookingDetails, setShowMainBookingDetails] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
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
  const handleBookElement = (spaceId) => {
    fetch(`https://smart-parking-system-backend-3.onrender.com/api/Booking/AddBooking`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        driverId: 9,
        spaceId: spaceId, // Use the spaceId from the parameter
        bookingDate: "2025-03-08T17:59:50.149Z",
        startTime: "2025-03-08T17:59:50.149Z",
        endTime: "2025-03-08T17:59:50.149Z",
        isConfirmed: true,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setShowBookingDetails([data]);
        setShowBookingModal(true);
        localStorage.setItem("Space ID", JSON.stringify(spaceId));
        fetchSpaces()
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const fetchSpaces = async () => {
    const id = JSON.parse(localStorage.getItem("Space ID"))
    try {
      const response = await fetch(
        `https://smart-parking-system-backend-3.onrender.com/api/ParkingSpace/GetParkingSpaceById/${id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const data = await response.json();
      console.log(data);
      localStorage.setItem('Booked Space ID', JSON.stringify(data))
      localStorage.setItem("Amount", data?.amount)
    } catch (error) {
      console.error("An error occured", error);
    }
  };

  // Fetch parking spaces
  useEffect(() => {
    fetch(`https://smart-parking-system-backend-3.onrender.com/api/ParkingSpace/GetAllParkingSpaces`, {
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

  const getDetails = () => {
    setShowMainBookingDetails(true);
    fetch(`https://smart-parking-system-backend-3.onrender.com/api/ParkingSpace/GetAllParkingSpaces`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Store fetched data
      })
      .catch((err) => console.error(err));
  };

  // Fetch parking owners
  useEffect(() => {
    fetch("https://smart-parking-system-backend-3.onrender.com/api/ParkingOwner/GetAllParkingOwners", {
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
        `https://smart-parking-system-backend-3.onrender.com/api/ParkingOwner/GetParkingOwnerById/${id}`,
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
        navigate("/Dashboard/Navigation");
        console.log(data);
        localStorage.setItem("Owner ID", JSON.stringify(data.ownerId));
        localStorage.setItem("parkingOwnerById", JSON.stringify(data));
      }
    } catch (error) {
      console.error("Failed to fetch parking owner details:", error);
    }
  };

  const makePayment = () => {
    setShowPaymentForm(true);
  };

  window.onclick = (e) => {
    if (e.target === document.querySelector(".book_modal")) {
      setShowBookingModal(false);
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
                  <table>
                    <thead>
                      <tr>
                        <th>Parking Lot Name</th>
                        <th>Location</th>
                        <th>Total Slots</th>
                        <th>Available Slots</th>
                        <th>Vehicle Type</th>
                        <th>Price</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {showBooking.map((lot) => (
                        <tr key={lot.spaceId}>
                          <td>{lot.name}</td>
                          <td>{lot.location}</td>
                          <td>{lot.totalSlots}</td>
                          <td>{lot.availableSlots}</td>
                          <td>{lot.vehicleType}</td>
                          <td>
                            <i className="fas fa-naira-sign"></i>
                            {lot.amount}
                          </td>
                          <td>
                            <button
                              onClick={() => handleBookElement(lot.spaceId)}
                            >
                              Book
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No parking lots available.</p>
                )}
              </div>
            </div>
          ) : (
            // Show Owners Section when `owner` is true
            <div className="owner_dash book_content">
              <div className="book_header">
                <h1>Owners</h1>
                <button onClick={availsLot}>
                  <i className="fas fa-car-side"></i> Available Lots
                </button>
              </div>
              <table cellSpacing="0" className="driver_container">
                <thead>
                  <tr>
                    <th className="th-1">Full name</th>
                    <th>Email address</th>
                    <th>Phone number</th>
                    <th className="th_4">Check details</th>
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

          {showBookingModal && (
            <div>
              <div className="book_modal">
                <div className="book_modal_content">
                  <h3>
                    <i className="fas fa-check"></i>Booking Successful
                  </h3>
                  <div className="book_details">
                    {showBookingDetails.map((book, index) => (
                      <div key={index} className="bookings_header">
                        <div className="booking_titles">
                          <h3>Booking Date</h3>
                          <span>{book.bookingDate}</span>
                        </div>
                        <div className="booking_titles">
                          <h3>Start Time</h3>
                          <span>{book.startTime}</span>
                        </div>
                        <div className="booking_titles">
                          <h3>End Time</h3>
                          <span>{book.endTime}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="booking_btn_container">
                    <button onClick={makePayment}>Make Payment</button>
                    <button onClick={getDetails}>Get Details</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/*Show Payment Form */}
          {showPaymentForm && (
            <Suspense fallback={<div className="loader"></div>}>
              <div className="payment">
                <button
                  onClick={() => {
                    setShowPaymentForm(false);
                  }}
                >
                  &times;
                </button>
                <PaymentForm />
              </div>
            </Suspense>
          )}
          {/*Show Booking Details */}
          {showMainBookingDetails && (
            <Suspense fallback={<div className="loader"></div>}>
              <div onClick={() => setShowMainBookingDetails(false)}>
                <BookingDetails />
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Parking;
