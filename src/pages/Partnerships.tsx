
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Partnerships = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-8 text-center">
            Partner with Sqoolr
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Partnership Opportunities
            </h2>
            <p className="text-gray-600 mb-6">
              Are you an EdTech company, a school network, or an organization looking to partner with Sqoolr? Let's work together to bring the best solutions to schools worldwide.
            </p>
            <Link 
              to="/contact"
              className="inline-block bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partnerships;
