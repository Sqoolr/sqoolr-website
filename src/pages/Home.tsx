import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const words = ["Smarter", "Affordable", "Seamless", "Efficient"];
  const [currentWord, setCurrentWord] = useState(0);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [autoScroll, setAutoScroll] = useState(true);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      autoScrollRef.current = setInterval(() => {
        setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
    }
    return () => clearInterval(autoScrollRef.current);
  }, [autoScroll]);

  const handleTestimonialHover = (isHovering) => {
    setAutoScroll(!isHovering);
  };

  return (
    <div className="w-full">
      <section className="min-h-[70vh] flex items-start justify-center bg-gradient-to-br from-white to-sqoolr-light relative overflow-hidden pt-20 md:pt-24">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentWord]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-sqoolr-navy via-sqoolr-mint to-sqoolr-navy bg-clip-text text-transparent inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sqoolr-navy"
              > School Management - powered by </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, type: "spring" }}
                className="bg-gradient-to-r from-sqoolr-navy via-sqoolr-mint to-sqoolr-navy bg-clip-text text-transparent"
              >AI</motion.span>
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8"
            >
              AI-powered solutions for smarter school management—streamline administration, enhance collaboration, and enable better learning outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full md:w-auto bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all"
              >
                Get Early Access
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPartnerFormOpen(true)}
                className="w-full md:w-auto border-2 border-sqoolr-navy text-sqoolr-navy px-8 py-4 rounded-full text-lg font-bold hover:bg-sqoolr-navy hover:text-white transition-all"
              >
                Become a Partner School
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-sqoolr-mint rounded-full filter blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-sqoolr-navy rounded-full filter blur-3xl"
        />
      </section>

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

      <section className="py-16 bg-gradient-to-br from-white to-sqoolr-light">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <img
              src="/dashboard-preview.png"
              alt="Sqoolr Dashboard"
              className="w-full rounded-lg shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-sqoolr-light">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-4">
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
                  animate={{
                    color: activeStep === index ? '#1e40af' : '#1e3a8a'
                  }}
                  className="text-xl font-semibold mb-4"
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-6">
              Be the First to Experience Sqoolr
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              As an early adopter, you'll receive exclusive benefits, including significant discounts, priority support, and a first look at all new features.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
            >
              Get Early Access
            </motion.button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-sqoolr-light">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-4">
              What Our Users Say
            </h2>
          </motion.div>

          <div 
            className="max-w-4xl mx-auto relative"
            onMouseEnter={() => handleTestimonialHover(true)}
            onMouseLeave={() => handleTestimonialHover(false)}
          >
            <div className="relative h-[300px] md:h-[250px] overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentTestimonialIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                  className="absolute w-full h-full bg-white p-6 md:p-8 rounded-2xl shadow-lg"
                >
                  <div className="h-full flex flex-col justify-center">
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg md:text-xl text-gray-700 italic mb-6"
                    >
                      "{testimonials[currentTestimonialIndex].message}"
                    </motion.p>
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="flex items-center justify-center flex-wrap gap-2"
                    >
                      <p className="text-sqoolr-navy font-semibold">
                        {testimonials[currentTestimonialIndex].name}
                      </p>
                      <span className="mx-2">—</span>
                      <p className="text-gray-600">
                        {testimonials[currentTestimonialIndex].role}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrentTestimonialIndex((prev) => 
                  prev === 0 ? testimonials.length - 1 : prev - 1
                );
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-sqoolr-mint hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCurrentTestimonialIndex((prev) => 
                  (prev + 1) % testimonials.length
                );
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-sqoolr-mint hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentTestimonialIndex === index
                      ? 'bg-sqoolr-mint w-4'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
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
    title: "Automated Workflows",
    description:
      "Streamline school operations by eliminating repetitive tasks, improving efficiency, and allowing staff to focus on what matters most—student success.",
  },
  {
    title: "AI-Powered Insights",
    description:
      "Make informed decisions with advanced data analytics that help improve learning outcomes and operational efficiency.",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Stay updated with instant alerts for school activities, assignments, and more.",
  },
  {
    title: "Attendance Tracking",
    description:
      "Efficiently record and manage attendance for students and staff with real-time reporting and insightful analytics.",
  },
];

const steps = [
  {
    title: "Sign Up & Onboard",
    description: "Join the waitlist to be the first to try Sqoolr and experience its seamless school management features.",
  },
  {
    title: "Set Up Your School",
    description:
      "Our platform's easy setup guide will help you configure your school, classes, and students in just a few steps.",
  },
  {
    title: "Manage Your School Smarter",
    description:
      "Once you're set up, use our intuitive dashboard and AI-powered tools to enhance school operations and foster better learning outcomes.",
  },
];

const testimonials = [
  {
    name: "Mr. Adekunle O.",
    role: "Principal",
    message: "Sqoolr is exactly what we need! Managing student records and staff information in one place will make our work so much easier.",
  },
  {
    name: "Mrs. Ngozi E.",
    role: "School Administrator",
    message: "A smart school management system like Sqoolr is long overdue. I'm excited to see how the AI-powered insights will help us improve learning outcomes.",
  },
  {
    name: "Mr. Chidi A.",
    role: "Head of Academics",
    message: "We've struggled with inefficient school processes for too long. Sqoolr looks like the perfect solution to simplify administration and communication.",
  },
  {
    name: "Mrs. Funmi T.",
    role: "School Proprietor",
    message: "The ability to manage multiple campuses under one platform is a game-changer for us. We can't wait to get started with Sqoolr!",
  },
  {
    name: "Mr. Ibrahim B.",
    role: "Teacher",
    message: "With Sqoolr, teachers like me can finally focus more on teaching and less on admin work. The automation and analytics will help us work smarter.",
  },
];

export default Home;
