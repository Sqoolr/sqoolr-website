
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
}

interface FeaturesProps {
  features: Feature[];
}

const Features = ({ features }: FeaturesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-4">
            Key Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your school efficiently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.2)"
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg transition-all"
            >
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
