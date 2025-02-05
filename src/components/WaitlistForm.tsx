import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
  type: "waitlist" | "partner";
}

const WaitlistForm = ({ isOpen, onClose, type }: WaitlistFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    role: "",
    location: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    toast({
      title: "Success!",
      description: type === "waitlist" 
        ? "You've been added to our waitlist."
        : "Your partner school application has been received.",
    });
    onClose();
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      schoolName: "",
      role: "",
      location: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-sqoolr-navy">
            {type === "waitlist" ? "Join Our Waitlist" : "Become a Partner School"}
          </DialogTitle>
        </DialogHeader>
        {type === "partner" && (
          <p className="text-sm text-gray-600 mb-4">
            Apply to become a Partner School and be part of an exclusive group selected for testing and our pilot launch. Sqoolr reserves the right to choose partner schools. Terms and conditions apply.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name*
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name*
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
            />
          </div>
          <div>
            <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">
              Name of School*
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              required
              value={formData.schoolName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
              Role in School*
            </label>
            <select
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
            >
              <option value="">Select a role</option>
              <option value="owner">School owner/Principal/Proprietor</option>
              <option value="teacher">Teacher</option>
              <option value="other">Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              School Location*
            </label>
            <input
              type="text"
              id="location"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-sqoolr-mint focus:border-sqoolr-mint"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-sqoolr-mint text-sqoolr-navy font-bold px-6 py-3 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
          >
            {type === "waitlist" ? "Join Waitlist" : "Submit Application"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistForm;
