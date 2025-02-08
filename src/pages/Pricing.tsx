import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

type Feature = {
  name: string;
  included: boolean;
};

type PricingPlan = {
  name: string;
  description: string;
  maxStudents: number;
  pricePerTerm: string;
  annualPrice: string;
  monthlyPrice?: string;
  extraStudentCharge?: string;
  buttonText: string;
  bgClass: string;
  features: Feature[];
  earlyAdopterDiscount?: string;
  extraStudentsBonus?: string;
};

type Question = {
  id: string;
  text: string;
  description: string;
  options?: { value: string; label: string }[];
};

const plans: PricingPlan[] = [
  {
    name: "Free Trial",
    description: "Best for small schools or those exploring Sqoolr (2-week trial)",
    maxStudents: 20,
    pricePerTerm: "Free",
    annualPrice: "N/A",
    buttonText: "Start 2-Week Trial",
    bgClass: "bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-xl",
    features: [
      { name: "Real-time Notifications", included: true },
      { name: "Student Information Management", included: true },
      { name: "Staff Information Management", included: true },
      { name: "Class Management", included: true },
      { name: "Events & Calendar Management", included: false },
      { name: "Guardians Module", included: false },
      { name: "Students Module", included: false },
      { name: "Subjects Management", included: false },
      { name: "Timetable Management", included: false },
      { name: "Attendance Module", included: false },
      { name: "Teachers Module", included: false },
      { name: "User-Defined Roles", included: false },
      { name: "AI-Powered Insights", included: false },
      { name: "Finance Management", included: false },
      { name: "Admissions Module", included: false },
      { name: "Multi-Schools Support", included: false },
      { name: "Reports and Analytics", included: false },
      { name: "Extra Students", included: false },
    ],
  },
  {
    name: "Basic",
    description: "For schools with a smaller student body looking for foundational tools",
    maxStudents: 50,
    pricePerTerm: "₦120,000",
    annualPrice: "₦324,000",
    buttonText: "Choose Basic Plan",
    bgClass: "bg-gradient-to-br from-green-50 to-emerald-100 hover:shadow-xl",
    earlyAdopterDiscount: "₦100,000",
    extraStudentsBonus: "60 students",
    features: [
      { name: "Real-time Notifications", included: true },
      { name: "Student Information Management", included: true },
      { name: "Staff Information Management", included: true },
      { name: "Class Management", included: true },
      { name: "Events & Calendar Management", included: false },
      { name: "Guardians Module", included: false },
      { name: "Students Module", included: false },
      { name: "Subjects Management", included: false },
      { name: "Timetable Management", included: false },
      { name: "Attendance Module", included: false },
      { name: "Teachers Module", included: false },
      { name: "User-Defined Roles", included: false },
      { name: "AI-Powered Insights", included: false },
      { name: "Finance Management", included: false },
      { name: "Admissions Module", included: false },
      { name: "Multi-Schools Support", included: false },
      { name: "Reports and Analytics", included: false },
      { name: "Extra Students", included: false },
    ],
  },
  {
    name: "Standard",
    description: "For schools growing in size, looking for more features and flexibility",
    maxStudents: 150,
    pricePerTerm: "₦300,000",
    annualPrice: "₦810,000",
    buttonText: "Choose Standard Plan",
    bgClass: "bg-gradient-to-br from-blue-50 to-indigo-100 hover:shadow-xl border-2 border-sqoolr-mint",
    earlyAdopterDiscount: "₦250,000",
    extraStudentsBonus: "180 students",
    features: [
      { name: "Real-time Notifications", included: true },
      { name: "Student Information Management", included: true },
      { name: "Staff Information Management", included: true },
      { name: "Class Management", included: true },
      { name: "Events & Calendar Management", included: true },
      { name: "Guardians Module", included: true },
      { name: "Students Module", included: true },
      { name: "Subjects Management", included: true },
      { name: "Timetable Management", included: true },
      { name: "Attendance Module", included: true },
      { name: "Teachers Module", included: true },
      { name: "User-Defined Roles", included: true },
      { name: "AI-Powered Insights", included: false },
      { name: "Finance Management", included: false },
      { name: "Admissions Module", included: false },
      { name: "Multi-Schools Support", included: false },
      { name: "Reports and Analytics", included: false },
      { name: "Extra Students", included: false },
    ],
  },
  {
    name: "Premium",
    description: "For large institutions or multi-campus schools needing advanced features",
    maxStudents: 500,
    pricePerTerm: "₦800,000",
    annualPrice: "₦2,160,000",
    extraStudentCharge: "₦1,500 per extra student above 500 (or 600 with early adopter bonus)",
    buttonText: "Choose Premium Plan",
    bgClass: "bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-xl",
    earlyAdopterDiscount: "₦650,000",
    extraStudentsBonus: "600 students",
    features: [
      { name: "Real-time Notifications", included: true },
      { name: "Student Information Management", included: true },
      { name: "Staff Information Management", included: true },
      { name: "Class Management", included: true },
      { name: "Events & Calendar Management", included: true },
      { name: "Guardians Module", included: true },
      { name: "Students Module", included: true },
      { name: "Subjects Management", included: true },
      { name: "Timetable Management", included: true },
      { name: "Attendance Module", included: true },
      { name: "Teachers Module", included: true },
      { name: "User-Defined Roles", included: true },
      { name: "AI-Powered Insights", included: true },
      { name: "Finance Management", included: true },
      { name: "Admissions Module", included: true },
      { name: "Multi-Schools Support", included: true },
      { name: "Reports and Analytics", included: true },
      { name: "Extra Students", included: true },
    ],
  },
  {
    name: "Flex Plan",
    description: "For schools with flexible needs and varying student numbers (minimum 2 months subscription)",
    maxStudents: 50,
    pricePerTerm: "Custom",
    annualPrice: "Custom",
    buttonText: "Contact Us for a Custom Plan",
    bgClass: "bg-gradient-to-br from-orange-50 to-amber-100 hover:shadow-xl",
    features: [
      { name: "Real-time Notifications", included: true },
      { name: "Student Information Management", included: true },
      { name: "Staff Information Management", included: true },
      { name: "Class Management", included: true },
      { name: "Events & Calendar Management", included: true },
      { name: "Guardians Module", included: true },
      { name: "Students Module", included: false },
      { name: "Subjects Management", included: false },
      { name: "Timetable Management", included: false },
      { name: "Attendance Module", included: false },
      { name: "Teachers Module", included: false },
      { name: "User-Defined Roles", included: false },
      { name: "AI-Powered Insights", included: false },
      { name: "Finance Management", included: false },
      { name: "Admissions Module", included: false },
      { name: "Multi-Schools Support", included: false },
      { name: "Reports and Analytics", included: false },
      { name: "Extra Students", included: false },
    ],
  },
];

