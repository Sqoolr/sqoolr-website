
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const InvestorPartnership = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    partnershipType: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    companyName: "",
    email: "",
    partnershipType: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      companyName: "",
      email: "",
      partnershipType: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

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

    if (!formData.partnershipType) {
      newErrors.partnershipType = "Please select a partnership type";
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
        title: "Message Sent!",
        description: "We'll get back to you soon to discuss partnership opportunities.",
      });
      setFormData({
        name: "",
        companyName: "",
        email: "",
        partnershipType: "",
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
            Partner with Sqoolr
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Empower the Future of Education Through Investment
            </h2>
            <p className="text-gray-600 mb-8">
              At Sqoolr, we are on a mission to revolutionize school management, and we're looking 
              for partners who share our vision. As an investor or corporate partner, you can play 
              a key role in scaling Sqoolr and expanding its impact on K-12 education worldwide.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                Why Partner with Sqoolr?
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">🌍</span>
                  <span>Scalable Market: Join the growing EdTech industry with a platform that's already transforming schools.</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💡</span>
                  <span>Innovative Technology: Invest in a product driven by AI and cutting-edge features for school management.</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">📈</span>
                  <span>Impactful Growth: Help us expand Sqoolr's reach and provide quality education tools to schools globally.</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🤝</span>
                  <span>Strategic Collaboration: Work closely with us on product development, marketing, and expansion strategies.</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                Partnership Opportunities
              </h3>
              <ul className="space-y-2 text-gray-600 list-disc pl-5">
                <li>Investment: Funding to accelerate product development and market expansion.</li>
                <li>Corporate Sponsorship: Co-branding opportunities and shared marketing efforts.</li>
                <li>Strategic Partnerships: Collaborations to enhance product offerings and expand market reach.</li>
              </ul>
            </div>

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
                  Company Name*
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus: