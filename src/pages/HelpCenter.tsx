
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TicketForm from "@/components/help/TicketForm";

const HelpCenter = () => {
  const [isTicketDialogOpen, setIsTicketDialogOpen] = useState(false);

  const handleSuccess = () => {
    setIsTicketDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-sqoolr-light py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-sqoolr-navy mb-6">Help Center</h1>
          <p className="text-lg text-gray-600 mb-8">
            Need assistance? We're here to help! Submit a support ticket and our team will get back to you shortly.
          </p>
          <Button 
            onClick={() => setIsTicketDialogOpen(true)}
            className="bg-sqoolr-mint text-sqoolr-navy hover:bg-gray-200 transform transition-all duration-300 hover:scale-105"
          >
            Submit Support Ticket
          </Button>
        </div>

        <Dialog open={isTicketDialogOpen} onOpenChange={setIsTicketDialogOpen}>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Submit Support Ticket</DialogTitle>
            </DialogHeader>
            <TicketForm onSuccess={handleSuccess} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default HelpCenter;
