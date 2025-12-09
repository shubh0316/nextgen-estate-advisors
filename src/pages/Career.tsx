import { motion } from 'framer-motion';
import { useState } from 'react';
import { Briefcase, MapPin, Clock, DollarSign, ArrowRight, Send, CheckCircle2, Building2, Users, TrendingUp } from 'lucide-react';
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
import heroImage from '@/assets/job.jpg';
import { toast } from '@/hooks/use-toast';
import { submitCareerApplication } from '@/lib/api';

const Career = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openPositions = [
    {
      id: 1,
      title: 'Senior Real Estate Consultant',
      location: 'Ramnagar, Uttarakhand',
      type: 'Full-time',
      salary: '₹6 LPA - 12 LPA',
      description: 'We are looking for an experienced real estate consultant to join our team. You will be responsible for advising clients on property investments and managing exclusive listings.',
      requirements: [
        '5+ years of experience in real estate sales',
        'Strong knowledge of Uttarakhand property market',
        'Excellent communication and negotiation skills',
        'Valid real estate license preferred',
      ],
      responsibilities: [
        'Consult with clients on property investments',
        'Manage exclusive property listings',
        'Conduct property site visits',
        'Build and maintain client relationships',
      ],
    },
    {
      id: 2,
      title: 'Property Marketing Specialist',
      location: 'Noida, Uttar Pradesh',
      type: 'Full-time',
      salary: '₹4 LPA - 8 LPA',
      description: 'Join our marketing team to promote exclusive properties and luxury estates. You will create marketing strategies and manage digital campaigns.',
      requirements: [
        '3+ years of experience in marketing',
        'Experience with luxury property marketing',
        'Strong digital marketing skills',
        'Creative portfolio required',
      ],
      responsibilities: [
        'Develop marketing strategies for properties',
        'Manage social media and digital campaigns',
        'Create promotional content',
        'Coordinate with sales team',
      ],
    },
    {
      id: 3,
      title: 'Estate Management Coordinator',
      location: 'Nainital, Uttarakhand',
      type: 'Full-time',
      salary: '₹3.5 LPA - 7 LPA',
      description: 'Manage our portfolio of exclusive properties and coordinate with property owners, maintenance teams, and potential buyers.',
      requirements: [
        '2+ years of property management experience',
        'Organizational and multitasking skills',
        'Knowledge of property documentation',
        'Customer service oriented',
      ],
      responsibilities: [
        'Coordinate property maintenance',
        'Manage property documentation',
        'Schedule site visits',
        'Handle client inquiries',
      ],
    },
    {
      id: 4,
      title: 'Sales Associate - Luxury Properties',
      location: 'Yamuna Expressway, Uttar Pradesh',
      type: 'Full-time',
      salary: '₹3 LPA - 6 LPA + Commission',
      description: 'Sales role focusing on exclusive and luxury properties. Great opportunity for growth in the real estate industry.',
      requirements: [
        '1+ years of sales experience',
        'Passion for luxury real estate',
        'Strong interpersonal skills',
        'Willingness to travel',
      ],
      responsibilities: [
        'Show properties to potential clients',
        'Follow up with leads',
        'Assist in closing deals',
        'Maintain client database',
      ],
    },
    {
      id: 5,
      title: 'Senior Sales Executive',
      location: 'Ramnagar, Uttarakhand',
      type: 'Full-time',
      salary: '₹5 LPA - 10 LPA + High Commission',
      description: 'Lead our sales team in closing high-value property deals. Perfect for experienced sales professionals looking to excel in luxury real estate.',
      requirements: [
        '4+ years of sales experience in real estate',
        'Proven track record of closing deals',
        'Excellent negotiation and communication skills',
        'Ability to work with HNI clients',
        'Real estate license preferred',
      ],
      responsibilities: [
        'Lead sales initiatives for premium properties',
        'Manage and close high-value transactions',
        'Build relationships with HNI clients',
        'Mentor junior sales team members',
        'Achieve and exceed sales targets',
      ],
    },
    {
      id: 6,
      title: 'Sales Manager',
      location: 'Noida, Uttar Pradesh',
      type: 'Full-time',
      salary: '₹7 LPA - 15 LPA + Performance Bonus',
      description: 'Manage and lead our sales team to drive revenue growth. Oversee sales operations, strategies, and team development.',
      requirements: [
        '6+ years of sales experience with 2+ years in management',
        'Strong leadership and team management skills',
        'Experience in luxury property sales',
        'Data-driven decision making',
        'Excellent client relationship management',
      ],
      responsibilities: [
        'Lead and manage the sales team',
        'Develop and implement sales strategies',
        'Set and monitor sales targets',
        'Train and develop sales team',
        'Coordinate with marketing for lead generation',
      ],
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resume: file }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitCareerApplication({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        position: formData.position,
        experience: formData.experience,
        coverLetter: formData.coverLetter,
        resume: formData.resume,
      });

      toast({
        title: 'Application Submitted!',
        description: 'Thank you for your interest. We will review your application and get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        experience: '',
        coverLetter: '',
        resume: null,
      });
      setSelectedJob(null);
      setIsDialogOpen(false);
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error ? error.message : 'Failed to submit application. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (jobTitle: string) => {
    const jobIndex = openPositions.findIndex((j) => j.title === jobTitle);
    setSelectedJob(jobIndex + 1);
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setIsDialogOpen(true);
  };

  return (
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
            src={heroImage}
            alt="Careers"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.15) contrast(1.2) saturate(1.25)',
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
              Join Our Team
            </h1>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-gold mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-2xl text-white/90 max-w-2xl">
              Build your career with Nextgen Estate Advisors - where passion meets opportunity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Work With Us?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Building2,
                title: 'Growing Company',
                description: 'Be part of a rapidly expanding real estate advisory firm with exciting growth opportunities.',
              },
              {
                icon: Users,
                title: 'Great Team Culture',
                description: 'Work with passionate professionals in a supportive and collaborative environment.',
              },
              {
                icon: TrendingUp,
                title: 'Career Growth',
                description: 'Unlock your potential with training programs and clear career advancement paths.',
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-elegant transition-smooth"
              >
                <benefit.icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <div className="w-24 h-1.5 bg-gradient-gold mx-auto mb-4" />
            <p className="text-muted-foreground text-lg">
              Explore current opportunities and find your perfect role
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border hover:shadow-elegant transition-smooth"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                    </div>
                  </div>
                  <Briefcase className="w-8 h-8 text-accent flex-shrink-0" />
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{job.description}</p>

                <div className="mb-6">
                  <h4 className="font-bold text-foreground mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleApplyClick(job.title)}
                  className="w-full gradient-gold text-foreground hover:shadow-gold"
                >
                  Apply Now <ArrowRight className="ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">Apply for Position</DialogTitle>
            <DialogDescription>
              {formData.position && `Applying for: ${formData.position}`}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="modal-name">Full Name *</Label>
                <Input
                  id="modal-name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                />
              </div>
              <div>
                <Label htmlFor="modal-email">Email Address *</Label>
                <Input
                  id="modal-email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="modal-phone">Phone Number *</Label>
                <Input
                  id="modal-phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  placeholder="+91 1234567890"
                />
              </div>
              <div>
                <Label htmlFor="modal-position">Position Applied For *</Label>
                <Input
                  id="modal-position"
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  placeholder="Senior Real Estate Consultant"
                  className="cursor-text text-gray-900"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="modal-experience">Years of Experience *</Label>
              <Input
                id="modal-experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                placeholder="5 years"
              />
            </div>

            <div>
              <Label htmlFor="modal-coverLetter">Cover Letter *</Label>
              <Textarea
                id="modal-coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
                placeholder="Tell us why you'd be a great fit for this role..."
                rows={5}
              />
            </div>

            <div>
              <Label htmlFor="modal-resume">Resume/CV (PDF, DOC, DOCX) *</Label>
              <Input
                id="modal-resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                required
                className="cursor-pointer"
              />
              {formData.resume && (
                <p className="text-sm text-muted-foreground mt-2">
                  Selected: {formData.resume.name}
                </p>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full gradient-gold text-foreground hover:shadow-gold text-lg py-6"
              size="lg"
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  Submit Application <Send className="ml-2" />
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Career;

