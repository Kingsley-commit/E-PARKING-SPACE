import NothingFound from "../NothingFound";
import "../../../Styles/Dashboard.css";
import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
const ChangePassword = lazy(() => import("./ChangePassword"));
const Users = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  const handleChangePassword = () => {
    setShowChangePassword(true);
  };

  const removeChange = () => {
    setShowChangePassword(false)
  }

  window.onclick = (e) => {
    if (e.target === document.querySelector('.change_container')) {
      setShowChangePassword(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="dashboard_cp"
    >
      <div className="dashboard_cp_content">
        <div className="user_container">
          <div className="user_content">
            <h3>
              <i className="fa fa-user"></i>Profile
            </h3>

            <div className="user_content_form">
              <div className="user_profile">
                <i className="fa fa-user"></i>
                <div className="profile_btn_cnt">
                  <button>
                    <i className="fa fa-sign-out-alt"></i>Logout
                  </button>
                  <button onClick={handleChangePassword}>
                    <i className="fa fa-key"></i>Change Password
                  </button>
                </div>
              </div>
            </div>
            {showChangePassword && (
              <Suspense fallback={<div>locaing...</div>}>
                <div className="change_container">
                  <ChangePassword />
                </div>
              </Suspense>
            )}
            {forms()}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const forms = () => {
  const userData = JSON.parse(localStorage.getItem("user"));
  return (
    <div className="profile_form">
      <div className="profile_form_content">
        <div className="profile_cnp">
          <label>First name</label>
          <input type="text" value={userData?.firstName} disabled />
        </div>
        <div className="profile_cnp">
          <label>Last name</label>
          <input type="text" value={userData?.lastName} disabled />
        </div>
        <div className="profile_cnp">
          <label>User name</label>
          <input type="text" value={userData?.userName} disabled />
        </div>
        <div className="profile_cnp">
          <label>Email address</label>
          <input type="text" value={userData?.email} disabled />
        </div>
        <div className="profile_cnp">
          <label>Phone number</label>
          <input type="text" value={userData?.phone} disabled />
        </div>
        <div className="profile_cnp">
          <label>Role</label>
          <select disabled value={userData?.role}>
            <option value="Admin">Admin</option>
            <option value="Driver">Driver</option>
            <option value="Owner">Owner</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Users;
