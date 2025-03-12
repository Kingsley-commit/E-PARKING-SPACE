import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../../../Styles/Dashboard.css";
import NothingFound from "../NothingFound";

const DriverPayment = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/payments"); // Replace with your actual API
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching payments:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="dashboard_cp"
    >
      <div className="dashboard_cp_content">
        <div className="main_payment_container">
          <h2>Payment History</h2>
        <div className="book_content">
          {loading ? (
            <p>Loading transactions...</p>
          ) : transactions.length === 0 ? (
            <NothingFound />
          ) : (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Amount (₦)</th>
                  <th>Status</th>
                  <th className="th_6">Date</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id}>
                    <td>{tx.id}</td>
                    <td>{tx.customer?.email || "N/A"}</td>
                    <td>₦{(tx.amount / 100).toFixed(2)}</td>
                    <td ><div className={tx.status === 'success' ? 'status_success' : 'status_failed'}>{tx.status}</div></td>
                    <td>{new Date(tx.created_at).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DriverPayment;
