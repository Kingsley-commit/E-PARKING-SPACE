import { motion } from "framer-motion";
import pic2 from "../../assets/ProfilePic2.png";
import pic3 from "../../assets/ProfilePic3.png";
import pic5 from "../../assets/Pic5.png";
import pic6 from "../../assets/pic1updated.png";
import pic7 from "../../assets/pic7.png";
import pic8 from "../../assets/pic8.png";
import pic9 from "../../assets/pic6.png";
import pic10 from "../../assets/chris2.png"
import pic11 from "../../assets/mustaphaedit.png"
import pic12 from "../../assets/cheifedit.png"
import pic13 from "../../assets/alahji2.png"
const UserForAboutUS = () => {
  const users = [
    { name: "Okoro John Tochukwu", title: "Digital Forensic Analyst", image: pic9 },
    { name: "Khadijat Yusuf", title: "Business Intelligent Analyst", image: pic2 },
    { name: "Ogbonna Kingsley Victor", title: "Scrum Master", image: pic5 },
    { name: "Onyinye Anokam", title: "Project Manager", image: pic8 },
    { name: "Oyebanjo Olawale", title: "IT Infrastructure Manager", image: pic3 },
    { name: "Christian Anichebe", title: "Backend Developer", image: pic10 },
    { name: "Ponle Gwanmak Binde", title: "Application Analyst", image: pic7 },
    { name: "Olasupo Lateef Oyewale", title: "System Analyst", image: pic12 },
    { name: "Oseni Mutiu", title: "Software Engineer", image: pic6 },
    { name: "Mustapha Barakah", title: "UI/UX Designer", image: pic11 },
    { name: "Adento Azeez Abiidun", title: "Business Developer Officer", image: pic13 },
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
