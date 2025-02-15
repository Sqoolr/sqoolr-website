
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FormField from "../shared/FormField";
import SubmitButton from "../shared/SubmitButton";
import { validateEmail, validateRequiredFields } from "../shared/validation";
import { AmbassadorData, initialFormData } from "./types";

const AmbassadorForm = () => {
  const [formData, setFormData] = useState<AmbassadorData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const missingFields = validateRequiredFields(
      formData as Record<string, string>,
      ['fullName', 'email', 'location', 'occupation', 'areaOfExpertise', 'motivation']
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
        .from('ambassador_applications')
        .insert([{
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          occupation: formData.occupation,
          linkedin_profile: formData.linkedinProfile,
          area_of_expertise: formData.areaOfExpertise,
          motivation: formData.motivation,
          status: 'pending'
        }]);

      if (error) throw error;

      toast.success("Application submitted successfully! We'll review and get back to you soon.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your application. Please try again.");
    }
  };

  const updateField = (field: keyof AmbassadorData) => (value: string) => {
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
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={updateField('email')}
        required
      />
      <FormField
        label="Phone Number"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={updateField('phone')}
      />
      <FormField
        label="Location"
        name="location"
        value={formData.location}
        onChange={updateField('location')}
        required
      />
      <FormField
        label="Occupation"
        name="occupation"
        value={formData.occupation}
        onChange={updateField('occupation')}
        required
      />
      <FormField
        label="LinkedIn Profile"
        name="linkedinProfile"
        type="url"
        value={formData.linkedinProfile}
        onChange={updateField('linkedinProfile')}
        placeholder="https://linkedin.com/in/..."
      />
      <FormField
        label="Area of Expertise"
        name="areaOfExpertise"
        value={formData.areaOfExpertise}
        onChange={updateField('areaOfExpertise')}
        required
      />
      <FormField
        label="Why You'd Be a Great Ambassador"
        name="motivation"
        type="textarea"
        value={formData.motivation}
        onChange={updateField('motivation')}
        required
      />
      <SubmitButton label="Submit Application" />
    </form>
  );
};

export default AmbassadorForm;
