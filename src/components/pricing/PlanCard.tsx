
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckIcon, XMarkIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface PlanFeature {
  name: string;
  available: boolean;
}

interface ExtraStudentBlock {
  count: number;
  termPrice: number;
  yearPrice: number;
}

interface PlanProps {
  plan: {
    name: string;
    description: string;
    originalPrice?: string;
    price: string;
    earlyPrice?: string;
    billingPeriod: string;
    maxStudents: string;
    originalMaxStudents?: string;
    features: PlanFeature[];
    bgClass: string;
    extraStudentFee?: string;
    earlyAdopterBenefits?: {
      price: string;
      students: string;
    };
    isFlexPlan?: boolean;
    minMonths?: number;
    extraStudentBlocks?: ExtraStudentBlock[];
    recommended?: boolean;
  };
  onPlanSelect: (planName: string) => void;
  isHighlighted?: boolean;
  billingPeriod: "term" | "year";
}

const PlanCard = ({ plan, onPlanSelect, isHighlighted, billingPeriod }: PlanProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [flexMonths, setFlexMonths] = useState(2);
  const [selectedExtraStudents, setSelectedExtraStudents] = useState<number>(0);

  const calculateExtraStudentPrice = () => {
    if (!plan.extraStudentBlocks) return 0;
    const selectedBlock = plan.extraStudentBlocks.find(block => block.count === selectedExtraStudents);
    if (!selectedBlock) return 0;
    return billingPeriod === "term" ? selectedBlock.termPrice : selectedBlock.yearPrice;
  };

  const formatPrice = (price: string | undefined) => {
    if (!price) return "";
    if (!price.includes("₦")) return price;
    const numericPrice = parseInt(price.replace(/[^0-9]/g, ""));
    if (plan.isFlexPlan) {
      return `₦${(numericPrice * flexMonths).toLocaleString()}`;
    }
    const extraStudentPrice = calculateExtraStudentPrice();
    return `₦${(numericPrice + extraStudentPrice).toLocaleString()}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col h-full relative",
        plan.bgClass
      )}
    >
      {plan.recommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-sqoolr-mint text-sqoolr-navy px-4 py-1 rounded-full text-sm font-semibold">
          Recommended
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-sqoolr-navy mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
        <div className="relative mb-2">
          {plan.originalPrice && billingPeriod === "term" && (
            <span className="text-4xl text-gray-400 line-through block">{formatPrice(plan.originalPrice)}</span>
          )}
          <div className="text-4xl font-bold text-sqoolr-navy">
            {formatPrice(plan.price)}
          </div>
          <p className="text-gray-500 text-sm">{plan.billingPeriod}</p>
        </div>

        <div className="relative mb-4">
          {plan.originalMaxStudents && (
            <span className="text-gray-400 line-through text-lg block">{plan.originalMaxStudents}</span>
          )}
          <p className="text-gray-600 text-lg">{plan.maxStudents}</p>
        </div>

        {plan.extraStudentBlocks && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Add extra students</p>
            <Select 
              onValueChange={(value) => setSelectedExtraStudents(Number(value))}
              value={selectedExtraStudents.toString()}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select extra students" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">No extra students</SelectItem>
                {plan.extraStudentBlocks.map((block) => (
                  <SelectItem key={block.count} value={block.count.toString()}>
                    {block.count} students (+{billingPeriod === "term" ? 
                      `₦${block.termPrice.toLocaleString()}` : 
                      `₦${block.yearPrice.toLocaleString()}`})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {plan.isFlexPlan && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">Select number of months (min. 2)</p>
            <input
              type="number"
              min="2"
              max="12"
              value={flexMonths}
              onChange={(e) => setFlexMonths(Math.max(2, Math.min(12, Number(e.target.value))))}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
            />
          </div>
        )}
      </div>

      <Button
        variant="ghost"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-gray-600 mb-4"
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
            className="space-y-2 mb-6"
          >
            {plan.features.map((feature, index) => (
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

      {plan.earlyAdopterBenefits && (
        <div className="mt-auto mb-6 p-4 bg-blue-50 rounded-lg">
          <h4 className="font-semibold text-sqoolr-navy mb-2">Early Adopter Benefits:</h4>
          <p className="text-gray-600">Initial signup term: {plan.earlyAdopterBenefits.price}</p>
          <p className="text-gray-600">{plan.earlyAdopterBenefits.students}</p>
        </div>
      )}

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
