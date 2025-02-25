import "../../Styles/Signup.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
const SigninComponentForDriver = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (formData.firstName === "") {
      newErrors.firstName = "First Name must be filled";
    } else if (formData.lastName === "") {
      newErrors.lastName = "Last Name must be filled";
    } else if (formData.email === "") {
      newErrors.email = "Email must be filled";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Email must contain charcter set";
    } else if (formData.phoneNumber === "") {
      newErrors.phoneNumber = "Phone Number Must be Filled";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be less than 6";
    } else if (formData.confirmPassword === '') {
      newErrors.confirmPassword = 'Confirm the password'
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.password = "Your Password must be the same";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSignin = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form is Successfull");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <div className="signin_container">
        <div className="sign_content">
          <div className="sign_header">
            <h3>Sign Up To Your Account</h3>
            <span>
              Already have an account ? <Link to="/LoginComponent">Log In</Link>
            </span>
          </div>
          <form className="signin_form" onSubmit={handleSignin}>
            <div className="inp_cnp">
              <label>First Name</label>
              <div className="sign_inp">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />
              </div>
              <div className="errors_msg">{errors.firstName}</div>
            </div>

            <div className="inp_cnp">
              <label>Last Name</label>
              <div className="sign_inp">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Enter your last name"
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />
              </div>
              <div className="errors_msg">{errors.lastName}</div>
            </div>

            <div className="inp_cnp">
              <label>Email</label>
              <div className="sign_inp">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              <div className="errors_msg">{errors.email}</div>
            </div>

            <div className="inp_cnp">
              <label>Phone Number</label>
              <div className="sign_inp">
                <i className="fas fa-phone"></i>
                <input
                  type="number"
                  name="phoneNumber"
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  placeholder="Enter your phone number..."
                />
              </div>
              <div className="errors_msg">{errors.phoneNumber}</div>
            </div>

            <div className="inp_cnp">
              <label>New password</label>
              <div className="sign_inp">
                <i className="fas fa-key"></i>
                <input
                  type="password"
                  name="password"
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  placeholder="Enter your Password..."
                />
              </div>
              <div className="errors_msg">{errors.password}</div>
            </div>

            <div className="inp_cnp">
              <label>Confirm Password</label>
              <div className="sign_inp">
                <i className="fas fa-key"></i>
                <input
                  type="password"
                  name="confirmpassword"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm Password"
                />
              </div>
              <div className="errors_msg">{errors.confirmPassword}</div>
            </div>

            <div className="inp_cnp">
              <label>Select Your Role</label>
              <div className="sign_inp">
                <i className="fas fa-tag"></i>
                <select>
                  <option>Select your role</option>
                  <option name="admin">Admin</option>
                  <option name="driver">Driver</option>
                  <option name="owner">Owner</option>
                </select>
              </div>
            </div>

            <input type="submit" value="Sign up" />
          </form>
          <div className="sign_footer">
            <p>
              By sign up, you agree to our <a href="#/"> Terms of Use</a> and{" "}
              <a href="#l">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SigninComponentForDriver;
