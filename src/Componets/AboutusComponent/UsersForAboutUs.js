import { motion } from "framer-motion";
import pic1 from "../../assets/ProfilePic1.png";
import pic2 from "../../assets/ProfilePic2.png";
import pic3 from "../../assets/ProfilePic3.png";
import pic4 from "../../assets/ProfilePic4.png";
import pic5 from "../../assets/Pic5.png";
import pic6 from "../../assets/pic1updated.png";
import pic7 from "../../assets/pic7.png";
import pic8 from "../../assets/pic8.png";
import pic9 from "../../assets/pic6.png";
const UserForAboutUS = () => {
  const users = [
    { name: "Okoro John Toc", title: "Digital Forensic Analyst", image: pic9 },
    { name: "Khadijat Yusuf", title: "Business Intelligent Analyst", image: pic2 },
    { name: "Kingsley Ogbanna", title: "Scrum Master", image: pic5 },
    { name: "Onyinye Anokam", title: "Project Manager", image: pic8 },
    { name: "Oyebanjo Olawale", title: "IT Infrastructure Manager", image: pic3 },
    { name: "", title: "", image: "" },
    { name: "Ponle Gwanmak Binde", title: "Application Analyst", image: pic7 },
    { name: "", title: "", image: "" },
    { name: "Oseni Mutiu", title: "Software Engineer", image: pic6 },
    { name: "User 10", title: "", image: "" },
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
        <h1>Meet the team.</h1>
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
