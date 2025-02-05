import { motion } from "framer-motion";

const TermsOfService = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-sqoolr-navy mb-8">Terms of Service</h1>
          <div className="bg-white rounded-xl shadow-lg p-8 prose prose-lg max-w-none">
            <p className="text-gray-600 mb-4">Effective Date: {currentDate}</p>
            <p className="text-gray-600 mb-8">Last Updated: {currentDate}</p>
            
            <p className="mb-6">These Terms of Service ("Terms") govern your use of Sqoolr's school management system (the "Service"). By using or accessing the Service, you agree to comply with and be bound by these Terms.</p>
            
            {/* Account Creation */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">1. Account Creation</h2>
            <p className="mb-6">To access and use Sqoolr, you must create an account by providing accurate and complete information. You are responsible for maintaining the confidentiality of your account credentials and are fully responsible for all activities that occur under your account.</p>
            
            {/* Use of the Service */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">2. Use of the Service</h2>
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Use the Service in any way that violates any applicable local, national, or international law.</li>
              <li>Use the Service to transmit harmful or unlawful content, including but not limited to viruses, malware, or spam.</li>
              <li>Attempt to gain unauthorized access to the Service or its systems.</li>
            </ul>

            {/* Subscription and Payments */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">3. Subscription and Payments</h2>
            <p className="mb-6">Sqoolr operates on a subscription-based model. By subscribing to the Service, you agree to pay all applicable fees in accordance with the pricing plan you select. Payments are processed through a third-party payment processor, and you agree to comply with the processor's terms and conditions.</p>

            {/* School Data */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">4. School Data</h2>
            <p className="mb-6">As a school management system, Sqoolr will collect, store, and process various types of school-related data, including student and teacher records, attendance data, grades, and other educational information. You are responsible for ensuring that you have the necessary consent to collect and manage such data in compliance with applicable privacy laws and regulations.</p>

            {/* Data Ownership and Rights */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">5. Data Ownership and Rights</h2>
            <p className="mb-6">You retain ownership of all data you provide to Sqoolr, including student records and educational data. Sqoolr will only use such data to provide and improve the Service. Sqoolr will not sell or share your data except as outlined in the Privacy Policy.</p>

            {/* Service Availability and Limitations */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">6. Service Availability and Limitations</h2>
            <p className="mb-6">Sqoolr aims to provide reliable and uninterrupted access to the Service. However, we do not guarantee that the Service will be error-free or available at all times. We may suspend or limit access to the Service for maintenance or updates.</p>

            {/* Termination */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">7. Termination</h2>
            <p className="mb-6">You may terminate your account at any time by contacting our support team or through your account settings. We may suspend or terminate your access to the Service if you violate these Terms or for other reasons at our discretion.</p>

            {/* Limitation of Liability */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="mb-6">To the maximum extent permitted by law, Sqoolr will not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Service or inability to use the Service, including but not limited to loss of data or profits.</p>

            {/* Indemnification */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">9. Indemnification</h2>
            <p className="mb-6">You agree to indemnify, defend, and hold harmless Sqoolr and its affiliates from any claims, damages, liabilities, and expenses arising out of your use of the Service or violation of these Terms.</p>

            {/* Changes to the Terms of Service */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">10. Changes to the Terms of Service</h2>
            <p className="mb-6">We reserve the right to update or modify these Terms at any time. Any changes will be posted on our website, and the updated Terms will become effective immediately upon posting.</p>

            {/* Governing Law */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">11. Governing Law</h2>
            <p className="mb-6">These Terms are governed by and construed in accordance with the laws of Nigeria, without regard to its conflict of law principles.</p>

            {/* Contact Us */}
            <h2 className="text-2xl font-semibold text-sqoolr-navy mt-8 mb-4">12. Contact Us</h2>
            <p className="mb-6">If you have any questions or concerns about these Terms of Service, please contact us at:</p>
            <p>Email: hello@sqoolr.ng</p>

            <hr className="my-8 border-gray-200" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;