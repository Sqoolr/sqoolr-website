import { motion } from "framer-motion";

const About = () => {
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
            About Sqoolr
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              The Story Behind Sqoolr
            </h2>
            <p className="text-gray-600 mb-6">
              At Sqoolr, we believe school management should be easier, more
              efficient, and more connected. That's why we created a platform
              designed to simplify administrative tasks, reduce errors, and help
              schools focus on what truly matters—education. Our mission is to
              empower schools with the tools they need to streamline operations and
              foster better communication between staff, students, and parents.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To be the leading platform that transforms how schools manage their
              operations, helping them thrive in a digital-first world.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;