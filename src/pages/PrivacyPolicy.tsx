
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
            
            <p className="mb-6">At Sqoolr, we value and respect your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website, use our services, or interact with us. By using the website or signing up for our services, you agree to the practices described in this Privacy Policy.</p>
            
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">1. Information We Collect</h2>
            <p>We collect the following types of information when you use our website and services:</p>
            
            <h3 className="text-xl font-semibold mt-4 mb-2">Personal Information:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>School or organization details</li>
              <li>Job title and role</li>
              <li>Any other information you voluntarily provide to us through sign-ups, contact forms, or surveys</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Usage Information:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device type</li>
              <li>Referring URL</li>
              <li>Pages visited</li>
              <li>Time spent on our website</li>
              <li>Clickstream data</li>
            </ul>

            <h3 className="text-xl font-semibold mt-4 mb-2">Cookies and Tracking Technologies:</h3>
            <p className="mb-6">We use cookies and similar technologies (such as web beacons and pixels) to track your activity on our website. Cookies help us improve the website's functionality, analyze usage trends, and personalize your experience.</p>

            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and improve our website and services</li>
              <li>To communicate with you regarding updates, new features, and promotional offers (only if you opt-in)</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>To analyze website traffic and improve user experience</li>
              <li>To detect, prevent, and address technical issues</li>
            </ul>

            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">3. Sharing Your Information</h2>
            <p>We do not share your personal information with third parties except in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6">
              <li><span className="font-semibold">Service Providers:</span> We may share your data with trusted third-party service providers who assist with website functionality, marketing, or data analysis. These service providers are obligated to keep your information confidential.</li>
              <li><span className="font-semibold">Business Transfers:</span> If Sqoolr undergoes a merger, acquisition, or sale of assets, your personal information may be transferred as part of the transaction.</li>
              <li><span className="font-semibold">Legal Requirements:</span> We may disclose your personal information if required by law or in good faith belief that such action is necessary to comply with a legal obligation or protect our rights.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of electronic transmission or storage is 100% secure, and we cannot guarantee the absolute security of your data.</p>

            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">5. Your Data Rights</h2>
            <p className="mb-4">Depending on your location and applicable data protection laws, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access and update your personal information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict the processing of your personal data</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mb-6">To exercise these rights, please contact us at contact@sqoolr.com.</p>

            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">6. Third-Party Links</h2>
            <p className="mb-6">Our website may contain links to third-party websites or services that are not owned or controlled by Sqoolr. We are not responsible for the privacy practices of these third-party sites. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">7. Changes to This Privacy Policy</h2>
            <p className="mb-6">We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the most recent update will be indicated at the top. By continuing to use our website and services after the updates, you agree to the changes.</p>

            <hr className="my-8 border-gray-200" />
            
            <p className="text-gray-600">If you have any questions about this Privacy Policy, please contact us at contact@sqoolr.com</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
