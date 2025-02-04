import { motion } from "framer-motion";

const FAQ = () => {
  const faqs = [
    {
      question: "What exactly is Sqoolr?",
      answer: "Sqoolr is an all-in-one platform designed to streamline school management. It helps manage student and staff records, admissions, class schedules, and more."
    },
    {
      question: "How can I get access to Sqoolr?",
      answer: "Sign up for our waitlist to receive early access and updates about the launch."
    },
    {
      question: "Will Sqoolr work for all types of schools?",
      answer: "Yes, Sqoolr is designed to meet the needs of all types of educational institutions, whether public, private, or charter schools."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-8 text-center">
            Frequently Asked Questions
          </h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-xl font-semibold text-sqoolr-navy mb-4">
                  {faq.question}
                </h2>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;