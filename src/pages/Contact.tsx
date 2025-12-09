import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe, Navigation, Mountain, Building2, TreePine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import forestImage from '@/assets/image4.jpeg';
import { submitContactForm } from '@/lib/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      });

      toast.success('Thank you! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };


  const directionsUrl = 'https://maps.app.goo.gl/3HJZMFT91Hw2Bv5HA?g_st=aw';

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 93109 23418'],
      phoneLink: 'tel:+919310923418',
      color: 'text-accent',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['nextgenestateadvisors25@gmail.com'],
      emailLink: 'mailto:nextgenestateadvisors25@gmail.com',
      color: 'text-primary',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Ramnagar · Nainital · Noida · Yamuna Expressway'],
      link: directionsUrl,
      linkLabel: 'Get Directions',
      color: 'text-accent',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
      color: 'text-primary',
    },
  ];

  const locations: { name: string; area?: string; icon: any }[] = [
    { name: 'Ramnagar', icon: TreePine },
    { name: 'Nainital', icon: Mountain },
    { name: 'Noida', icon: Building2 },
    { name: 'Yamuna Expressway', icon: Building2 },
  ];

  return (
    <>
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden mb-20">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src={forestImage}
            alt="Contact"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.1) contrast(1.15) saturate(1.2)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/45" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-gold mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-2xl text-white/90 max-w-2xl">
              Let's discuss your dream property in Uttarakhand
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-card rounded-2xl p-10 shadow-elegant border border-border"
            >
              <h2 className="text-4xl font-bold text-foreground mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-foreground font-semibold mb-2">Full Name</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    className="h-14 text-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <label className="block text-foreground font-semibold mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="h-14 text-lg overflow-hidden text-ellipsis"
                    style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label className="block text-foreground font-semibold mb-2">Phone</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    required
                    className="h-14 text-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label className="block text-foreground font-semibold mb-2">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your requirements..."
                    required
                    rows={6}
                    className="text-lg"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-gold text-foreground hover:shadow-gold transition-smooth font-semibold text-lg h-14"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Message <Send className="ml-2" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-smooth"
                >
                  <div className="flex items-start gap-6">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0`}
                    >
                      <info.icon className={`w-8 h-8 ${info.color}`} />
                    </motion.div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <h3 className="text-2xl font-bold text-foreground mb-3">{info.title}</h3>
                      {info.details.map((detail, idx) => {
                        if (info.emailLink && idx === 0) {
                          return (
                            <a
                              key={idx}
                              href={info.emailLink}
                              className="text-muted-foreground text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed break-all hover:text-primary transition-colors block w-full"
                            >
                              {detail}
                            </a>
                          );
                        } else if (info.phoneLink && idx === 0) {
                          return (
                            <a
                              key={idx}
                              href={info.phoneLink}
                              className="text-muted-foreground text-lg leading-relaxed break-words overflow-wrap-anywhere hover:text-accent transition-colors inline-block"
                            >
                              {detail}
                            </a>
                          );
                        } else {
                          return (
                            <p key={idx} className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed break-words overflow-wrap-anywhere">
                              {detail}
                            </p>
                          );
                        }
                      })}
                      {info.link && (
                        <div className="flex flex-wrap gap-3 mt-4">
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-smooth shadow-sm"
                          >
                            <Navigation className="w-4 h-4" />
                            {info.linkLabel ?? 'Get Directions'}
                          </a>
                          <a
                            href={info.link}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground font-semibold hover:border-accent hover:text-accent transition-smooth"
                          >
                            <MapPin className="w-4 h-4" />
                            View on Google Maps
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Locations
            </h2>
            <div className="w-32 h-1.5 bg-gradient-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-card rounded-2xl p-6 shadow-elegant border border-border hover:shadow-gold transition-smooth text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <location.icon className="w-8 h-8 text-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-2">{location.name}</h3>
                {location.area && <p className="text-muted-foreground">{location.area}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>

    </>
  );
};

export default Contact;
