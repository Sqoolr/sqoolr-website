
import { Button } from "@/components/ui/button";

interface PricingToggleProps {
  billingPeriod: "term" | "year";
  onChange: (period: "term" | "year") => void;
}

const PricingToggle = ({ billingPeriod, onChange }: PricingToggleProps) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-8">
      <Button
        variant={billingPeriod === "term" ? "default" : "outline"}
        onClick={() => onChange("term")}
        className={billingPeriod === "term" ? "bg-sqoolr-navy" : ""}
      >
        Pay per Term
      </Button>
      <Button
        variant={billingPeriod === "year" ? "default" : "outline"}
        onClick={() => onChange("year")}
        className={billingPeriod === "year" ? "bg-sqoolr-navy" : ""}
      >
        Pay Annually (10% off)
      </Button>
    </div>
  );
};

export default PricingToggle;
