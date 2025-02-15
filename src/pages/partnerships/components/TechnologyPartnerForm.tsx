
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const TechnologyPartnerForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    role: "",
    technologyType: "",
    website: "",
    integrationDescription: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.technologyType) {
      toast.error("Please fill in all required fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
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
      
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        role: "",
        technologyType: "",
        website: "",
        integrationDescription: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your application. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name*
        </label>
        <Input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Company Name*
        </label>
        <Input
          type="text"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email*
        </label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <Input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Role in Company
        </label>
        <Input
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Technology Type*
        </label>
        <Input
          type="text"
          value={formData.technologyType}
          onChange={(e) => setFormData({ ...formData, technologyType: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Website
        </label>
        <Input
          type="url"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          placeholder="https://..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Integration Description
        </label>
        <Textarea
          value={formData.integrationDescription}
          onChange={(e) => setFormData({ ...formData, integrationDescription: e.target.value })}
          placeholder="Describe how your technology could integrate with Sqoolr..."
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sqoolr-mint text-sqoolr-navy font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
      >
        Submit Application
      </button>
    </form>
  );
};

export default TechnologyPartnerForm;
