
import { motion } from "framer-motion";
import InvestorForm from "./components/InvestorForm";

const InvestorPartnership = () => {
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
            Partner with Sqoolr – Empower the Future of Education Through Investment
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-gray-600 mb-8">
              At Sqoolr, we are on a mission to revolutionize school management, and we're looking for partners who share our vision. 
              As an investor or corporate partner, you can play a key role in scaling Sqoolr and expanding its impact on K-12 education worldwide.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-6">Why Partner with Sqoolr?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="font-bold mr-2">Scalable Market:</span>
                  <span>Join the growing EdTech industry with a platform that's already transforming schools.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Innovative Technology:</span>
                  <span>Invest in a product driven by AI and cutting-edge features for school management.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Impactful Growth:</span>
                  <span>Help us expand Sqoolr's reach and provide quality education tools to schools globally.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">Strategic Collaboration:</span>
                  <span>Work closely with us on product development, marketing, and expansion strategies.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-6">Partnership Opportunities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Investment: Funding to accelerate product development and market expansion.</li>
                <li>Corporate Sponsorship: Co-branding opportunities and shared marketing efforts.</li>
                <li>Strategic Partnerships: Collaborations to enhance product offerings and expand market reach.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-6">How to Partner</h2>
              <p className="text-gray-600 mb-8">
                If you're interested in investing or partnering with Sqoolr, fill out the form below to start a conversation with our team. 
                We'll work together to define the best partnership model.
              </p>
              <InvestorForm />
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestorPartnership;
