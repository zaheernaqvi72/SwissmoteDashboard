import { motion } from "framer-motion";
import PropTypes from "prop-types";

const AnimatedCard = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.3 }}
    className="bg-white shadow-lg rounded-lg p-4"
  >
    {children}
  </motion.div>
);

AnimatedCard.propTypes = {
    children: PropTypes.node.isRequired,
    };

export default AnimatedCard;
