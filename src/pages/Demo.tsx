import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Demo = () => {
  const features = [
    {
      title: "Student Profile Dashboard",
      description: "Comprehensive student information management system with easy access to academic records, attendance, and more.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800",
    },
    {
      title: "Staff Management System",
      description: "Streamlined staff records, performance tracking, and communication tools all in one place.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800",
    },
    {
      title: "Class Scheduling and Attendance",
      description: "Efficient class management with automated attendance tracking and schedule optimization.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
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
            See Sqoolr in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Want to see Sqoolr in action? Take a sneak peek at our platform before it goes live!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
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
            className="inline-block bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            Get Early Access
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Demo;