const questions: Question[] = [
  {
    id: "students",
    text: "How many students are currently enrolled in your school?",
    description: "Helps determine the best package based on school size: Basic, Standard, or Premium."
  },
  {
    id: "campuses",
    text: "How many campuses does your school operate?",
    description: "Identifies if the Multi-School Management feature is needed, available in the Premium plan."
  },
  {
    id: "advanced-tools",
    text: "Does your school require advanced tools such as financial management, AI-driven insights, or customized user roles?",
    description: "Determines if the school needs premium features exclusive to the Premium plan."
  },
  {
    id: "communication",
    text: "How important is real-time communication for your school?",
    description: "Select the level that best matches your needs",
    options: [
      { value: "basic", label: "Basic: Attendance tracking, notifications" },
      { value: "moderate", label: "Moderate: Events and calendar management" },
      { value: "advanced", label: "Advanced: Real-time notifications, multi-campus coordination" }
    ]
  },
  {
    id: "growth",
    text: "Is your school expecting significant growth in student enrollment or additional campuses in the next few years?",
    description: "Helps assess if they need a more scalable plan, such as Premium."
  }
];

const Pricing = () => {
  const { toast } = useToast();
  const [selectedBillingType, setSelectedBillingType] = useState<'term' | 'annual'>('term');
  const [openFeatures, setOpenFeatures] = useState<{ [key: string]: boolean }>({});

  const handlePlanSelection = (plan: string) => {
    toast({
      title: "Plan Selected",
      description: `You've selected the ${plan} plan. We'll contact you soon with more details.`,
    });
  };

  const toggleFeatures = (planName: string) => {
    setOpenFeatures(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-6">
            Choose Your Plan
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your school. All plans include access to our core features.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "rounded-2xl p-6 shadow-lg transition-all duration-300",
                plan.bgClass,
                plan.name === "Standard" && "transform scale-105 ring-2 ring-sqoolr-mint"
              )}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-sqoolr-navy mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  {plan.name !== "Free Trial" && plan.name !== "Flex Plan" ? (
                    <>
                      <div className="flex justify-center items-center gap-2 mb-2">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <button
                                onClick={() => setSelectedBillingType('term')}
                                className={`px-3 py-1 rounded-full text-sm ${
                                  selectedBillingType === 'term'
                                    ? 'bg-sqoolr-navy text-white'
                                    : 'bg-gray-200'
                                }`}
                              >
                                Per Term
                              </button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>1st term: Sept to Dec</p>
                              <p>2nd term: Jan to April</p>
                              <p>3rd term: May to Aug</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                        <button
                          onClick={() => setSelectedBillingType('annual')}
                          className={`px-3 py-1 rounded-full text-sm ${
                            selectedBillingType === 'annual'
                              ? 'bg-sqoolr-navy text-white'
                              : 'bg-gray-200'
                          }`}
                        >
                          Annual
                        </button>
                      </div>
                      <p className="text-3xl font-bold text-sqoolr-navy">
                        {selectedBillingType === 'term' ? (
                          <>
                            <span className="line-through text-gray-400">{plan.pricePerTerm}</span>
                            <br />
                            <span className="text-sqoolr-navy">{plan.earlyAdopterDiscount}</span>
                          </>
                        ) : (
                          plan.annualPrice
                        )}
                      </p>
                    </>
                  ) : plan.name === "Flex Plan" ? (
                    <p className="text-3xl font-bold text-sqoolr-navy">
                      {plan.pricePerTerm}
                      <span className="text-sm block mt-1">{plan.annualPrice}</span>
                      <span className="text-sm block mt-1">(minimum 2 months)</span>
                    </p>
                  ) : (
                    <p className="text-3xl font-bold text-sqoolr-navy">{plan.pricePerTerm}</p>
                  )}
                </div>

                <div className="mb-6">
                  {plan.name === "Basic" && (
                    <p className="text-sm font-semibold text-gray-600">
                      <span className="line-through">Up to 50 students</span>
                      <br />
                      Up to 60 students
                    </p>
                  )}
                  {plan.name === "Standard" && (
                    <p className="text-sm font-semibold text-gray-600">
                      <span className="line-through">Up to 150 students</span>
                      <br />
                      Up to 180 students
                    </p>
                  )}
                  {plan.name === "Premium" && (
                    <p className="text-sm font-semibold text-gray-600">
                      <span className="line-through">Up to 500 students</span>
                      <br />
                      Up to 600 students
                    </p>
                  )}
                  {plan.name === "Free Trial" && (
                    <p className="text-sm font-semibold text-gray-600">
                      Up to {plan.maxStudents} students
                    </p>
                  )}
                  {plan.name === "Flex Plan" && (
                    <p className="text-sm font-semibold text-gray-600">
                      Up to {plan.maxStudents} students
                    </p>
                  )}
                </div>
              </div>

              <Collapsible
                open={openFeatures[plan.name]}
                onOpenChange={() => toggleFeatures(plan.name)}
                className="mb-6"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-sm font-semibold text-sqoolr-navy mb-2">
                  Features
                  {openFeatures[plan.name] ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      {feature.included ? (
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                      ) : (
                        <span className="h-4 w-4 text-red-300 mr-2">✕</span>
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </CollapsibleContent>
              </Collapsible>

              {plan.earlyAdopterDiscount && (
                <div className="bg-white bg-opacity-50 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-sqoolr-navy mb-2">Early Adopter Benefits:</p>
                  <p className="text-sm text-gray-600">Initial signup term: {plan.earlyAdopterDiscount}</p>
                  {plan.extraStudentsBonus && (
                    <p className="text-sm text-gray-600">Up to {plan.extraStudentsBonus}</p>
                  )}
                </div>
              )}

              <Button
                onClick={() => handlePlanSelection(plan.name)}
                className="w-full bg-sqoolr-navy text-white hover:bg-opacity-90"
              >
                {plan.buttonText}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-sqoolr-navy text-center mb-12">
            Find Your Perfect Plan
          </h2>
          <div className="space-y-8">
            {questions.map((question) => (
              <div
                key={question.id}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold text-sqoolr-navy mb-2">
                  {question.text}
                </h3>
                <p className="text-gray-600 mb-4">{question.description}</p>
                {question.options ? (
                  <div className="space-y-2">
                    {question.options.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center space-x-2 p-2 rounded hover:bg-gray-50"
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={option.value}
                          className="text-sqoolr-navy"
                        />
                        <label className="text-gray-700">{option.label}</label>
                      </div>
                    ))}
                  </div>
                ) : (
                  <input
                    type="text"
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-sqoolr-mint focus:border-transparent"
                    placeholder="Your answer"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-sqoolr-navy mb-6">Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our team is here to help you choose the right plan for your school.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:hello@sqoolr.ng"
              className="flex items-center justify-center gap-2 text-sqoolr-navy hover:text-sqoolr-mint transition-colors"
            >
              <Mail size={20} />
              hello@sqoolr.ng
            </a>
            <a
              href="tel:+2349161410089"
              className="flex items-center justify-center gap-2 text-sqoolr-navy hover:text-sqoolr-mint transition-colors"
            >
              <Phone size={20} />
              +2349161410089
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
