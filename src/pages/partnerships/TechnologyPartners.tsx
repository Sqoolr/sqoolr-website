
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const TechnologyPartners = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    technology: "",
    integrationInterest: "",
  });

  const [errors, setErrors] = useState({
    companyName: "",
    email: "",
    phone: "",
    technology: "",
    integrationInterest: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      companyName: "",
      email: "",
      phone: "",
      technology: "",
      integrationInterest: "",
    };

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
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

    if (!formData.technology.trim()) {
      newErrors.technology = "Type of technology is required";
      isValid = false;
    }

    if (!formData.integrationInterest.trim()) {
      newErrors.integrationInterest = "Integration interest is required";
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
        companyName: "",
        email: "",
        phone: "",
        technology: "",
        integrationInterest: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sqoolr-navy mb-8 text-center">
            Technology Partners
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Join Us as a Technology Partner
            </h2>
            <p className="text-gray-600 mb-8">
              Enhance School Operations with Sqoolr. We're looking to expand our capabilities
              through strategic integrations with cutting-edge technology solutions.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                Benefits of Becoming a Technology Partner
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">🔗</span>
                  <span>API Integrations: Seamlessly integrate your product with Sqoolr</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">⚡</span>
                  <span>Innovative Features: Work with us to bring new technologies</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌐</span>
                  <span>Network Expansion: Reach new customers within K-12 education</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📈</span>
                  <span>Collaborative Innovation: Help build the future of education</span>
                </li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name*
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                    errors.companyName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.companyName && (
                  <p className="mt-1 text-red-500 text-sm">{errors.companyName}</p>
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
                  Type of Technology*
                </label>
                <input
                  type="text"
                  value={formData.technology}
                  onChange={(e) =>
                    setFormData({ ...formData, technology: e.target.value })
                  }
                  className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                    errors.technology ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.technology && (
                  <p className="mt-1 text-red-500 text-sm">{errors.technology}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Integration Interest*
                </label>
                <textarea
                  value={formData.integrationInterest}
                  onChange={(e) =>
                    setFormData({ ...formData, integrationInterest: e.target.value })
                  }
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                    errors.integrationInterest ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.integrationInterest && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.integrationInterest}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologyPartners;
