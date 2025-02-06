
import { motion } from "framer-motion";
import AmbassadorForm from "./components/AmbassadorForm";
import BenefitsList from "./components/BenefitsList";

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
            Ambassador Program
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Become a Sqoolr Ambassador
            </h2>
            <p className="text-gray-600 mb-8">
              Do you have a passion for education and technology? As a Sqoolr Ambassador,
              you'll be part of a community helping to spread the word about the power
              of Sqoolr.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                Benefits of Being an Ambassador
              </h3>
              <BenefitsList />
            </div>

            <AmbassadorForm />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AmbassadorProgram;
