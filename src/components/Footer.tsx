import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/nextgen-logo.jpeg';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const locations = [
    'Noida',
    'Yamuna Expressway',
    'Jim Corbett',
    'Greater Noida',
  ];

  const socialLinks = [
    { icon: Facebook, link: '#', name: 'Facebook' },
    { icon: Instagram, link: '#', name: 'Instagram' },
    { icon: Linkedin, link: '#', name: 'LinkedIn' },
    { icon: Twitter, link: '#', name: 'Twitter' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={logo} alt="Nextgen Estate" className="h-20 mb-4 bg-white/10 p-2 rounded-lg" />
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for premium real estate across Noida, Yamuna Expressway, and Jim Corbett.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-accent/20 rounded-lg hover:bg-accent transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-accent">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-primary-foreground/80 hover:text-accent transition-smooth hover:translate-x-2 inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-accent">Our Locations</h4>
            <ul className="space-y-3">
              {locations.map((location, index) => (
                <li key={index} className="flex items-center gap-2 text-primary-foreground/80">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {location}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-xl font-bold mb-6 text-accent">Contact Us</h4>
            <div className="space-y-4">
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-smooth group"
              >
                <Phone className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-smooth" />
                <span>+91 98765 43210</span>
              </a>
              <a
                href="mailto:info@nextgenestate.com"
                className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-smooth group"
              >
                <Mail className="w-5 h-5 mt-0.5 group-hover:scale-110 transition-smooth" />
                <span>info@nextgenestate.com</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>Noida, Uttar Pradesh, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-primary-foreground/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/60 text-sm">
            <p>© 2024 Nextgen Estate Infra Advisors Pvt. Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <button className="hover:text-accent transition-smooth">Privacy Policy</button>
              <button className="hover:text-accent transition-smooth">Terms of Service</button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
