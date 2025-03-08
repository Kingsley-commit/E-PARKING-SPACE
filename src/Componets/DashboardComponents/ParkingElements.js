import { useEffect, useState } from "react";
import NothingFound from "./NothingFound";

const ParkingElement = () => {
  const [parkingLot, setParkingLot] = useState([]);

  const fetchParkingLots = () => {
    fetch("https://localhost:7040/api/ParkingSpace/GetAllParkingSpaces", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setParkingLot(data);
        console.log(data);
        localStorage.setItem("lot", JSON.stringify(data)); // Fixed JSON storage
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchParkingLots();
  }, []);

  // Function to delete a parking lot
  const deleteLot = async (id) => {
    console.log("Attempting to delete the parking lot with ID:", id);
    try {
      const response = await fetch(
        `https://localhost:7040/api/ParkingSpace/DeleteParkingSpace/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.ok) {
        console.log("Parking lot deleted successfully");
        fetchParkingLots(); // Refetch the data after deletion
      } else {
        const errorText = await response.json();
        console.error("Failed to delete parking lot:", errorText);
      }
    } catch (error) {
      console.error("Error deleting parking lot:", error);
    }
  };

  return (
    <div>
      <h2 className="lot_header_text">Parking Lots</h2>
      {parkingLot.length > 0 ? (
        <div className="lot_container">
          {parkingLot.map((lot) => (
            <div key={lot.spaceId} className="lot_elements">
              <div className="lots_content">
                <span className="park_container">
                  <div className="park_text">Parking Lot Name</div>
                  <div className="park_content">{lot.name}</div>
                </span>
                <span className="totals_container">
                  <div className="totals_text">Total Space</div>
                  <div className="totals_content">{lot.totalSlots}</div>
                </span>
                <span className="avails_container">
                  <div className="avails_text">Available Space</div>
                  <div className="avails_content">{lot.availableSlots}</div>
                </span>
                <span className="location_container">
                  <div className="location_text">Location</div>
                  <div className="location_content">{lot.location}</div>
                </span>
                <span className="price_container">
                  <div className="price_text">Price</div>
                  <div className="price_content">
                    <i className="fas fa-naira-sign"></i>
                    {lot.amount}
                  </div>
                </span>
                <span className="delete_container">
                  <i className="fas fa-pencil"></i>
                  <i
                    className="fas fa-trash"
                    onClick={() => deleteLot(lot.spaceId)}
                  ></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <NothingFound />
      )}
    </div>
  );
};

export default ParkingElement;