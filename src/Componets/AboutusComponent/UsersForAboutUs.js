import { motion } from "framer-motion";
import pic1 from "../../assets/ProfilePic1.png";
import pic2 from "../../assets/ProfilePic2.png";
import pic3 from "../../assets/ProfilePic3.png";
import pic4 from "../../assets/ProfilePic4.png";
import pic5 from "../../assets/Pic5.png";
import pic6 from "../../assets/pic6.png";
import pic7 from "../../assets/pic7.png";

const UserForAboutUS = () => {
  const users = [
    { name: "User 1", image: pic1 },
    { name: "User 2", image: pic2 },
    { name: "User 3", image: pic3 },
    { name: "User 4", image: pic4 },
    { name: "User 5", image: pic5 },
    { name: "User 6", image: pic6 },
    { name: "User 7", image: pic7 },
    { name: "User 8", image: "" },
    { name: "User 9", image: "" },
    { name: "User 10", image: "" },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="users_design_container"
      >
        <div className="user_content">
          <div className="users_box">
            {users.map((user, index) => (
              <div key={index} className="user">
                <div className="image_wrapper">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt="profile"
                      className="image_content"
                    />
                  ) : (
                    <div className="image_placeholder">No Image</div>
                  )}
                </div>
                <div className="user_details">
                  <h3>{user.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default UserForAboutUS;
