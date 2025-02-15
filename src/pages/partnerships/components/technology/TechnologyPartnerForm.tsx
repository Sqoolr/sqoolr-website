
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FormField from "../shared/FormField";
import SubmitButton from "../shared/SubmitButton";
import { validateEmail, validateRequiredFields } from "../shared/validation";
import { TechnologyPartnerData, initialFormData } from "./types";

const TechnologyPartnerForm = () => {
  const [formData, setFormData] = useState<TechnologyPartnerData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const missingFields = validateRequiredFields(
      formData as Record<string, string>,
      ['fullName', 'companyName', 'email', 'technologyType']
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
        .from('technology_partners')
        .insert([{
          full_name: formData.fullName,
          company_name: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          role: formData.role,
          technology_type: formData.technologyType,
          website: formData.website,
          integration_description: formData.integrationDescription,
          status: 'pending'
        }]);

      if (error) throw error;

      toast.success("Form submitted successfully! We'll be in touch soon.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your application. Please try again.");
    }
  };

  const updateField = (field: keyof TechnologyPartnerData) => (value: string) => {
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
        label="Role in Company"
        name="role"
        value={formData.role}
        onChange={updateField('role')}
      />
      <FormField
        label="Technology Type"
        name="technologyType"
        value={formData.technologyType}
        onChange={updateField('technologyType')}
        required
      />
      <FormField
        label="Website"
        name="website"
        type="url"
        value={formData.website}
        onChange={updateField('website')}
        placeholder="https://..."
      />
      <FormField
        label="Integration Description"
        name="integrationDescription"
        type="textarea"
        value={formData.integrationDescription}
        onChange={updateField('integrationDescription')}
        placeholder="Describe how your technology could integrate with Sqoolr..."
      />
      <SubmitButton label="Submit Application" />
    </form>
  );
};

export default TechnologyPartnerForm;
