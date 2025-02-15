
import { useState } from "react";
import { Button } from "@/components/ui/button";
import WaitlistForm from "@/components/WaitlistForm";

const EarlyAccess = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sqoolr-navy mb-4">
            Be the First to Experience Sqoolr
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            As an early adopter, you'll receive exclusive benefits, including significant discounts, 
            priority support, and a first look at all new features.
          </p>
          <Button 
            className="bg-sqoolr-navy text-white hover:bg-opacity-90"
            onClick={() => setIsWaitlistOpen(true)}
          >
            Get Early Access
          </Button>
        </div>
      </section>
      <WaitlistForm isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} type="waitlist" />
    </>
  );
};

export default EarlyAccess;
