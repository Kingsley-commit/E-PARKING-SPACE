import { motion } from "framer-motion";
const UserForAboutUS = () => {
  const users = [
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
    { name: "", title: "", image: {} },
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
                {/*user.image*/}
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
