import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, FileText } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";

const HelpCenter = () => {
  const { toast } = useToast();
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);
  const [isNewsletterDialogOpen, setIsNewsletterDialogOpen] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    category: "",
    fullName: "",
    email: "",
    phone: "",
    description: "",
    priority: "",
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [agreeToEmails, setAgreeToEmails] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const validFiles = Array.from(selectedFiles).every(file => {
        const fileType = file.type;
        return fileType === 'image/jpeg' || fileType === 'image/png' || fileType === 'application/pdf';
      });

      if (!validFiles) {
        toast({
          title: "Invalid file format",
          description: "Please upload only JPEG, PNG, or PDF files.",
          variant: "destructive"
        });
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
        return;
      }

      setFiles(selectedFiles);
    }
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Upload files to Supabase storage
    const fileUrls = [];
    if (files) {
      for (const file of Array.from(files)) {
        const fileExt = file.name.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from('support_attachments')
          .upload(fileName, file);

        if (error) {
          toast({
            title: "File upload failed",
            description: error.message,
            variant: "destructive"
          });
          return;
        }

        fileUrls.push(data.path);
      }
    }

    // Save ticket to database
    const { data: ticketData, error: ticketError } = await supabase
      .from('support_tickets')
      .insert([
        {
          category: ticketForm.category,
          full_name: ticketForm.fullName,
          email: ticketForm.email,
          phone: ticketForm.phone,
          description: ticketForm.description,
          priority: ticketForm.priority,
          attachments: fileUrls
        }
      ])
      .select()
      .single();

    if (ticketError) {
      toast({
        title: "Error submitting ticket",
        description: ticketError.message,
        variant: "destructive"
      });
      return;
    }

    // Send confirmation email
    const emailResponse = await fetch(
      'https://eextrvidcxsgzjpbryvw.supabase.co/functions/v1/send-ticket-confirmation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({
          ticketNumber: ticketData.ticket_number,
          name: ticketData.full_name,
          email: ticketData.email
        })
      }
    );

    if (!emailResponse.ok) {
      console.error('Failed to send confirmation email');
    }

    toast({
      title: "Thank you for reaching out!",
      description: "Your ticket has been submitted successfully. Our support team will get back to you soon.",
    });

    setIsTicketDialogOpen(false);
    setTicketForm({
      category: "",
      fullName: "",
      email: "",
      phone: "",
      description: "",
      priority: "",
    });
    setFiles(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreeToEmails) {
      toast({
        title: "Agreement Required",
        description: "Please agree to receive emails before subscribing.",
        variant: "destructive"
      });
      return;
    }
    toast({
      title: "Subscription Successful!",
      description: "You've been subscribed to our newsletter.",
    });
    setIsNewsletterDialogOpen(false);
    setNewsletterEmail("");
    setAgreeToEmails(false);
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
              <Dialog open={isTicketDialogOpen} onOpenChange={setIsTicketDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2">
                    <FileText size={20} />
                    Submit a Ticket
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle>Submit Support Ticket</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleTicketSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label>Category*</Label>
                      <RadioGroup
                        required
                        value={ticketForm.category}
                        onValueChange={(value) =>
                          setTicketForm({ ...ticketForm, category: value })
                        }
                      >
                        {[
                          "Technical Issues",
                          "Billing & Payments",
                          "Account Management",
                          "General Inquiry",
                          "Other",
                        ].map((category) => (
                          <div className="flex items-center space-x-2" key={category}>
                            <RadioGroupItem value={category} id={category} />
                            <Label htmlFor={category}>{category}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name*</Label>
                      <Input
                        id="fullName"
                        required
                        value={ticketForm.fullName}
                        onChange={(e) =>
                          setTicketForm({ ...ticketForm, fullName: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address*</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={ticketForm.email}
                        onChange={(e) =>
                          setTicketForm({ ...ticketForm, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number (Optional)</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={ticketForm.phone}
                        onChange={(e) =>
                          setTicketForm({ ...ticketForm, phone: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Issue Description*</Label>
                      <Textarea
                        id="description"
                        required
                        placeholder="Please describe your issue in detail. Include any error messages, screenshots, or steps to reproduce the problem."
                        value={ticketForm.description}
                        onChange={(e) =>
                          setTicketForm({ ...ticketForm, description: e.target.value })
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Priority Level*</Label>
                      <RadioGroup
                        required
                        value={ticketForm.priority}
                        onValueChange={(value) =>
                          setTicketForm({ ...ticketForm, priority: value })
                        }
                      >
                        {[
                          { value: "low", label: "Low (General question, no rush)" },
                          { value: "medium", label: "Medium (Needs attention but not urgent)" },
                          { value: "high", label: "High (Blocking work or urgent issue)" },
                        ].map((priority) => (
                          <div className="flex items-center space-x-2" key={priority.value}>
                            <RadioGroupItem value={priority.value} id={priority.value} />
                            <Label htmlFor={priority.value}>{priority.label}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="attachments">Attachments (Optional)</Label>
                      <Input
                        id="attachments"
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        accept=".jpg,.jpeg,.png,.pdf"
                        multiple
                        className="cursor-pointer"
                      />
                      <p className="text-sm text-gray-500">
                        Accepted formats: JPEG, PNG, PDF
                      </p>
                    </div>

                    <Button type="submit" className="w-full">
                      Submit Ticket
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              <Dialog open={isNewsletterDialogOpen} onOpenChange={setIsNewsletterDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Mail size={20} />
                    Subscribe to Newsletter
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[400px]">
                  <DialogHeader>
                    <DialogTitle>Subscribe to Our Newsletter</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="newsletter-email">Email Address*</Label>
                      <Input
                        id="newsletter-email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        value={newsletterEmail}
                        onChange={(e) => setNewsletterEmail(e.target.value)}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agree-emails"
                        checked={agreeToEmails}
                        onCheckedChange={(checked) => setAgreeToEmails(checked as boolean)}
                      />
                      <Label htmlFor="agree-emails">
                        I agree to receive emails about Sqoolr updates, features, and promotions.
                      </Label>
                    </div>

                    <Button type="submit" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelpCenter;
