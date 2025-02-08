
import { useState } from 'react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreed) {
      toast({
        title: "Consent Required",
        description: "Please agree to receive emails before subscribing.",
        variant: "destructive",
      });
      return;
    }

    // Add newsletter subscription logic here
    toast({
      title: "Subscription Successful",
      description: "You've successfully subscribed to our newsletter!",
    });
    
    setEmail('');
    setAgreed(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sqoolr-mint"
          required
        />
      </div>
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="consent"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="h-4 w-4 text-sqoolr-mint focus:ring-sqoolr-mint"
        />
        <label htmlFor="consent" className="text-sm text-gray-600">
          I agree to receive emails about Sqoolr updates, features, and promotions
        </label>
      </div>
      <Button type="submit" className="w-full bg-sqoolr-navy text-white hover:bg-opacity-90">
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterForm;
