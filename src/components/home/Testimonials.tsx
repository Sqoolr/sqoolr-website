
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    quote: "Sqoolr is exactly what we need! Managing student records and staff information in one place will make our work so much easier.",
    author: "Mr. Adekunle O.",
    role: "Principal"
  },
  {
    quote: "A smart school management system like Sqoolr is long overdue. I'm excited to see how the AI-powered insights will help us improve learning outcomes.",
    author: "Mrs. Ngozi E.",
    role: "School Administrator"
  },
  {
    quote: "We've struggled with inefficient school processes for too long. Sqoolr looks like the perfect solution to simplify administration and communication.",
    author: "Mr. Chidi A.",
    role: "Head of Academics"
  },
  {
    quote: "The ability to manage multiple campuses under one platform is a game-changer for us. We can't wait to get started with Sqoolr!",
    author: "Mrs. Funmi T.",
    role: "School Proprietor"
  },
  {
    quote: "With Sqoolr, we finally have a system that understands the needs of modern schools. The automation and analytics will help us work smarter.",
    author: "Mr. Ibrahim B.",
    role: "Director of Studies"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-sqoolr-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-12 text-center">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center px-8"
          >
            <p className="text-xl md:text-2xl text-gray-700 mb-6">
              "{testimonials[currentIndex].quote}"
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">{testimonials[currentIndex].author}</span>
              <span className="mx-2">—</span>
              <span>{testimonials[currentIndex].role}</span>
            </p>
          </motion.div>
          <div className="flex justify-center mt-8 space-x-4">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              onClick={handleNext}
              className="w-12 h-12 rounded-full"
            >
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
