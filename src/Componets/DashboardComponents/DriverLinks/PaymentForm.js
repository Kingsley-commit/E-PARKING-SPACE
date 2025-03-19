import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const API_URL = "https://e-parking-space-for-payment-backend.onrender.com"; // ✅ Updated Backend URL

const PaymentForm = () => {
  const [email, setEmail] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      const amount = JSON.parse(localStorage.getItem("Amount")); // Retrieve amount from localStorage
      const response = await fetch(`${API_URL}/api/payment/pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, amount }), // Send the amount along with the email
      });

      const data = await response.json();
      if (data.payment_url) {
        window.location.href = data.payment_url; // Redirect to Paystack checkout
      } else {
        console.error("Error:", data.error);
        alert("Payment failed!");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="payment_container">
      <motion.div
        initial={{ opacity: 0, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="payment_content"
      >
        <form onSubmit={handlePayment}>
          <h3>Payment Form</h3>
          <div className="payment_input">
            <div className="payment_inp">
              <label>Email: </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <input type="submit" value="Pay Now" />
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default PaymentForm;
