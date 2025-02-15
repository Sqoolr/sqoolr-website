
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Tooltip } from "@/components/ui/tooltip";
import TrialBanner from "@/components/pricing/TrialBanner";
import PlanCard from "@/components/pricing/PlanCard";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingRecommender from "@/components/pricing/PricingRecommender";
import FeatureList from "@/components/pricing/FeatureList";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"term" | "year">("term");
  const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);
  const recommendedPlanRef = useRef<HTMLDivElement>(null);

  const handlePlanSelection = (planName: string) => {
    // Handle plan selection logic
    console.log(`Selected plan: ${planName}`);
  };

  const scrollToRecommendedPlan = () => {
    recommendedPlanRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleRecommendation = (plan: string) => {
    setRecommendedPlan(plan);
    scrollToRecommendedPlan();
  };

  const plans = [
    {
      name: "Basic",
      description: "For schools with a smaller student body looking for foundational tools",
      originalPrice: "₦120,000",
      price: billingPeriod === "term" ? "₦100,000" : "₦324,000",
      earlyPrice: billingPeriod === "term" ? "₦100,000" : "₦324,000",
      billingPeriod: billingPeriod === "term" ? "per term" : "per year",
      maxStudents: "Up to 60 students",
      originalMaxStudents: "Up to 50 students",
      features: [
        { name: "Real-time Notifications", available: true },
        { name: "Student Information Management", available: true },
        { name: "Staff Information Management", available: true },
        { name: "Class Management", available: true },
        { name: "Events & Calendar Management", available: false },
        // ... add other features
      ],
      bgClass: "bg-gradient-to-br from-white to-blue-50",
    },
    {
      name: "Standard",
      description: "For schools growing in size, looking for more features and flexibility",
      originalPrice: "₦300,000",
      price: billingPeriod === "term" ? "₦250,000" : "₦810,000",
      earlyPrice: billingPeriod === "term" ? "₦250,000" : "₦810,000",
      billingPeriod: billingPeriod === "term" ? "per term" : "per year",
      maxStudents: "Up to 180 students",
      originalMaxStudents: "Up to 150 students",
      features: [
        { name: "All Basic features", available: true },
        { name: "Events & Calendar Management", available: true },
        { name: "Guardians Module", available: true },
        // ... add other features
      ],
      bgClass: "bg-gradient-to-br from-white to-purple-50",
    },
    // ... Similar structure for Premium and Flex plans
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <TrialBanner onTrialClick={() => {}} />
        
        <PricingToggle billingPeriod={billingPeriod} onChange={setBillingPeriod} />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              ref={recommendedPlan === plan.name ? recommendedPlanRef : null}
              className={`relative ${recommendedPlan === plan.name ? "ring-4 ring-sqoolr-mint" : ""}`}
            >
              <PlanCard
                plan={plan}
                onPlanSelect={handlePlanSelection}
                isHighlighted={plan.name === "Standard"}
              />
              <FeatureList features={plan.features} />
            </div>
          ))}
        </div>

        <div className="mt-24">
          <PricingRecommender onRecommendationComplete={handleRecommendation} />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
