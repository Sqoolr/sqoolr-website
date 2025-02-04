import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      title: "Student Records Management",
      description:
        "Stay organized with complete and updated student profiles, from grades and attendance to extracurriculars.",
    },
    {
      title: "Staff Records Management",
      description:
        "Track staff performance, attendance, and profiles, all while keeping everything in one easily accessible dashboard.",
    },
    {
      title: "Admission Management",
      description:
        "Manage applications, create custom forms, and automate the admissions process from start to finish.",
    },
    {
      title: "Class Management",
      description:
        "Effortlessly schedule and manage classes, track attendance, and monitor student progress—all in real-time.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-6">
            Features
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your school efficiently
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-600 mb-6">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/contact"
            className="inline-block bg-sqoolr-mint text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get Early Access
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;