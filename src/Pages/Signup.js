import "../Styles/Signup.css";
import "../Styles/Home.css";
import signupimage from "../assets/signupimage2.png";
import { motion } from "framer-motion";
import { useState } from "react";

const Signup = () => {
  // To import driver and parking sign-in forms dynamically
  const [SigninComponent, setSigninComponent] = useState(null);
  const [loader, setLoader] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // OnClick for driver sign-in form
  const driverSigninForm = () => {
    setShowForm(true);
    setLoader(true);

    setTimeout(() => {
      import("../Componets/SignupComponets/SigninComponent")
        .then((module) => {
          setLoader(false);
          setSigninComponent(() => module.default); // Store component reference
        })
        .catch((err) =>
          console.error("An error occurred loading Driver Sign In Form: " + err)
        );
    }, 100);
  };


  // Function to go back to the login options
  const goBack = () => {
    setShowForm(false);
    setSigninComponent(null);
  };

  return (
    <div>
      <div className="signup_container">
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="signup_content"
        >
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="signup_form"
          >
            {/* Show the loading message */}
            {loader && <div className="loader"></div>}

            {/* Render the dynamically loaded sign-in form */}
            {SigninComponent && <SigninComponent />}

            {/* If form is not shown, display the welcome and option buttons */}
            {!showForm && (
              <>
                <div className="logo_design">
                  <div>
                    <i className="fa-solid fa-car"></i>
                  </div>
                  <h1>EParking System</h1>
                </div>
                <p>
                  Your Hassle-Free Parking Solution! Log in or sign up to find,
                  reserve, and manage your parking space effortlessly.
                  <br />
                </p>
                <div className="sign_btn">
                  <button onClick={driverSigninForm}>Let Go</button>
                </div>
              </>
            )}

            {/* Display "Back" button if form is loaded */}
            {showForm && (
              <button onClick={goBack} className="back_button">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
            )}
          </motion.div>
          <div className="signup_intro">
            <img src={signupimage} alt="car" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Signup;
