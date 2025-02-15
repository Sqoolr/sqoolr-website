import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PlanCard from "@/components/pricing/PlanCard";
import PricingToggle from "@/components/pricing/PricingToggle";
import PricingRecommender from "@/components/pricing/PricingRecommender";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<"term" | "year">("term");
  const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);
  const recommendedPlanRef = useRef<HTMLDivElement>(null);

  const handlePlanSelection = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
  };

  const scrollToRecommendedPlan = () => {
    if (recommendedPlanRef.current) {
      recommendedPlanRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleRecommendation = (plan: string) => {
    setRecommendedPlan(plan);
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
      extraStudentBlocks: [
        { count: 25, termPrice: 62500, yearPrice: 187500 },
        { count: 50, termPrice: 125000, yearPrice: 375000 }
      ],
      features: [
        { name: "Real-time Notifications", available: true },
        { name: "Student Information Management", available: true },
        { name: "Staff Information Management", available: true },
        { name: "Class Management", available: true },
        { name: "Events & Calendar Management", available: false },
        { name: "Guardians Module", available: false },
        { name: "Students Module", available: false },
        { name: "Subjects Management", available: false },
        { name: "Timetable Management", available: false },
        { name: "Attendance Module", available: false },
        { name: "Teachers Module", available: false },
        { name: "User-Defined Roles", available: false },
        { name: "AI-Powered Insights", available: false },
        { name: "Finance Management", available: false },
        { name: "Admissions Module", available: false },
        { name: "Multi-Schools Support", available: false },
        { name: "Reports and Analytics", available: false },
        { name: "Extra Students", available: true }
      ],
      earlyAdopterBenefits: {
        price: "₦100,000",
        students: "Up to 60 students"
      },
      bgClass: "bg-gradient-to-br from-white to-blue-50",
      recommended: recommendedPlan === "Basic"
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
      extraStudentBlocks: [
        { count: 50, termPrice: 125000, yearPrice: 375000 },
        { count: 100, termPrice: 250000, yearPrice: 750000 }
      ],
      features: [
        { name: "Real-time Notifications", available: true },
        { name: "Student Information Management", available: true },
        { name: "Staff Information Management", available: true },
        { name: "Class Management", available: true },
        { name: "Events & Calendar Management", available: true },
        { name: "Guardians Module", available: true },
        { name: "Students Module", available: true },
        { name: "Subjects Management", available: true },
        { name: "Timetable Management", available: true },
        { name: "Attendance Module", available: true },
        { name: "Teachers Module", available: true },
        { name: "User-Defined Roles", available: true },
        { name: "AI-Powered Insights", available: false },
        { name: "Finance Management", available: false },
        { name: "Admissions Module", available: false },
        { name: "Multi-Schools Support", available: false },
        { name: "Reports and Analytics", available: false },
        { name: "Extra Students", available: true }
      ],
      earlyAdopterBenefits: {
        price: "₦250,000",
        students: "Up to 180 students"
      },
      bgClass: "bg-gradient-to-br from-white to-purple-50",
      recommended: recommendedPlan === "Standard"
    },
    {
      name: "Premium",
      description: "For large schools or multi-campus schools needing advanced features",
      originalPrice: "₦800,000",
      price: billingPeriod === "term" ? "₦650,000" : "₦2,160,000",
      earlyPrice: billingPeriod === "term" ? "₦650,000" : "₦2,160,000",
      billingPeriod: billingPeriod === "term" ? "per term" : "per year",
      maxStudents: "Up to 600 students",
      originalMaxStudents: "Up to 500 students",
      extraStudentBlocks: [
        { count: 50, termPrice: 125000, yearPrice: 375000 },
        { count: 100, termPrice: 250000, yearPrice: 750000 },
        { count: 150, termPrice: 375000, yearPrice: 1125000 }
      ],
      features: [
        { name: "Real-time Notifications", available: true },
        { name: "Student Information Management", available: true },
        { name: "Staff Information Management", available: true },
        { name: "Class Management", available: true },
        { name: "Events & Calendar Management", available: true },
        { name: "Guardians Module", available: true },
        { name: "Students Module", available: true },
        { name: "Subjects Management", available: true },
        { name: "Timetable Management", available: true },
        { name: "Attendance Module", available: true },
        { name: "Teachers Module", available: true },
        { name: "User-Defined Roles", available: true },
        { name: "AI-Powered Insights", available: true },
        { name: "Finance Management", available: true },
        { name: "Admissions Module", available: true },
        { name: "Multi-Schools Support", available: true },
        { name: "Reports and Analytics", available: true },
        { name: "Extra Students", available: true }
      ],
      earlyAdopterBenefits: {
        price: "₦650,000",
        students: "Up to 600 students"
      },
      bgClass: "bg-gradient-to-br from-white to-amber-50",
      recommended: recommendedPlan === "Premium"
    },
    {
      name: "Flex",
      description: "For schools with flexible needs and varying student numbers",
      price: "₦45,000",
      billingPeriod: "per month (min. 2 months)",
      maxStudents: "Up to 50 students",
      isFlexPlan: true,
      features: [
        { name: "Real-time Notifications", available: true },
        { name: "Student Information Management", available: true },
        { name: "Staff Information Management", available: true },
        { name: "Class Management", available: true },
        { name: "Events & Calendar Management", available: false },
        { name: "Guardians Module", available: false },
        { name: "Students Module", available: false },
        { name: "Subjects Management", available: false },
        { name: "Timetable Management", available: false },
        { name: "Attendance Module", available: false },
        { name: "Teachers Module", available: false },
        { name: "User-Defined Roles", available: false },
        { name: "AI-Powered Insights", available: false },
        { name: "Finance Management", available: false },
        { name: "Admissions Module", available: false },
        { name: "Multi-Schools Support", available: false },
        { name: "Reports and Analytics", available: false },
        { name: "Extra Students", available: false }
      ],
      bgClass: "bg-gradient-to-br from-white to-green-50",
      recommended: recommendedPlan === "Flex"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-4">Choose Your Plan</h1>
          <p className="text-xl text-gray-600">Select the perfect plan for your school. All plans include access to our core features.</p>
          <div className="mt-4 text-sm bg-blue-50 p-4 rounded-lg inline-block">
            Try Sqoolr FREE for 14 days! No credit card required.
          </div>
        </div>
        
        <TooltipProvider>
          <PricingToggle billingPeriod={billingPeriod} onChange={setBillingPeriod} />
        </TooltipProvider>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              ref={recommendedPlan === plan.name ? recommendedPlanRef : null}
            >
              <PlanCard
                plan={plan}
                onPlanSelect={handlePlanSelection}
                isHighlighted={plan.name === "Standard"}
                billingPeriod={billingPeriod}
              />
            </div>
          ))}
        </div>

        <div className="mt-24">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-sqoolr-navy mb-4">Find Your Perfect Plan</h2>
            <p className="text-gray-600">
              Answer a few questions about your school's needs and size, and we'll help you find the plan that best fits your requirements. 
              Our recommendation engine considers factors like student count, campus locations, and desired features.
            </p>
          </div>
          <PricingRecommender onRecommendationComplete={handleRecommendation} />
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-2xl font-bold text-sqoolr-navy mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-4">Our team is here to help you choose the right plan for your school.</p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <a 
              href="mailto:hello@sqoolr.ng" 
              className="text-lg hover:text-sqoolr-mint transition-colors"
            >
              hello@sqoolr.ng
            </a>
            <a 
              href="tel:+2349161410089" 
              className="text-lg hover:text-sqoolr-mint transition-colors"
            >
              +2349161410089
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
