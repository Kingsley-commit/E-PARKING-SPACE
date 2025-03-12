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
        <div className="book_container">
          <div className="book_content">
            <table>
              <thead>
                <tr>
                  <th>Parking Lot Name</th>
                  <th>Total Space</th>
                  <th>Available Space</th>
                  <th>Location</th>
                  <th className="th_5">Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {parkingLot.map((lot) => (
                  <tr key={lot.spaceId}>
                    <td>{lot.name}</td>
                    <td>{lot.totalSlots}</td>
                    <td>{lot.availableSlots}</td>
                    <td>{lot.location}</td>
                    <td>
                      <i className="fas fa-naira-sign"></i>
                      {lot.amount}
                    </td>
                    <td className="icons_edit">
                      <i className="fas fa-pencil"></i>
                      <i
                        className="fas fa-trash"
                        onClick={() => deleteLot(lot.spaceId)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <NothingFound />
      )}
    </div>
  );
};

export default ParkingElement;
