
import { useState, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/lib/supabase";
import { useNavigate } from "react-router-dom";

const HelpCenter = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);
  const [files, setFiles] = useState<FileList | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [ticketForm, setTicketForm] = useState({
    category: "",
    fullName: "",
    email: "",
    phone: "",
    description: "",
    priority: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(e.target.files);
    } else {
      setFiles(null);
    }
  };

  const handleTicketSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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

    const ticketNumber = `TKT-${Date.now()}`;
    const { error: ticketError } = await supabase
      .from('support_tickets')
      .insert([
        {
          ticket_number: ticketNumber,
          category: ticketForm.category,
          full_name: ticketForm.fullName,
          email: ticketForm.email,
          phone: ticketForm.phone,
          description: ticketForm.description,
          priority: ticketForm.priority,
          attachments: fileUrls
        }
      ]);

    if (ticketError) {
      toast({
        title: "Error submitting ticket",
        description: ticketError.message,
        variant: "destructive"
      });
      return;
    }

    await supabase.functions.invoke('send-ticket-confirmation', {
      body: {
        ticketNumber,
        name: ticketForm.fullName,
        email: ticketForm.email
      }
    });

    toast({
      title: "Thank you for reaching out!",
      description: "Your ticket has been submitted successfully. Check your email for the confirmation.",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-sqoolr-navy mb-6">Help Center</h1>
          <p className="text-lg text-gray-600 mb-8">
            Need assistance? We're here to help! Submit a support ticket and our team will get back to you shortly.
          </p>
          <Button 
            onClick={() => setIsTicketDialogOpen(true)}
            className="bg-sqoolr-mint text-sqoolr-navy hover:bg-opacity-90"
          >
            Submit Support Ticket
          </Button>
        </div>

        <Dialog open={isTicketDialogOpen} onOpenChange={setIsTicketDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Submit Support Ticket</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleTicketSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Category*</Label>
                <select
                  id="category"
                  name="category"
                  required
                  className="w-full p-2 border rounded"
                  value={ticketForm.category}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="">Select a category</option>
                  <option value="technical">Technical Issue</option>
                  <option value="billing">Billing</option>
                  <option value="feature">Feature Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Issue Description*</Label>
                <Textarea
                  id="description"
                  required
                  value={ticketForm.description}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, description: e.target.value }))}
                />
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

              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name*</Label>
                <Input
                  type="text"
                  id="fullName"
                  required
                  value={ticketForm.fullName}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, fullName: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email*</Label>
                <Input
                  type="email"
                  id="email"
                  required
                  value={ticketForm.email}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  value={ticketForm.phone}
                  onChange={(e) => setTicketForm(prev => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div className="space-y-2">
                <Label>Priority</Label>
                <RadioGroup
                  value={ticketForm.priority}
                  onValueChange={(value) => setTicketForm(prev => ({ ...prev, priority: value }))}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="r1" />
                    <Label htmlFor="r1">Low</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="r2" />
                    <Label htmlFor="r2">Medium</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="r3" />
                    <Label htmlFor="r3">High</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-x-2">
                <Button type="submit">Submit Ticket</Button>
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsTicketDialogOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HelpCenter;
