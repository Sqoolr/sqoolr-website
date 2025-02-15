
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

interface FeatureListProps {
  features: {
    name: string;
    available: boolean;
  }[];
}

const FeatureList = ({ features }: FeatureListProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-6">
      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-gray-600"
      >
        <span>Features</span>
        {isExpanded ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
      </Button>

      <AnimatePresence>
        {isExpanded && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="space-y-2 mt-4"
          >
            {features.map((feature, index) => (
              <motion.li
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                {feature.available ? (
                  <CheckIcon className="h-5 w-5 text-sqoolr-mint mr-2 mt-0.5" />
                ) : (
                  <XMarkIcon className="h-5 w-5 text-gray-300 mr-2 mt-0.5" />
                )}
                <span className={feature.available ? "text-gray-600" : "text-gray-400"}>
                  {feature.name}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FeatureList;
