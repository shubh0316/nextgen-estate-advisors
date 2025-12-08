import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface ContactFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  propertyName?: string;
}

const ContactFormModal = ({ 
  open, 
  onOpenChange, 
  title = 'Contact Us',
  propertyName 
}: ContactFormModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      onOpenChange(false);
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold">{title}</DialogTitle>
          <DialogDescription>
            {propertyName 
              ? `Schedule a site visit for: ${propertyName}`
              : 'Fill out the form below and we will get back to you soon'
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="contact-name">Full Name *</Label>
              <Input
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="John Doe"
                className="h-12"
              />
            </div>
            <div>
              <Label htmlFor="contact-email">Email Address *</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="john@example.com"
                className="h-12"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="contact-phone">Phone Number *</Label>
            <Input
              id="contact-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleInputChange}
              required
              placeholder="+91 1234567890"
              className="h-12"
            />
          </div>

          <div>
            <Label htmlFor="contact-message">Message *</Label>
            <Textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              placeholder={propertyName 
                ? `I'm interested in scheduling a site visit for ${propertyName}. Please provide more details.`
                : "Tell us about your requirements or questions..."
              }
              rows={5}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full gradient-gold text-foreground hover:shadow-gold text-lg py-6"
            size="lg"
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                Send Message <Send className="ml-2" />
              </>
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;



