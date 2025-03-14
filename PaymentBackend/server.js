require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

// ✅ Check if API key is set
if (!PAYSTACK_SECRET_KEY) {
  console.warn("⚠️ PAYSTACK_SECRET_KEY is missing! Check your .env file.");
}

// ✅ Root Route - API Running Status
app.get("/", (req, res) => {
  res.send("🚀 Paystack API is running...");
});

// ✅ Initialize Payment Route
app.post("/api/payment/pay", async (req, res) => {
  try {
    const { email, amount } = req.body;

    if (!email || !amount) {
      return res.status(400).json({ error: "Email and amount are required" });
    }

    const paymentData = {
      email,
      amount: amount, // Convert to kobo
      currency: "NGN",
      callback_url: "http://localhost:3000/Dashboard/DriverPayment",
    };

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      paymentData,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ payment_url: response.data.data.authorization_url });
  } catch (error) {
    console.error("❌ Payment Error:", error.response?.data || error.message);
    res.status(500).json({ error: "Payment Failed" });
  }
});

// ✅ Get All Payments Route
app.get("/api/payments", async (req, res) => {
  try {
    const response = await axios.get("https://api.paystack.co/transaction", {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    });

    // ✅ Send only the required transaction data
    res.json(response.data.data);
  } catch (error) {
    console.error(
      "❌ Error fetching Paystack data:",
      error.response?.data || error.message
    );
    res.status(500).json({ error: "Failed to fetch payment data" });
  }
});

// ✅ Start the Server
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`));