
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
            About Us – The Sqoolr Story
          </h1>

          <div className="space-y-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-gray-600 mb-6">
                At Sqoolr, we believe that schools should focus on what truly matters—education—without being weighed down by administrative complexities.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began with a simple question: Why is school administration still so difficult in the digital age? We saw schools struggling with paperwork, fragmented systems, and inefficiencies that made everyday operations a challenge. From managing student records to tracking attendance and finances, administrators and teachers were spending too much time on logistics instead of learning and teaching.
              </p>
              <p className="text-gray-600">
                Determined to change this, we created Sqoolr—a smart, all-in-one school management platform designed to streamline operations, enhance communication, and simplify administration for K-12 schools.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                Solving Real Pain Points with a User-First Approach
              </h2>
              <p className="text-gray-600 mb-6">
                At Sqoolr, we listen to educators, administrators, and parents to truly understand their challenges. Our platform is built with a user-first perspective, ensuring that every feature directly addresses the real needs of schools.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">🚀</span>
                  <span>We eliminate inefficiencies—reducing time spent on manual record-keeping.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>We provide real-time insights—helping schools make data-driven decisions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">💡</span>
                  <span>We simplify complex processes—from admissions to attendance tracking.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                What We Do
              </h2>
              <p className="text-gray-600 mb-6">
                Sqoolr provides schools with the tools they need to operate efficiently, including:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Student & Staff Records Management – Keep accurate, easily accessible data.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Admissions & Class Management – Organize enrollments and class structures effortlessly.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Attendance Tracking – Mark, track, and manage student attendance with admin approval for changes.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Finance Management – Monitor school fees, expenses, and financial reports.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Seamless Communication – Ensure teachers, administrators, students, and parents stay informed.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Prompt Notifications – Get real-time updates on important school activities.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Events Calendar – Plan and manage school events, meetings, and exams.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>Assessment & Grading – Enable teachers to record, calculate, and share student performance.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                AI-Powered Insights – Predicting Student Performance
              </h2>
              <p className="text-gray-600 mb-6">
                We're building the future of education technology with AI-powered features that will provide intelligent insights into student performance.
              </p>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">📈</span>
                  <span>Performance Prediction – Sqoolr will analyze student progress, attendance, and assessments to predict academic performance and identify students who may need extra support.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎯</span>
                  <span>Personalized Learning Recommendations – AI-driven insights will help teachers tailor their instruction to meet individual student needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Early Warning System – Predict at-risk students based on engagement, grades, and attendance patterns to provide timely interventions.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
                Our Vision & Mission
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-sqoolr-navy mb-2">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower schools with technology that makes administration effortless, enabling educators to focus on delivering quality education.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sqoolr-navy mb-2">Our Vision</h3>
                  <p className="text-gray-600">
                    To become the leading digital backbone for schools, ensuring every institution—big or small—has access to efficient, seamless, and innovative school management solutions.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-sqoolr-navy mb-2">Our Commitment</h3>
                  <p className="text-gray-600">
                    We are passionate about transforming education through technology. Whether you're a school administrator, teacher, or parent, Sqoolr is designed to make school management simpler, smarter, and more efficient.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <p className="text-xl text-gray-600 mb-8">
                Join us on this journey toward a better, more connected, and stress-free school experience.
              </p>
              <Link
                to="/"
                className="inline-block bg-sqoolr-mint text-sqoolr-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Join the Waitlist
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
