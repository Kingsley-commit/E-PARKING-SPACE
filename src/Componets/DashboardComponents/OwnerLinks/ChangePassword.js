import "../../../Styles/Dashboard.css";
import { useState } from "react";
const ChangePassword = () => {
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const handleChagePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://localhost:7040/api/Manage/ChangePassword",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = response.text();

      if (response.ok) {
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="change_content">
      <h2>Change Password</h2>
      <form>
        <div className="change_cnp">
          <label>Old password</label>
          <input type="text" onChange={(e) => {setFormData({...formData, oldPassword: e.target.value})}} placeholder="Enter Your Old Password" />
        </div>
        <div className="change_cnp">
          <label>New password</label>
          <input type="text" onChange={(e) => {setFormData({...formData, newPassword: e.target.value})}} placeholder="Enter your New Password" />
        </div>
        <div className="change_cnp">
          <label>Confirm password</label>
          <input type="text" onChange={(e) => {setFormData({...formData, confirmPassword: e.target.value})}} placeholder="Confirm Your Password" />
        </div>
        <input type="submit" value="Submit" onClick={handleChagePassword} />
      </form>
    </div>
  );
};

export default ChangePassword;
