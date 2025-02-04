import { motion } from "framer-motion";

const FAQ = () => {
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
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-2">What is Sqoolr?</h3>
              <p className="text-gray-600">
                Sqoolr is an all-in-one platform designed to streamline school management, helping manage student and staff records, admissions, class schedules, and more.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-2">How can I get access?</h3>
              <p className="text-gray-600">
                Sign up for our waitlist to receive early access and updates about the launch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;