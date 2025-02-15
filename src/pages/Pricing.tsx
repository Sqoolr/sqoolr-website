import { useState } from "react";
import TrialBanner from "@/components/pricing/TrialBanner";
import PlanCard from "@/components/pricing/PlanCard";

const Pricing = () => {
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);

  const handlePlanSelection = (planName: string) => {
    alert(`You selected the ${planName} plan!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <TrialBanner onTrialClick={() => setIsTicketDialogOpen(true)} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <PlanCard
              key={plan.name}
              plan={plan}
              onPlanSelect={handlePlanSelection}
              isHighlighted={plan.name === "Standard"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const plans = [
  {
    name: "Basic",
    description: "For individuals and small teams getting started.",
    price: "$9",
    billingPeriod: "per user / month",
    features: [
      "Up to 5 users",
      "Basic reporting and analytics",
      "5GB storage",
      "Email support",
    ],
    bgClass: "bg-white",
  },
  {
    name: "Standard",
    description: "For growing businesses that need more advanced tools.",
    price: "$19",
    billingPeriod: "per user / month",
    features: [
      "Unlimited users",
      "Advanced reporting and analytics",
      "50GB storage",
      "Priority email & chat support",
      "Custom integrations",
    ],
    bgClass: "bg-white",
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations.",
    price: "Contact Us",
    billingPeriod: "",
    features: [
      "Unlimited users",
      "Advanced reporting and analytics",
      "Unlimited storage",
      "24/7 priority support",
      "Dedicated account manager",
      "Customizable features",
    ],
    bgClass: "bg-white",
  },
];

export default Pricing;
