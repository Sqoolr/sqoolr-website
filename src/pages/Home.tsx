import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";

const Home = () => {
  const [tagline, setTagline] = useState("Smarter");
  const [displayText, setDisplayText] = useState("Smarter");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);

  useEffect(() => {
    const words = ["Smarter", "Efficient", "Effective"];
    let currentIndex = 0;
    let isDeleting = false;
    let currentWord = words[currentIndex];
    let typingSpeed = 100;

    const type = () => {
      if (isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
        typingSpeed = 50;
      } else {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
        typingSpeed = 100;
      }

      if (!isDeleting && displayText === currentWord) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && displayText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % words.length;
        currentWord = words[currentIndex];
      }

      setTimeout(type, typingSpeed);
    };

    type();

    return () => {
      // Cleanup if needed
    };
  }, [displayText]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-start justify-center bg-gradient-to-br from-white to-sqoolr-light relative overflow-hidden pt-20 md:pt-24">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-sqoolr-mint">{displayText}</span>
              <span className="text-sqoolr-navy"> School Management - powered by </span>
              <span className="text-sqoolr-mint">AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sqoolr is the all-in-one solution to streamline school
              administration, attendance tracking, and student management.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full md:w-auto bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Join the Waitlist
              </button>
              <button
                onClick={() => setIsPartnerFormOpen(true)}
                className="w-full md:w-auto border-2 border-sqoolr-navy text-sqoolr-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-sqoolr-navy hover:text-white transition-all transform hover:scale-105"
              >
                Become a Partner School
              </button>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
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
                title: "Automated Workflows",
                description:
                  "Automate routine tasks and processes to save time and reduce manual effort across all school operations.",
              },
              {
                title: "Finance Management",
                description:
                  "Efficiently manage school finances, including fees collection, expenses tracking, and financial reporting.",
              },
              {
                title: "Attendance Tracking",
                description:
                  "Automated attendance tracking system for both students and staff with real-time reporting and analytics.",
              },
            ].map((feature, index) => (
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

          <div className="text-center">
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="inline-block bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} type="waitlist" />
      <WaitlistForm isOpen={isPartnerFormOpen} onClose={() => setIsPartnerFormOpen(false)} type="partner" />
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
  {
    title: "Finance Management",
    description:
      "Efficiently manage school finances, including fees collection, expenses tracking, and financial reporting.",
  },
  {
    title: "Attendance Tracking",
    description:
      "Automated attendance tracking system for both students and staff with real-time reporting and analytics.",
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
