
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const PartnerSchool = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    schoolName: "",
    email: "",
    phone: "",
    schoolTypes: {
      kindergarten: false,
      primary: false,
      juniorSecondary: false,
      seniorSecondary: false,
    },
    reasonsForApplying: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    schoolName: "",
    email: "",
    phone: "",
    schoolTypes: "",
    reasonsForApplying: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      schoolName: "",
      email: "",
      phone: "",
      schoolTypes: "",
      reasonsForApplying: "",
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = "School name is required";
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

    if (!Object.values(formData.schoolTypes).some(Boolean)) {
      newErrors.schoolTypes = "Please select at least one school type";
      isValid = false;
    }

    if (!formData.reasonsForApplying.trim()) {
      newErrors.reasonsForApplying = "Please provide reasons for applying";
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
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        schoolName: "",
        email: "",
        phone: "",
        schoolTypes: {
          kindergarten: false,
          primary: false,
          juniorSecondary: false,
          seniorSecondary: false,
        },
        reasonsForApplying: "",
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
            Become a Partner School
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-sqoolr-navy mb-4">
              Join Our Exclusive Group
            </h2>
            <p className="text-gray-600 mb-8">
              At Sqoolr, we believe in collaboration with schools to shape the future of education. 
              As a Partner School, you will get early access to the latest features, provide feedback 
              to help improve Sqoolr, and enjoy special benefits.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                Benefits of Becoming a Partner School
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-2">🚀</span>
                  <span>Exclusive Early Access: Be the first to try out new features and innovations.</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🧑‍🏫</span>
                  <span>Collaborative Feedback: Help us refine the platform by sharing your experience.</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💡</span>
                  <span>Priority Support: Receive dedicated assistance for a seamless experience.</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">💰</span>
                  <span>Discounted Pricing: Enjoy exclusive pricing offers for Partner Schools.</span>
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-sqoolr-navy mb-4">
                Requirements to Become a Partner School
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                <li>Must be a K-12 school or institution.</li>
                <li>Willing to provide feedback on new features and the platform.</li>
                <li>Available for participation in testing and pilot programs.</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                      errors.firstName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                      errors.lastName ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  School Name*
                </label>
                <input
                  type="text"
                  value={formData.schoolName}
                  onChange={(e) =>
                    setFormData({ ...formData, schoolName: e.target.value })
                  }
                  className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                    errors.schoolName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.schoolName && (
                  <p className="mt-1 text-red-500 text-sm">{errors.schoolName}</p>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of School*
                </label>
                <div className="space-y-2">
                  {[
                    { key: "kindergarten", label: "Kindergarten" },
                    { key: "primary", label: "Primary" },
                    { key: "juniorSecondary", label: "Junior Secondary" },
                    { key: "seniorSecondary", label: "Senior Secondary" },
                  ].map(({ key, label }) => (
                    <div key={key} className="flex items-center">
                      <input
                        type="checkbox"
                        id={key}
                        checked={formData.schoolTypes[key as keyof typeof formData.schoolTypes]}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            schoolTypes: {
                              ...formData.schoolTypes,
                              [key]: e.target.checked,
                            },
                          })
                        }
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
                {errors.schoolTypes && (
                  <p className="mt-1 text-red-500 text-sm">{errors.schoolTypes}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Reasons for Applying*
                </label>
                <textarea
                  value={formData.reasonsForApplying}
                  onChange={(e) =>
                    setFormData({ ...formData, reasonsForApplying: e.target.value })
                  }
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint ${
                    errors.reasonsForApplying ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.reasonsForApplying && (
                  <p className="mt-1 text-red-500 text-sm">
                    {errors.reasonsForApplying}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-sqoolr-mint text-sqoolr-navy px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-bold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PartnerSchool;
