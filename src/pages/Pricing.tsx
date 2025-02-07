
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Pricing = () => {
  const { toast } = useToast();

  const joinWaitlist = () => {
    toast({
      title: "Success!",
      description: "You've been added to our waitlist. We'll notify you when pricing is available.",
    });
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
            Pricing – Coming Soon
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 space-y-8">
            <p className="text-gray-600">
              At Sqoolr, we're committed to providing exceptional value through our comprehensive school management platform. We understand that pricing is a crucial factor, and we're working on designing flexible and transparent pricing plans that fit the needs of all schools—whether small or large, public or private.
            </p>

            <div>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">What to Expect</h2>
              <p className="text-gray-600">
                Our pricing model will be designed to offer the best value based on your school's size, needs, and features required. Sqoolr aims to make school management affordable, accessible, and scalable for every institution.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">Key Features (Coming Soon to Pricing Plans)</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Student & Staff Management: Easily manage student records, attendance, and grades.</li>
                <li>Assessment & Grading: Automated grading and reporting for transparent student performance insights.</li>
                <li>Attendance Tracking: Real-time tracking of student attendance, with automated alerts for absences.</li>
                <li>Finance Management: Track and manage school finances, including tuition, fees, and expenses.</li>
                <li>Communication Tools: Streamlined communication between teachers, students, and parents.</li>
                <li>AI Insights & Performance Predictions: AI-driven analytics to help improve student outcomes and operational efficiency.</li>
                <li>Seamless Integration: Future integrations with other tools and platforms for enhanced functionality.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">Why Sqoolr?</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>User-Centric Design: Our intuitive interface ensures that everyone, from administrators to teachers and parents, can easily navigate the platform.</li>
                <li>Comprehensive Support: Get the support you need through tutorials, a help center, and dedicated customer service.</li>
                <li>Scalable Solutions: As your school grows, Sqoolr grows with you, offering solutions that expand with your needs.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">Stay Informed</h2>
              <p className="text-gray-600 mb-6">
                We're working on our pricing plans and will be launching them soon. To ensure you don't miss out on updates, join our waitlist today and get early access to Sqoolr's features, exclusive offers, and pricing details.
              </p>
              <Button onClick={joinWaitlist} className="bg-sqoolr-mint text-sqoolr-navy hover:bg-opacity-90">
                Join Waitlist
              </Button>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                If you have any questions about Sqoolr's features or pricing, feel free to reach out to our team. We'll be happy to discuss how Sqoolr can work for your school.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:hello@sqoolr.ng" className="flex items-center gap-2 text-sqoolr-navy hover:text-sqoolr-mint">
                  <Mail size={20} />
                  hello@sqoolr.ng
                </a>
                <a href="tel:+2349161410089" className="flex items-center gap-2 text-sqoolr-navy hover:text-sqoolr-mint">
                  <Phone size={20} />
                  +2349161410089
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
