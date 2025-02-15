import { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Process from "@/components/home/Process";
import WaitlistForm from "@/components/WaitlistForm";

const Home = () => {
  const words = ["Smarter", "Affordable", "Seamless", "Efficient"];
  const [currentWord, setCurrentWord] = useState(0);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <Hero words={words} currentWord={currentWord} />
      <Features features={features} />
      <Process steps={steps} activeStep={activeStep} setActiveStep={setActiveStep} />

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
    titleColor: "text-[#243665]"
  },
  {
    title: "Set Up Your School",
    description: "Our platform's easy setup guide will help you configure your school, classes, and students in just a few steps.",
    titleColor: "text-[#243665]"
  },
  {
    title: "Manage Your School Smarter",
    description: "Once you're set up, use our intuitive dashboard and AI-powered tools to enhance school operations and foster better learning outcomes.",
    titleColor: "text-[#243665]"
  },
];

export default Home;
