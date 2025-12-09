import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Briefcase, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import logo from '@/assets/nextgen-logo.png';
import ContactFormModal from '@/components/ContactFormModal';
import { submitCareerApplication } from '@/lib/api';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [applyData, setApplyData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Career', path: '/career' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplyData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplyData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleApplySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitCareerApplication({
        name: applyData.name,
        email: applyData.email,
        phone: applyData.phone,
        position: applyData.position,
        experience: applyData.experience,
        coverLetter: applyData.coverLetter,
        resume: applyData.resume,
      });

      toast.success('Application submitted! Our team will reach out soon.');
      setApplyData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null,
      });
      setIsApplyOpen(false);
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error(
        error instanceof Error 
          ? error.message 
          : 'Failed to submit application. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white shadow-lg ' : 'bg-white/95 backdrop-blur-sm '
      }`}
    >
      <div className="container mx-auto px-4 py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-3"
            >
              <img
                src={logo}
                alt="Nextgen Estate"
                className="h-20 w-auto max-w-[280px] md:h-28 md:max-w-[400px] lg:h-32 lg:max-w-[450px] object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 relative ${
                      location.pathname === link.path
                        ? 'text-primary'
                        : 'text-foreground hover:text-primary'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-accent/20 rounded-lg -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden lg:flex items-center gap-3"
          >
            <Button
              variant="outline"
              onClick={() => setIsApplyOpen(true)}
              className="inline-flex items-center gap-2 text-sm"
            >
              <Briefcase className="w-4 h-4" />
              Join our team
            </Button>
            <Button
              onClick={() => setIsContactModalOpen(true)}
              className="gradient-gold text-foreground px-5 py-1.5 rounded-lg font-semibold shadow-md hover:shadow-gold transition-all duration-300 text-sm"
            >
              Schedule Site Visit
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 pb-4"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-3 px-4 rounded-lg font-semibold transition-all ${
                      location.pathname === link.path
                        ? 'bg-accent/20 text-primary'
                        : 'text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={() => {
                  setIsContactModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="w-full mt-4 gradient-gold text-foreground px-6 py-3 rounded-lg font-semibold"
              >
                Schedule Site Visit
              </motion.button>
              <motion.button
                onClick={() => {
                  setIsApplyOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="w-full mt-3 border border-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/10 transition-smooth"
              >
                Join our team
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Schedule Site Visit"
      />
    </motion.nav>

    {/* Join Our Team Modal */}
    {isApplyOpen && (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        <div className="bg-card w-full max-w-2xl max-h-[95vh] rounded-2xl shadow-elegant border border-border relative p-4 sm:p-6 md:p-8 my-auto flex flex-col">
          <button
            onClick={() => setIsApplyOpen(false)}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 text-muted-foreground hover:text-foreground z-10"
            aria-label="Close apply form"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 sm:gap-3 mb-2 pr-8">
            <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">Join our team</h3>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">
            Tell us a bit about yourself and the role you're interested in.
          </p>
          <form onSubmit={handleApplySubmit} className="space-y-4 sm:space-y-6 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="apply-name" className="text-sm sm:text-base">Full Name *</Label>
                <Input
                  id="apply-name"
                  name="name"
                  value={applyData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="apply-email" className="text-sm sm:text-base">Email Address *</Label>
                <Input
                  id="apply-email"
                  name="email"
                  type="email"
                  value={applyData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="text-sm sm:text-base"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <Label htmlFor="apply-phone" className="text-sm sm:text-base">Phone Number *</Label>
                <Input
                  id="apply-phone"
                  name="phone"
                  type="tel"
                  value={applyData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 1234567890"
                  className="text-sm sm:text-base"
                />
              </div>
              <div>
                <Label htmlFor="apply-position" className="text-sm sm:text-base">Position Applied For *</Label>
                <Input
                  id="apply-position"
                  name="position"
                  value={applyData.position}
                  onChange={handleInputChange}
                  required
                  placeholder="Senior Real Estate Consultant"
                  className="text-sm sm:text-base"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="apply-experience" className="text-sm sm:text-base">Years of Experience *</Label>
              <Input
                id="apply-experience"
                name="experience"
                value={applyData.experience}
                onChange={handleInputChange}
                required
                placeholder="5 years"
                className="text-sm sm:text-base"
              />
            </div>

            <div>
              <Label htmlFor="apply-coverLetter" className="text-sm sm:text-base">Cover Letter *</Label>
              <Textarea
                id="apply-coverLetter"
                name="coverLetter"
                value={applyData.coverLetter}
                onChange={handleInputChange}
                required
                placeholder="Tell us why you'd be a great fit for this role..."
                rows={4}
                className="text-sm sm:text-base resize-none"
              />
            </div>

            <div>
              <Label htmlFor="apply-resume" className="text-sm sm:text-base">Resume/CV (PDF, DOC, DOCX) *</Label>
              <Input
                id="apply-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="cursor-pointer text-sm sm:text-base"
              />
              {applyData.resume && (
                <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                  Selected: {applyData.resume.name}
                </p>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 pt-2 sticky bottom-0 bg-card pb-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsApplyOpen(false)}
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-gold text-foreground hover:shadow-gold text-sm sm:text-base"
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Submit Application <Send className="w-4 h-4" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    )}
    </>
  );
};

export default Navbar;
