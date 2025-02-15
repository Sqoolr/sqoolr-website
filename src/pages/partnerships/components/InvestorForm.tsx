
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const InvestorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    role: "",
    investmentRange: "",
    investmentFocus: "",
    portfolio: "",
    timeline: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.companyName || !formData.email || !formData.role) {
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
      
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        role: "",
        investmentRange: "",
        investmentFocus: "",
        portfolio: "",
        timeline: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("There was an error submitting your form. Please try again.");
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
          Role*
        </label>
        <Input
          type="text"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Investment Range
        </label>
        <Input
          type="text"
          value={formData.investmentRange}
          onChange={(e) => setFormData({ ...formData, investmentRange: e.target.value })}
          placeholder="e.g., $500K - $2M"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Investment Focus
        </label>
        <Textarea
          value={formData.investmentFocus}
          onChange={(e) => setFormData({ ...formData, investmentFocus: e.target.value })}
          placeholder="What types of companies/sectors do you typically invest in?"
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Notable Portfolio Companies
        </label>
        <Textarea
          value={formData.portfolio}
          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
          placeholder="List some of your notable investments..."
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Investment Timeline
        </label>
        <Input
          type="text"
          value={formData.timeline}
          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
          placeholder="e.g., Q2 2024"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sqoolr-mint text-sqoolr-navy font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
      >
        Submit Interest
      </button>
    </form>
  );
};

export default InvestorForm;
