import { motion } from "framer-motion";
import pic1 from "../../assets/ProfilePic1.png";
import pic2 from "../../assets/ProfilePic2.png";
import pic3 from "../../assets/ProfilePic3.png";
import pic4 from "../../assets/ProfilePic4.png";
const UserForAboutUS = () => {
  const users = [
    { name: "", title: "", image: {pic1} },
    { name: "", title: "", image: {pic2} },
    { name: "", title: "", image: {pic3} },
    { name: "", title: "", image: {pic4} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
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
            {users.map((user) => (
              <div className="user">
                <div className="image_wrapper">
                <img src={user.image} alt="profile" className="image_content"/>
                </div>
                <div className="user_details">
                  <h3>{user.name}</h3>
                  <p>{user.title}</p>
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
