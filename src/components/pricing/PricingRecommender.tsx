import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface RecommenderProps {
  onRecommendationComplete: (plan: string) => void;
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
      subtitle: "Select the level of communication features you need",
      type: "select",
      options: ["Basic", "Moderate", "Advanced"]
    },
    {
      question: "Is your school expecting significant growth in student enrollment or additional campuses in the next few years?",
      subtitle: "Helps assess if your school needs a more scalable plan, such as Premium.",
      type: "boolean"
    }
  ];

  const determinePackage = () => {
    const { students, campuses, advancedFeatures, realTimeComm, expansionPlan } = answers;

    if (students <= 50 && campuses <= 1 && !advancedFeatures && realTimeComm === "Basic" && !expansionPlan) {
      return "Basic";
    } else if (students <= 150 && campuses <= 1 && !advancedFeatures && realTimeComm === "Moderate" && !expansionPlan) {
      return "Standard";
    } else {
      return "Premium";
    }
  };

  const handleNext = () => {
    const isAnswered = Object.values(answers)[currentQuestion] !== "" && 
                      Object.values(answers)[currentQuestion] !== 0;
    
    if (!isAnswered) {
      return; // Don't proceed if question isn't answered
    }

    if (currentQuestion === questions.length - 1) {
      const recommended = determinePackage();
      setRecommendedPlan(recommended);
      setShowRecommendation(true);
      onRecommendationComplete(recommended);
    } else {
      setCurrentQuestion(prev => prev + 1);
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

        {questions[currentQuestion].type === "number" && (
          <input
            type="number"
            min="0"
            onChange={(e) => handleAnswerChange(parseInt(e.target.value))}
            className="w-full p-2 border rounded-md"
          />
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

        {questions[currentQuestion].type === "select" && (
          <div className="space-y-2">
            {questions[currentQuestion].options?.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswerChange(option)}
                variant="outline"
                className={`w-full ${answers[Object.keys(answers)[currentQuestion]] === option ? "bg-sqoolr-mint" : ""}`}
              >
                {option}
              </Button>
            ))}
          </div>
        )}

        <Button 
          onClick={handleNext}
          className="mt-6 w-full bg-sqoolr-navy text-white"
        >
          {currentQuestion === questions.length - 1 ? "Get Recommendation" : "Next"}
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default PricingRecommender;
