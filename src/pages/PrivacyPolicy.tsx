import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-sqoolr-navy mb-8">Privacy Policy</h1>
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">Last updated: {new Date().toLocaleDateString()}</p>
            
            <p className="mb-6">At Sqoolr, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, use our services, or interact with us.</p>
            
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect the following types of information when you use our website and services:</p>
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>School or organization details</li>
              <li>Job title and role</li>
            </ul>

            {/* ... Additional privacy policy sections */}
            <p className="mt-8">For the complete privacy policy, please contact us at support@sqoolr.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;