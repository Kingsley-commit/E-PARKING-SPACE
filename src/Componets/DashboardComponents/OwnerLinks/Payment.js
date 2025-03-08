import '../../../Styles/Dashboard.css';
import { motion } from "framer-motion";
const Payment = () => {
  return (
    <motion.div
    initial={{opacity: 0, y: 200}}
    whileInView={{opacity: 1, y: 0}}
    transition={{duration: 0.5}}
    viewport={{once: true}}
    className="dashboard_cp">
      <div className="dashboard_cp_content">
       <div className='payment_container'>
        <div className='paymet_content'>
          <h1>Payment</h1>
          <p>Check your payment</p>
        </div>
       </div>
      </div>
    </motion.div>
  );
};

export default Payment;
