import { useState } from "react";
import { motion } from "framer-motion";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent form reload

    try {
      const response = await fetch("http://localhost:5001/api/payment/pay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, amount }),
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
            <div className="payment_inp">
              <label>Amount: </label>
              <input
                type="number"
                placeholder="Enter the amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
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
