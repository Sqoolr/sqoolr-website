
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";

interface FormData {
  name: string;
  companyName: string;
  email: string;
  partnershipType: string;
}

const InvestorForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    companyName: "",
    email: "",
    partnershipType: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.companyName || !formData.email || !formData.partnershipType) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Form submitted successfully! We'll be in touch soon.");
    
    setFormData({
      name: "",
      companyName: "",
      email: "",
      partnershipType: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name*
        </label>
        <Input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
          Type of Partnership Interested In*
        </label>
        <Input
          type="text"
          value={formData.partnershipType}
          onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
          placeholder="Investment, Corporate Sponsorship, Strategic Partnership"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sqoolr-mint text-sqoolr-navy font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
      >
        Partner with Sqoolr
      </button>
    </form>
  );
};

export default InvestorForm;
