
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { WaitlistForm } from "@/components/WaitlistForm";

const Home = () => {
  const [tagline, setTagline] = useState("Better Learning Outcomes");
  const [displayText, setDisplayText] = useState("Better Learning Outcomes");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);

  useEffect(() => {
    const texts = ["Better Learning Outcomes", "Efficient School Management"];
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const type = () => {
      const fullText = texts[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setDisplayText(currentText);

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // Pause at the end
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
      }

      setTimeout(type, typeSpeed);
    };

    type();

    return () => {
      // Cleanup if needed
    };
  }, []);

  const companyLogos = [
    { src: "/aws-logo.png", alt: "AWS Services" },
    { src: "/go54-logo.png", alt: "Go54" },
    { src: "/google-cloud-logo.png", alt: "Google Cloud" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-start justify-center bg-gradient-to-br from-white to-sqoolr-light relative overflow-hidden pt-32">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-sqoolr-navy mb-6">
              Enabling{" "}
              <span className="text-sqoolr-mint min-h-[1.5em] inline-block">
                {displayText}
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Sqoolr is the all-in-one solution to streamline school
              administration, attendance tracking, and student management.
            </p>
            <div className="space-x-4">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="inline-block bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Join the Waitlist
              </button>
              <button
                onClick={() => setIsPartnerFormOpen(true)}
                className="inline-block border-2 border-sqoolr-navy text-sqoolr-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-sqoolr-navy hover:text-white transition-all transform hover:scale-105"
              >
                Become a Partner School
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex space-x-12 animate-slide">
            {companyLogos.map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/feature-image.jpg"
                  alt="School Management"
                  className="rounded-2xl shadow-2xl relative z-10"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-sqoolr-mint rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-sqoolr-navy rounded-full opacity-20 animate-float-delayed"></div>
                <div className="absolute top-1/2 -right-8 w-12 h-12 bg-sqoolr-mint rounded-full opacity-20 animate-float"></div>
              </motion.div>
            </div>
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
