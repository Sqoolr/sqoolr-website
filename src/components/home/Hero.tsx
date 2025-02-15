
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import WaitlistForm from "@/components/WaitlistForm";
import { useState } from "react";

interface HeroProps {
  words: string[];
  currentWord: number;
}

const Hero = ({ words, currentWord }: HeroProps) => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <section className="min-h-[70vh] flex items-start justify-center bg-gradient-to-br from-white to-sqoolr-light relative overflow-hidden py-20">
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
                className="bg-gradient-to-r from-[#243665] via-[#8BD8BD] to-[#FFD166] bg-clip-text text-transparent inline-block"
              >
                {words[currentWord]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[#243665]"
            > School Management—powered by </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, type: "spring" }}
              className="bg-gradient-to-r from-[#243665] via-[#8BD8BD] to-[#FFD166] bg-clip-text text-transparent"
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
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-sqoolr-navy text-white hover:bg-opacity-90"
              size="lg"
            >
              Get Early Access
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <Link to="/partnerships/school">Become a Partner School</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} type="waitlist" />
    </section>
  );
};

export default Hero;
