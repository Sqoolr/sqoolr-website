
import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface TicketFormProps {
  onSuccess: () => void;
}

const TicketForm = ({ onSuccess }: TicketFormProps) => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileList | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    category: "",
    fullName: "",
    email: "",
    phone: "",
    description: "",
    priority: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(e.target.files);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const fileUrls: string[] = [];
      if (files && files.length > 0) {
        for (const file of Array.from(files)) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${crypto.randomUUID()}.${fileExt}`;
          const { data: uploadData, error: uploadError } = await supabase.storage
            .from('support_attachments')
            .upload(fileName, file);

          if (uploadError) {
            console.error('Upload error:', uploadError);
            throw uploadError;
          }

          if (uploadData) {
            fileUrls.push(uploadData.path);
          }
        }
      }

      const ticketNumber = `TKT-${Date.now()}`;
      const { error: ticketError } = await supabase
        .from('support_tickets')
        .insert([{
          ticket_number: ticketNumber,
          category: formData.category,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          description: formData.description,
          priority: formData.priority,
          attachments: fileUrls
        }]);

      if (ticketError) {
        console.error('Ticket creation error:', ticketError);
        throw ticketError;
      }

      // Send confirmation email
      const { error: emailError } = await supabase.functions.invoke('send-ticket-confirmation', {
        body: {
          ticketNumber,
          name: formData.fullName,
          email: formData.email
        }
      });

      if (emailError) {
        console.error('Email sending error:', emailError);
      }

      toast({
        title: "Thank you for reaching out!",
        description: "Your ticket has been submitted successfully. Check your email for the confirmation.",
      });

      onSuccess();
      
    } catch (error: any) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error.message || "An error occurred while submitting your ticket. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="category">Category*</Label>
        <select
          id="category"
          required
          className="w-full p-2 border rounded"
          value={formData.category}
          onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
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
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
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
          value={formData.fullName}
          onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email*</Label>
        <Input
          type="email"
          id="email"
          required
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
        />
      </div>

      <div className="space-y-2">
        <Label>Priority</Label>
        <RadioGroup
          value={formData.priority}
          onValueChange={(value) => setFormData(prev => ({ ...prev, priority: value }))}
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
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Ticket"}
        </Button>
      </div>
    </form>
  );
};

export default TicketForm;
