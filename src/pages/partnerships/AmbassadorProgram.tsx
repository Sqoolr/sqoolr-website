
import { motion } from "framer-motion";
import AmbassadorForm from "./components/AmbassadorForm";

const AmbassadorProgram = () => {
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
            Become a Sqoolr Ambassador – Advocate for the Future of Education
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <p className="text-gray-600 mb-8">
              Do you have a passion for education and technology? As a Sqoolr Ambassador, 
              you'll be part of a community helping to spread the word about the power of Sqoolr. 
              This is your opportunity to make a difference while enjoying exclusive perks.
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-6">Benefits of Being an Ambassador</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2">🎤</span>
                  <span><strong>Exclusive Early Access:</strong> Be the first to test new features and share your experience.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📢</span>
                  <span><strong>Promotion Opportunities:</strong> Share Sqoolr at events, conferences, and webinars.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💼</span>
                  <span><strong>Networking:</strong> Connect with educators, administrators, and influencers in the education tech space.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span><strong>Thought Leadership:</strong> Share your insights and expertise on education technology.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-6">Responsibilities of an Ambassador</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Share Sqoolr with your network and encourage adoption.</li>
                <li>Speak at relevant events or webinars to promote Sqoolr.</li>
                <li>Provide feedback to help shape the future of the platform.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-6">How to Join the Ambassador Program</h2>
              <p className="text-gray-600 mb-8">
                Complete the form below to apply for the Ambassador Program. If you're selected, 
                you'll be part of an exciting initiative to bring Sqoolr to more schools.
              </p>
              <AmbassadorForm />
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmbassadorProgram;
