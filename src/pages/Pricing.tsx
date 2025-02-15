import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
    name: "Basic",
    description: "For schools with a smaller student body looking for foundational tools",
    maxStudents: 50,
    pricePerTerm: "₦120,000",
    annualPrice: "₦324,000",
    buttonText: "Start Free Trial",
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

const determinePackage = (
  numStudents: number, 
  numCampuses: number, 
  advancedFeatures: boolean, 
  realTimeComm: string, 
  expansionPlan: boolean
) => {
  if (numStudents <= 50 && numCampuses <= 1 && !advancedFeatures && realTimeComm === "Basic" && !expansionPlan) {
    return "Basic";
  } else if (numStudents <= 150 && numCampuses <= 1 && !advancedFeatures && realTimeComm === "Moderate" && !expansionPlan) {
    return "Standard";
  } else if (numStudents > 150 || numCampuses > 1 || advancedFeatures || realTimeComm === "Advanced" || expansionPlan) {
    return "Premium";
  }
  return "Standard"; // Default fallback
};

const Pricing = () => {
  const { toast } = useToast();
  const [selectedBillingType, setSelectedBillingType] = useState<'term' | 'annual'>('term');
  const [openFeatures, setOpenFeatures] = useState<{ [key: string]: boolean }>({});
  const [flexMonths, setFlexMonths] = useState<number>(2);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState({
    students: "",
    campuses: "",
    advancedTools: "",
    communication: "",
    growth: "",
  });
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);

  const handleQuizAnswer = (field: string, value: string) => {
    setQuizAnswers(prev => ({ ...prev, [field]: value }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Calculate recommendation
      const recommendation = determinePackage(
        Number(quizAnswers.students),
        Number(quizAnswers.campuses),
        quizAnswers.advancedTools === "yes",
        quizAnswers.communication,
        quizAnswers.growth === "yes"
      );
      setRecommendedPlan(recommendation);
    }
  };

  const calculateFlexPrice = (months: number) => {
    return months * 45000;
  };

  const handleFlexMonthsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 2;
    setFlexMonths(Math.max(2, value));
  };

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

  const scrollToRecommendedPlan = (planName: string) => {
    const element = document.getElementById(`${planName.toLowerCase()}-plan`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Add a highlight effect
      element.classList.add('ring-4', 'ring-sqoolr-mint', 'ring-opacity-50');
      setTimeout(() => {
        element.classList.remove('ring-4', 'ring-sqoolr-mint', 'ring-opacity-50');
      }, 2000);
    }
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
                "rounded-2xl p-6 shadow-lg transition-all duration-300",
                plan.bgClass,
                plan.name === "Standard" && "transform scale-105 ring-2 ring-sqoolr-mint"
              )}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-sqoolr-navy mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="space-y-4">
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
              </div>
              {plan.name === "Flex Plan" ? (
                  <div>
                    <p className="text-3xl font-bold text-sqoolr-navy">₦{calculateFlexPrice(flexMonths).toLocaleString()}</p>
                    <div className="mt-4">
                      <label className="text-sm text-gray-600">Number of months (minimum 2):</label>
                      <input
                        type="number"
                        min="2"
                        value={flexMonths}
                        onChange={handleFlexMonthsChange}
                        className="w-full mt-2 p-2 border rounded"
                      />
                    </div>
                  </div>
                ) : (
                  <>
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
                  </>
                )}

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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
