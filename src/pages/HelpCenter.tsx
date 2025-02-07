
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const HelpCenter = () => {
  const { toast } = useToast();

  const handleSubscribe = () => {
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter.",
    });
  };

  const handleSubmitTicket = () => {
    toast({
      title: "Ticket Submitted",
      description: "We'll get back to you as soon as possible.",
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
            Help Center – We're Here to Assist You!
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12 space-y-8">
            <p className="text-gray-600">
              Welcome to the Sqoolr Help Center! Whether you're new to Sqoolr or a seasoned user, we're here to provide the guidance you need to make the most out of our school management platform.
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="getting-started">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">Getting Started</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">How to Set Up Your Account</h3>
                    <p>Learn how to create your account, log in, and set up your profile.</p>
                    
                    <h3 className="font-semibold">Navigating the Dashboard</h3>
                    <p>Get familiar with Sqoolr's user interface and discover where key features are located.</p>
                    
                    <h3 className="font-semibold">Setting Up Your School Profile</h3>
                    <p>Step-by-step guide to adding your school's details, logo, and other important information.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="general-features">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">General Features</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">What is Sqoolr?</h3>
                    <p>Sqoolr is an all-in-one school management platform designed to streamline your school's operations.</p>
                    
                    <h3 className="font-semibold">Who can use Sqoolr?</h3>
                    <p>Sqoolr is designed for K-12 schools, whether private or public.</p>
                    
                    <h3 className="font-semibold">Is there a mobile app?</h3>
                    <p>A mobile app is currently in development. Meanwhile, access Sqoolr through any web browser.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="student-staff">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">Student & Staff Management</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Managing Records</h3>
                    <p>Learn how to add, edit, and manage student and staff records efficiently.</p>
                    
                    <h3 className="font-semibold">Attendance Tracking</h3>
                    <p>Discover how to track and manage attendance for students and staff.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="grading">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">Grading & Assessments</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Managing Grades</h3>
                    <p>Learn how to input, track, and analyze student grades and assessments.</p>
                    
                    <h3 className="font-semibold">Performance Reports</h3>
                    <p>Generate and analyze detailed performance reports for students and classes.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="finance">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">Finance Management</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Financial Tools</h3>
                    <p>Explore tools for managing school finances, tuition, and expenses.</p>
                    
                    <h3 className="font-semibold">Payment Tracking</h3>
                    <p>Learn how to track and manage payments from students and parents.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="communication">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">Communication & Notifications</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Messaging System</h3>
                    <p>Learn how to communicate effectively with teachers, students, and parents.</p>
                    
                    <h3 className="font-semibold">Notification Settings</h3>
                    <p>Configure and manage notifications for different events and updates.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="troubleshooting">
                <AccordionTrigger className="text-xl font-semibold text-sqoolr-navy">Troubleshooting</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Common Issues</h3>
                    <p>Find solutions to common problems and technical issues.</p>
                    
                    <h3 className="font-semibold">Password Reset</h3>
                    <p>Learn how to reset your password and manage account security.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <div className="border-t pt-8">
              <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">Contact Support</h2>
              <p className="text-gray-600 mb-6">
                If you need further assistance or have a specific question, our support team is here to help!
              </p>
              <div className="space-y-4">
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
                <p className="text-gray-600">Support Hours: Monday – Friday, 9:00 AM – 5:00 PM (GMT+1)</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleSubmitTicket} className="flex items-center gap-2">
                <FileText size={20} />
                Submit a Ticket
              </Button>
              <Button onClick={handleSubscribe} variant="outline" className="flex items-center gap-2">
                <Mail size={20} />
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;
