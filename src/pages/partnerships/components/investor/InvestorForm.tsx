
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FormField from "../shared/FormField";
import SubmitButton from "../shared/SubmitButton";
import { validateEmail, validateRequiredFields } from "../shared/validation";
import { InvestorData, initialFormData } from "./types";

const InvestorForm = () => {
  const [formData, setFormData] = useState<InvestorData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const missingFields = validateRequiredFields(
      formData as Record<string, string>,
      ['fullName', 'companyName', 'email', 'role']
    );

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    try {
      const { error } = await supabase
        .from('investor_partners')
        .insert([{
          full_name: formData.fullName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          investment_range: formData.investmentRange,
          investment_focus: formData.investmentFocus,
          portfolio_companies: formData.portfolio,
          investment_timeline: formData.timeline,
          status: 'pending'
        }]);

      if (error) throw error;

      toast.success("Form submitted successfully! We'll be in touch soon.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your form. Please try again.");
    }
  };

  const updateField = (field: keyof InvestorData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={updateField('fullName')}
        required
      />
      <FormField
        label="Company Name"
        name="companyName"
        value={formData.companyName}
        onChange={updateField('companyName')}
        required
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={updateField('email')}
        required
      />
      <FormField
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={updateField('phone')}
      />
      <FormField
        label="Role"
        name="role"
        value={formData.role}
        onChange={updateField('role')}
        required
      />
      <FormField
        label="Investment Range"
        name="investmentRange"
        value={formData.investmentRange}
        onChange={updateField('investmentRange')}
        placeholder="e.g., $500K - $2M"
      />
      <FormField
        label="Investment Focus"
        name="investmentFocus"
        type="textarea"
        value={formData.investmentFocus}
        onChange={updateField('investmentFocus')}
        placeholder="What types of companies/sectors do you typically invest in?"
        rows={3}
      />
      <FormField
        label="Notable Portfolio Companies"
        name="portfolio"
        type="textarea"
        value={formData.portfolio}
        onChange={updateField('portfolio')}
        placeholder="List some of your notable investments..."
        rows={3}
      />
      <FormField
        label="Investment Timeline"
        name="timeline"
        value={formData.timeline}
        onChange={updateField('timeline')}
        placeholder="e.g., Q2 2024"
      />
      <SubmitButton label="Submit Interest" />
    </form>
  );
};

export default InvestorForm;
