import { useState } from "react";
import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Pricing = () => {
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);

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

  const handlePlanSelection = (planName: string) => {
    alert(`You selected the ${planName} plan!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Trial Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-sqoolr-mint/10 border border-sqoolr-mint rounded-lg p-6 mb-12 text-center max-w-4xl mx-auto"
        >
          <h3 className="text-xl font-bold text-sqoolr-navy mb-2">
            Not ready to commit? Try Sqoolr FREE for 14 days! No credit card required.
          </h3>
          <Button 
            onClick={() => setIsTicketDialogOpen(true)}
            className="bg-sqoolr-mint text-sqoolr-navy hover:bg-sqoolr-mint/90 mt-4"
          >
            Start Your Free Trial
          </Button>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "rounded-2xl p-6 shadow-lg transition-all duration-300 flex flex-col",
                plan.bgClass,
                plan.name === "Standard" && "transform scale-105 ring-2 ring-sqoolr-mint"
              )}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-sqoolr-navy mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-sqoolr-navy mb-2">
                  {plan.price}
                </div>
                <p className="text-gray-500 text-sm">{plan.billingPeriod}</p>
              </div>

              <div className="flex-grow">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-sqoolr-mint mr-2 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 mt-auto">
                <Button 
                  onClick={() => handlePlanSelection(plan.name)}
                  className="w-full bg-sqoolr-navy text-white hover:bg-opacity-90"
                >
                  Choose {plan.name}
                </Button>
                <Button 
                  onClick={() => handlePlanSelection(plan.name)}
                  variant="outline"
                  className="w-full text-sm"
                >
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
