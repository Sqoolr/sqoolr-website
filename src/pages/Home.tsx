
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import WaitlistForm from "@/components/WaitlistForm";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [displayText, setDisplayText] = useState("Smarter");
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

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

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
              AI-powered solutions for smarter school management—streamline administration, enhance collaboration, and enable better learning outcomes.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <button
                onClick={() => setIsWaitlistOpen(true)}
                className="w-full md:w-auto bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Get Early Access
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
              A Simple, Streamlined Process
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
        </div>
      </section>

      {/* Early Access Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
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
              As an early adopter, you'll receive exclusive benefits, including significant discounts, priority support, and a first look at all new features. Don't miss out on this limited-time opportunity to revolutionize your school management with Sqoolr.
            </p>
            <button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-sqoolr-mint text-[#243665] px-8 py-4 rounded-full text-lg font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
            >
              Get Early Access
            </button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              What Our Users Say
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <motion.div
              key={currentTestimonialIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <p className="text-xl text-gray-700 italic mb-6">
                "{testimonials[currentTestimonialIndex].message}"
              </p>
              <div className="flex items-center justify-center">
                <p className="text-sqoolr-navy font-semibold">
                  {testimonials[currentTestimonialIndex].name}
                </p>
                <span className="mx-2">—</span>
                <p className="text-gray-600">
                  {testimonials[currentTestimonialIndex].role}
                </p>
              </div>
            </motion.div>

            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-sqoolr-mint transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-2 rounded-full shadow-lg hover:bg-sqoolr-mint transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
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
