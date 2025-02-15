
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlanProps {
  plan: {
    name: string;
    description: string;
    originalPrice: string;
    price: string;
    earlyPrice: string;
    billingPeriod: string;
    maxStudents: string;
    originalMaxStudents: string;
    features: { name: string; available: boolean; }[];
    bgClass: string;
  };
  onPlanSelect: (planName: string) => void;
  isHighlighted?: boolean;
}

const PlanCard = ({ plan, onPlanSelect, isHighlighted }: PlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col",
        plan.bgClass,
        isHighlighted && "transform scale-105 ring-2 ring-sqoolr-mint"
      )}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-sqoolr-navy mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
        <div className="relative mb-2">
          <span className="text-gray-400 line-through text-sm">{plan.originalPrice}</span>
          <div className="text-4xl font-bold text-sqoolr-navy">
            {plan.price}
          </div>
          <p className="text-gray-500 text-sm">{plan.billingPeriod}</p>
        </div>
        <div className="relative mb-4">
          <span className="text-gray-400 line-through text-sm">{plan.originalMaxStudents}</span>
          <p className="text-gray-600">{plan.maxStudents}</p>
        </div>
      </div>

      <div className="space-y-4 mt-auto">
        <Button 
          onClick={() => onPlanSelect(plan.name)}
          className="w-full bg-sqoolr-navy text-white hover:bg-opacity-90"
        >
          Choose {plan.name}
        </Button>
        <Button 
          onClick={() => onPlanSelect(plan.name)}
          variant="outline"
          className="w-full text-sm"
        >
          Start Free Trial
        </Button>
      </div>
    </motion.div>
  );
};

export default PlanCard;
