import { motion } from "framer-motion";

const Pricing = () => {
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
            Pricing
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              We believe in providing excellent value while keeping things affordable for schools of all sizes. Our pricing will be announced closer to launch—sign up for the waitlist to be the first to know.
            </p>
            <button className="bg-sqoolr-mint text-[#243665] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Join Waitlist
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;