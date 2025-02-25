import Navbar from "../Componets/BodiesComponent/Navbar";
import Body from "../Componets/BodiesComponent/Body";
import Footer from "../Componets/BodiesComponent/Footer";
import WhiteBg1 from "../assets/WhiteBg1.jpg";
import "../Styles/Home.css";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.post(
          "https://localhost:7040/api/Account/Registration",
          JSON.stringify({
            firstName: "John",
            lastName: "Doe",
            userName: "johndoe",
            phoneNumber: "1234567890",
            email: "johndoe@example.com",
            password: "Password123!",
            confirmPassword: "Password123!",
            roles: ["user"], // Ensure this matches a valid role
          }),
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <img src={WhiteBg1} alt="Parking Lot" className="bg_img" />
      <div className="container_content">
        <Navbar />
        <Body />
        <div className="cut_footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
