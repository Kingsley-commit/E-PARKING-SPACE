import '../../../Styles/Dashboard.css'
import { motion } from 'framer-motion';
import NothingFound from "../NothingFound";
const AdminUsers = () => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="dashboard_cp"
      >
        <div className="dashboard_cp_content">
          <NothingFound />
        </div>
      </motion.div>
    )
}

export default AdminUsers;