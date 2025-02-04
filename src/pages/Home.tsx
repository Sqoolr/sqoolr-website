import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-white to-sqoolr-light">
        <div className="container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sqoolr-navy mb-6">
              Revolutionizing School Management,{" "}
              <span className="text-sqoolr-mint">One Click at a Time</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sqoolr is the all-in-one solution to streamline school
              administration, attendance tracking, and student management.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-sqoolr-mint text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Join the Waitlist
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
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

      {/* How It Works Section */}
      <section className="py-24 bg-sqoolr-light">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-4">
              How It Works
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-sqoolr-mint text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    title: "Student Records Management",
    description:
      "Easily manage student profiles, track progress, and store academic records all in one place.",
  },
  {
    title: "Staff Records Management",
    description:
      "Simplify staff management with seamless records tracking, performance assessments, and communications.",
  },
  {
    title: "Admission Management",
    description:
      "Streamline the admissions process with automated workflows and instant access to essential student information.",
  },
  {
    title: "Class Management",
    description:
      "Plan, organize, and manage classes effortlessly, from schedules to attendance, in real time.",
  },
];

const steps = [
  {
    title: "Sign Up",
    description: "Join our waitlist and be the first to experience Sqoolr!",
  },
  {
    title: "Onboard Easily",
    description:
      "Our user-friendly platform makes it simple to set up and manage your school's records and operations.",
  },
  {
    title: "Improve Efficiency",
    description:
      "Save time, reduce errors, and foster better communication with our comprehensive management tools.",
  },
];

export default Home;