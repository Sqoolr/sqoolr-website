
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface TrialBannerProps {
  onTrialClick: () => void;
}

const TrialBanner = ({ onTrialClick }: TrialBannerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-sqoolr-mint/10 border border-sqoolr-mint rounded-lg p-6 mb-12 text-center max-w-4xl mx-auto"
    >
      <h3 className="text-xl font-bold text-sqoolr-navy mb-2">
        Not ready to commit? Try Sqoolr FREE for 14 days! No credit card required.
      </h3>
      <Button 
        onClick={onTrialClick}
        className="bg-sqoolr-mint text-sqoolr-navy hover:bg-sqoolr-mint/90 mt-4"
      >
        Start Your Free Trial
      </Button>
    </motion.div>
  );
};

export default TrialBanner;
