
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import FormField from "../shared/FormField";
import SubmitButton from "../shared/SubmitButton";
import { validateEmail, validateRequiredFields } from "../shared/validation";
import { SchoolFormData, initialFormData, SchoolType } from "./types";

const PartnerSchoolForm = () => {
  const [formData, setFormData] = useState<SchoolFormData>(initialFormData);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const missingFields = validateRequiredFields(
      {
        ...formData,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        schoolName: formData.schoolName,
      },
      ['firstName', 'lastName', 'email', 'schoolName']
    );

    if (missingFields.length > 0) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!Object.values(formData.schoolTypes).some(Boolean)) {
      toast.error("Please select at least one school type");
      return;
    }

    try {
      const selectedTypes = Object.entries(formData.schoolTypes)
        .filter(([_, value]) => value)
        .map(([key]) => key)
        .join(", ");

      const { error } = await supabase
        .from('partner_schools')
        .insert([{
          full_name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          school_name: formData.schoolName,
          role: "School Administrator",
          school_types: selectedTypes,
          requirements: formData.reasonsForApplying,
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

  const updateField = (field: keyof SchoolFormData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const updateSchoolType = (type: SchoolType) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      schoolTypes: {
        ...prev.schoolTypes,
        [type]: e.target.checked
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={updateField('firstName')}
        required
      />
      <FormField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={updateField('lastName')}
        required
      />
      <FormField
        label="School Name"
        name="schoolName"
        value={formData.schoolName}
        onChange={updateField('schoolName')}
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Type of School*
        </label>
        <div className="space-y-2">
          {[
            { key: 'kindergarten' as const, label: 'Kindergarten' },
            { key: 'primary' as const, label: 'Primary' },
            { key: 'juniorSecondary' as const, label: 'Junior Secondary' },
            { key: 'seniorSecondary' as const, label: 'Senior Secondary' },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center">
              <input
                type="checkbox"
                id={key}
                checked={formData.schoolTypes[key]}
                onChange={updateSchoolType(key)}
                className="h-4 w-4 text-sqoolr-mint focus:ring-sqoolr-mint border-gray-300 rounded"
              />
              <label
                htmlFor={key}
                className="ml-2 block text-sm text-gray-700"
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <FormField
        label="Reasons for Applying"
        name="reasonsForApplying"
        type="textarea"
        value={formData.reasonsForApplying}
        onChange={updateField('reasonsForApplying')}
        required
      />

      <SubmitButton label="Submit Application" />
    </form>
  );
};

export default PartnerSchoolForm;
