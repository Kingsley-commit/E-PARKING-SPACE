import "../../Styles/Signup.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const SigninComponentForDriver = () => {
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
          <form className="signin_form">
            <div className="inp_cnp">
              <label>First Name</label>
              <input type="text" name="" placeholder="Enter your fullname" />
            </div>

            <div className="inp_cnp">
              <label>Last Name</label>
              <input type="text" name="" placeholder="Enter your fullname" />
            </div>


            <div className="inp_cnp">
              <label>Email</label>
              <input type="email" name="" placeholder="Enter your email" />
            </div>

            <div className="inp_cnp">
              <label>Phone Number</label>
              <input
                type="number"
                name=""
                placeholder="Enter your phone number..."
              />
            </div>

            <div className="inp_cnp">
              <label>New password</label>
              <input type="text" name="password" placeholder="Enter your Password..." />
            </div>

            <div className="inp_cnp">
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>

            <div className="inp_cnp">
              <label>Select Your Role</label>
              <select>
                <option>Select your role</option>
                <option>Admin</option>
                <option>Driver</option>
                <option>Owner</option>
              </select>
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
