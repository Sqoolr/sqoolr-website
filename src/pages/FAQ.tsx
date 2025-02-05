
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const sections = {
    General: [
      {
        question: "What is Sqoolr?",
        answer: "Sqoolr is a school management platform designed to streamline administrative tasks such as student records management, staff records, admissions, class management, attendance tracking, finance management, communication, and more. It provides a seamless experience for schools, teachers, and administrators to improve efficiency.",
      },
      {
        question: "Who can use Sqoolr?",
        answer: "Sqoolr is designed for K-12 schools, providing tools to simplify school administration and enhance communication between educators, students, and parents.",
      },
      {
        question: "Is Sqoolr available for all schools?",
        answer: "Yes, Sqoolr is available for K-12 schools looking to digitize their administrative processes. However, we also have a Partner School Program, where selected schools can participate in our pilot testing phase.",
      },
      {
        question: "How can my school become a partner school?",
        answer: 'You can apply through our "Become a Partner School" form. Partner schools are selected at Sqoolr\'s discretion for exclusive testing and pilot programs. Terms and conditions apply.',
      },
    ],
    "Features & Functionality": [
      {
        question: "What features does Sqoolr offer?",
        answer: `Sqoolr includes:
          • Student Records Management – Maintain and track student information efficiently.
          • Staff Records Management – Keep detailed records of teachers and non-teaching staff.
          • Admissions Management – Handle student applications, approvals, and enrollments.
          • Class Management – Organize classes, assign teachers, and track attendance.
          • Attendance Tracking – Enable teachers to mark and manage student attendance.
          • Finance Management – Track school expenses, manage tuition fees, and generate financial reports.
          • Seamless Communication – Facilitate effective communication between schools, teachers, parents, and students.
          • Prompt Notifications – Keep staff, students, and parents informed with real-time updates.
          • Events Calendar – Organize and manage school events, exams, and meetings.
          • Assessment & Grading – Enable teachers to record, calculate, and share student grades.`,
      },
      {
        question: "Can teachers mark attendance using Sqoolr?",
        answer: "Yes, teachers can mark attendance. However, if a teacher needs to edit submitted attendance, an admin must approve the changes.",
      },
      {
        question: "Can multiple staff members access the platform?",
        answer: "Yes, Sqoolr allows different access levels for administrators, teachers, and other staff members based on their roles.",
      },
      {
        question: "Can parents access Sqoolr?",
        answer: "Yes, parents can monitor their child's/ward's school progress and also stay updated on school events.",
      },
    ],
    "Technical & Integration": [
      {
        question: "Is Sqoolr cloud-based?",
        answer: "Yes, Sqoolr is a cloud-based platform, which means you can access it from anywhere with an internet connection.",
      },
      {
        question: "Does Sqoolr integrate with other school systems?",
        answer: "We are working on integrations with popular learning management systems (LMS) and payment platforms to enhance functionality.",
      },
      {
        question: "Can Sqoolr be accessed on mobile devices?",
        answer: "Yes, Sqoolr is mobile-friendly and works on any device with a web browser. A dedicated mobile app will be introduced in future versions.",
      },
    ],
    "Security & Data Protection": [
      {
        question: "Is my school's data safe on Sqoolr?",
        answer: "Absolutely! Sqoolr uses industry-standard encryption and secure cloud storage to protect your school's data.",
      },
      {
        question: "Who has access to student and staff data?",
        answer: "Only authorized school administrators and staff members can access student and staff records. Permissions can be customized to ensure data privacy.",
      },
      {
        question: "Can schools back up their data?",
        answer: "Yes, schools can generate and download backups of their data periodically for added security.",
      },
    ],
    "Pricing & Subscription": [
      {
        question: "Is Sqoolr free to use?",
        answer: "Sqoolr offers different pricing plans depending on the school's size and requirements. We also have a free trial period for new schools to explore the platform.",
      },
      {
        question: "How does my school subscribe to Sqoolr?",
        answer: "You can sign up on our website and choose a subscription plan that fits your needs. If you need a customized plan, contact our sales team.",
      },
      {
        question: "Can we upgrade or downgrade our plan?",
        answer: "Yes, you can upgrade or downgrade your plan anytime based on your school's needs.",
      },
    ],
    "Support & Assistance": [
      {
        question: "How do I get support if I have issues?",
        answer: "You can contact our support team via email, phone, or live chat. We also have a help center with guides and tutorials.",
      },
      {
        question: "Does Sqoolr provide training for school staff?",
        answer: "Yes, we offer onboarding and training sessions to help schools get started with Sqoolr.",
      },
      {
        question: "Can I request a demo before subscribing?",
        answer: "Yes! We offer a free demo session where you can see how Sqoolr works before making a decision.",
      },
    ],
  };

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
            {Object.entries(sections).map(([section, questions], index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h2 className="text-2xl font-bold text-sqoolr-navy mb-4">{section}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {questions.map((item, qIndex) => (
                    <AccordionItem key={qIndex} value={`${section}-${qIndex}`}>
                      <AccordionTrigger className="text-left text-sqoolr-navy hover:text-sqoolr-mint">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 whitespace-pre-line">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;
