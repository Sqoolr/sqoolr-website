
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                Partner School
              </h2>
              <p className="text-gray-600 mb-6">
                Join our exclusive group of partner schools and get early access to features.
              </p>
              <Link 
                to="/partnerships/school"
                className="inline-block bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                Technology Partners
              </h2>
              <p className="text-gray-600 mb-6">
                Collaborate with us to enhance school operations with your technology.
              </p>
              <Link 
                to="/partnerships/tech"
                className="inline-block bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                Ambassador Program
              </h2>
              <p className="text-gray-600 mb-6">
                Become an advocate for the future of education with Sqoolr.
              </p>
              <Link 
                to="/partnerships/ambassador"
                className="inline-block bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                Investor & Corporate
              </h2>
              <p className="text-gray-600 mb-6">
                Partner with us to empower the future of education through investment.
              </p>
              <Link 
                to="/partnerships/investor"
                className="inline-block bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                Learn More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Partnerships;
