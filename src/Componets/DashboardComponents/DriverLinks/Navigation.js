import "../../../Styles/Dashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
import NothingFound from "../NothingFound";
const PaymentForm = lazy(() => import('./PaymentForm'));

const Navigation = () => {
  const [parkingSpaces, setParkingSpaces] = useState([]);
  const [showBookingBox, setShowBookingBox] = useState(false);
  const [showBookDetails, setShowBookingDetails] = useState([]);
  const [showPaymentForm, setPaymentForm] = useState(false);
  const [id, setId] = useState(localStorage.getItem("someId")); // Replace with actual ID retrieval logic

  useEffect(() => {
    if (id) {
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
          setParkingSpaces(data);
          const location = JSON.parse(data?.location);
          localStorage.setItem("location", location);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  const bookFunc = (id) => {
    setShowBookingBox(true);
    fetch(`https://localhost:/api/ParkingSpace/GetParkingSpaceById/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('Booking ID', JSON.stringify(data.bookingId)); // Ensure data is an array
      })
      .catch((error) => {
        console.error(error);
      });
    getBookingAmmendentDetails();
  };

  const getBookingAmmendentDetails = () => {
    const id = JSON.parse(localStorage.getItem('Booking ID'));
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
        setShowBookingDetails([data]); // Ensure data is an array
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const paymentForm = () => {
    setPaymentForm(true);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target === document.querySelector('.payment')) {
        setPaymentForm(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // To display data cards
  const getDataForParkingOwner = JSON.parse(
    localStorage.getItem("parkingOwnerById")
  );

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
                <div className="navigate_details">
                  <h1>{name}</h1>
                  <p>Email: {email}</p>
                  <p>Phone number: {phoneNumber}</p>
                  <div className="navigate_buttons">
                    <button onClick={() => { bookFunc() }}>Book</button>
                  </div>
                </div>
              ) : (
                <NothingFound />
              )}
            </div>
            {showBookingBox && (
              <div className="details_container">
                <h1>Booking Details</h1>
                <div className="details_content">
                  {showBookDetails.length > 0 ? (
                    showBookDetails.map((book, index) => (
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
                          <button onClick={paymentForm}>Make Payment</button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div>Click the button to book</div>
                  )}
                </div>
              </div>
            )}

            {showPaymentForm && (
              <Suspense>
                <div className="payment">
                  <button onClick={() => {setPaymentForm(false)}}>&times;</button>
                  <PaymentForm />
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navigation;