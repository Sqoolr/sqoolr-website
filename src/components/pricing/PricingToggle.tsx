
import { Button } from "@/components/ui/button";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface PricingToggleProps {
  billingPeriod: "term" | "year";
  onChange: (period: "term" | "year") => void;
}

const PricingToggle = ({ billingPeriod, onChange }: PricingToggleProps) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mb-8">
      <div className="relative inline-flex items-center">
        <Button
          variant={billingPeriod === "term" ? "default" : "outline"}
          onClick={() => onChange("term")}
          className={`w-full ${billingPeriod === "term" ? "bg-sqoolr-navy" : ""}`}
        >
          Pay per Term
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InformationCircleIcon className="h-5 w-5 ml-2 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>1st term: Sept to Dec</p>
                <p>2nd term: Jan to April</p>
                <p>3rd term: May to Aug</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
      <div className="relative inline-flex items-center">
        <Button
          variant={billingPeriod === "year" ? "default" : "outline"}
          onClick={() => onChange("year")}
          className={`w-full ${billingPeriod === "year" ? "bg-sqoolr-navy" : ""}`}
        >
          Pay Annually (10% off)
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <InformationCircleIcon className="h-5 w-5 ml-2 text-gray-400" />
              </TooltipTrigger>
              <TooltipContent>
                <p>1 year equals 3 terms</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Button>
      </div>
    </div>
  );
};

export default PricingToggle;
