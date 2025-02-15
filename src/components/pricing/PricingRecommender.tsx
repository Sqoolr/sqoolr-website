import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface RecommenderProps {
  onRecommendationComplete: (plan: string) => void;
}

function recommendPackage(studentCount: number, campuses: number, requiresAdvancedTools: boolean, communicationLevel: string, expectingGrowth: boolean) {
  if (studentCount > 300) return "Premium";
  if (campuses > 1) return "Premium";
  if (requiresAdvancedTools) return "Premium";
  if (communicationLevel === "Advanced") return "Premium";
  if (expectingGrowth) return "Premium";
  if (studentCount > 100) return "Standard";
  if (communicationLevel === "Moderate") return "Standard";
  return "Basic";
}

const PricingRecommender = ({ onRecommendationComplete }: RecommenderProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({
    students: 0,
    campuses: 1,
    advancedFeatures: false,
    realTimeComm: "",
    expansionPlan: false
  });
  const [showRecommendation, setShowRecommendation] = useState(false);
  const [recommendedPlan, setRecommendedPlan] = useState<string | null>(null);

  const questions = [
    {
      question: "How many students are currently enrolled in your school?",
      subtitle: "Helps determine the best package based on your school size",
      type: "number"
    },
    {
      question: "How many campuses does your school operate?",
      subtitle: "Identifies if the Multi-School Management feature is needed, available in the Premium plan.",
      type: "number"
    },
    {
      question: "Does your school require advanced tools such as financial management, AI-driven insights, or customized user roles?",
      subtitle: "Determines if your school needs premium features exclusive to the Premium plan.",
      type: "boolean"
    },
    {
      question: "How important is real-time communication for your school?",
      subtitle: "Select one of the following options:",
      type: "select",
      options: [
        { label: "Basic", description: "Notifications" },
        { label: "Moderate", description: "Events and calendar management" },
        { label: "Advanced", description: "Real-time notifications, multi-campus coordination" }
      ]
    },
    {
      question: "Is your school expecting significant growth in student enrollment or additional campuses in the next few years?",
      subtitle: "Helps assess if your school needs a more scalable plan, such as Premium.",
      type: "boolean"
    }
  ];

  const handleNext = () => {
    if (currentQuestion === questions.length - 1) {
      const recommended = recommendPackage(
        answers.students,
        answers.campuses,
        answers.advancedFeatures,
        answers.realTimeComm,
        answers.expansionPlan
      );
      setRecommendedPlan(recommended);
      setShowRecommendation(true);
      onRecommendationComplete(recommended);
    } else {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const isAnswered = () => {
    const currentAnswer = Object.values(answers)[currentQuestion];
    if (questions[currentQuestion].type === "boolean") return currentAnswer !== null;
    if (questions[currentQuestion].type === "select") return Boolean(currentAnswer);
    if (questions[currentQuestion].type === "number") return currentAnswer > 0;
    return false;
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const resetQuestions = () => {
    setCurrentQuestion(0);
    setAnswers({
      students: 0,
      campuses: 1,
      advancedFeatures: false,
      realTimeComm: "",
      expansionPlan: false
    });
    setShowRecommendation(false);
    setRecommendedPlan(null);
  };

  const handleAnswerChange = (value: any) => {
    setAnswers(prev => ({
      ...prev,
      [Object.keys(answers)[currentQuestion]]: value
    }));
  };

  if (showRecommendation && recommendedPlan) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 text-center"
      >
        <h3 className="text-2xl font-bold text-sqoolr-navy mb-4">
          We Recommend the {recommendedPlan} Plan
        </h3>
        <p className="text-gray-600 mb-6">
          Based on your responses, we believe the {recommendedPlan} Plan would be the best fit for your school.
        </p>
        <div className="space-y-4">
          <Button 
            onClick={() => onRecommendationComplete(recommendedPlan)}
            className="w-full bg-sqoolr-navy text-white"
          >
            View {recommendedPlan} Plan
          </Button>
          <Button 
            onClick={resetQuestions}
            variant="outline"
            className="w-full"
          >
            Start Over
          </Button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
    >
      <h3 className="text-2xl font-bold text-sqoolr-navy mb-6">Find Your Perfect Plan</h3>
      
      <motion.div
        key={currentQuestion}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="space-y-4"
      >
        <h4 className="text-xl font-semibold text-sqoolr-navy">{questions[currentQuestion].question}</h4>
        <p className="text-gray-600 mb-4">{questions[currentQuestion].subtitle}</p>

        {questions[currentQuestion].type === "select" && (
          <div className="space-y-2">
            {questions[currentQuestion].options?.map((option) => (
              <Button
                key={option.label}
                onClick={() => handleAnswerChange(option.label)}
                variant="outline"
                className={`w-full justify-between ${answers.realTimeComm === option.label ? "bg-sqoolr-mint" : ""}`}
              >
                <span>{option.label}</span>
                <span className="text-sm text-gray-500">({option.description})</span>
              </Button>
            ))}
          </div>
        )}

        {questions[currentQuestion].type === "boolean" && (
          <div className="space-x-4">
            <Button
              onClick={() => handleAnswerChange(true)}
              variant="outline"
              className={answers[Object.keys(answers)[currentQuestion]] ? "bg-sqoolr-mint" : ""}
            >
              Yes
            </Button>
            <Button
              onClick={() => handleAnswerChange(false)}
              variant="outline"
              className={!answers[Object.keys(answers)[currentQuestion]] ? "bg-sqoolr-mint" : ""}
            >
              No
            </Button>
          </div>
        )}

        {questions[currentQuestion].type === "number" && (
          <input
            type="number"
            min="1"
            onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
            className="w-full p-2 border rounded-md"
            value={Object.values(answers)[currentQuestion] || ""}
          />
        )}

        <div className="flex justify-between mt-6">
          <Button 
            onClick={handlePrevious}
            variant="outline"
            disabled={currentQuestion === 0}
            className="w-12 h-12 rounded-full"
          >
            <ArrowLeftIcon className="w-5 h-5" />
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!isAnswered()}
            className="w-12 h-12 rounded-full bg-sqoolr-navy"
          >
            <ArrowRightIcon className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PricingRecommender;
