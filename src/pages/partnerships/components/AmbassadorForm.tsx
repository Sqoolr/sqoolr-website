
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface FormData {
  name: string;
  email: string;
  phone: string;
  socialMediaLinks: string;
  whyGreatAmbassador: string;
}

interface FormErrors {
  name: string;
  email: string;
  phone: string;
  socialMediaLinks: string;
  whyGreatAmbassador: string;
}

const AmbassadorForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    socialMediaLinks: "",
    whyGreatAmbassador: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    name: "",
    email: "",
    phone: "",
    socialMediaLinks: "",
    whyGreatAmbassador: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      email: "",
      phone: "",
      socialMediaLinks: "",
      whyGreatAmbassador: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const phoneRegex = /^\d{11}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number must be 11 digits";
      isValid = false;
    }

    if (!formData.socialMediaLinks.trim()) {
      newErrors.socialMediaLinks = "Social media links are required";
      isValid = false;
    }

    if (!formData.whyGreatAmbassador.trim()) {
      newErrors.whyGreatAmbassador = "Please tell us why you'd be a great ambassador";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formData);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        socialMediaLinks: "",
        whyGreatAmbassador: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name*
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
          className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
            errors.name ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email*
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
          className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
            errors.email ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number*
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
          className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
            errors.phone ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="11 digits required"
        />
        {errors.phone && (
          <p className="mt-1 text-red-500 text-sm">{errors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Social Media/Blog Links*
        </label>
        <input
          type="text"
          value={formData.socialMediaLinks}
          onChange={(e) =>
            setFormData({ ...formData, socialMediaLinks: e.target.value })
          }
          className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
            errors.socialMediaLinks ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="LinkedIn, Twitter, Blog URLs"
        />
        {errors.socialMediaLinks && (
          <p className="mt-1 text-red-500 text-sm">{errors.socialMediaLinks}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Why You'd Be a Great Ambassador*
        </label>
        <textarea
          value={formData.whyGreatAmbassador}
          onChange={(e) =>
            setFormData({ ...formData, whyGreatAmbassador: e.target.value })
          }
          rows={4}
          className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
            errors.whyGreatAmbassador ? "border-red-500" : "border-gray-300"
          }`}
        />
        {errors.whyGreatAmbassador && (
          <p className="mt-1 text-red-500 text-sm">{errors.whyGreatAmbassador}</p>
        )}
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

export default AmbassadorForm;
