import '../../../Styles/Dashboard.css';
import { useEffect, useState } from 'react';

const BookingElement = () => {
  const [bookingDetails, setBookingDetails] = useState([]);

  useEffect(() => {
    const spaceId = JSON.parse(localStorage.getItem('Space ID'));
    fetch(`https://smart-parking-system-backend-3.onrender.com/api/Booking/getDetailsForBooking/${spaceId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookingDetails([data]); // Store fetched data
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <div className="main_details_container">
        <div className="main_details_content">
          <h2>Details</h2>
          {bookingDetails.length > 0 ? (
            bookingDetails.map((booking, index) => (
              <div key={index} className='book_main_details'>
                <h4>Driver Details</h4>
                <p>Name: {booking.driver.name}</p>
                <p>Email: {booking.driver.email}</p>
                <p>Phone Number: {booking.driver.phoneNumber}</p>
                <h4>Parking Space Details</h4>
                <p>Name: {booking.parkingSpace.name}</p>
                <p>Location: {booking.parkingSpace.location}</p>
                <p>Total Slots: {booking.parkingSpace.totalSlots}</p>
                <p>Available Slots: {booking.parkingSpace.availableSlots}</p>
              </div>
            ))
          ) : (
            <div>No booking details available.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingElement;