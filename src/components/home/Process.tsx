
import { motion } from "framer-motion";

interface Step {
  title: string;
  description: string;
  titleColor: string;
}

interface ProcessProps {
  steps: Step[];
  activeStep: number;
  setActiveStep: (index: number) => void;
}

const Process = ({ steps, activeStep, setActiveStep }: ProcessProps) => {
  return (
    <section className="py-24 bg-sqoolr-light">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#243665] mb-4">
            A Simple, Streamlined Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: index * 0.2
                }
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setActiveStep(index)}
              className="text-center cursor-pointer relative"
            >
              <motion.div
                animate={{
                  scale: activeStep === index ? 1.1 : 1,
                  backgroundColor: activeStep === index ? '#2dd4bf' : '#4fd1c5'
                }}
                className="w-16 h-16 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6"
              >
                <span>{index + 1}</span>
              </motion.div>

              <motion.h3
                className="text-xl font-semibold mb-4 text-[#243665]"
              >
                {step.title}
              </motion.h3>
              <motion.p
                animate={{
                  opacity: activeStep === index ? 1 : 0.7
                }}
                className="text-gray-600"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
