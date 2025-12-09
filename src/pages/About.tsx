import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Users, TrendingUp, Heart, Shield, MapPin, Sparkles, Quote, Building2 } from 'lucide-react';
import forestTrekImage from '@/assets/image2.jpeg';
import mountainImage from '@/assets/mountain-land.jpg';
import ourStoryImage from '@/assets/ourstory.jpeg';
import raviSinghImage from '@/assets/ravisinghabout.jpeg';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const values = [
    {
      icon: Heart,
      title: 'Passion for Nature',
      description: 'Deep commitment to preserving Uttarakhand\'s natural beauty while creating sustainable developments',
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Honest guidance with complete transparency in every transaction and documentation',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering premium quality properties that exceed expectations in every aspect',
    },
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'Identifying high-potential forest and mountain lands for optimal returns',
    },
  ];

  const stats = [
    { number: '1000+', label: 'Satisfied Clients', icon: Users },
    { number: '15+', label: 'Uttarakhand Properties', icon: MapPin },
    { number: '25+', label: 'Noida & Yamuna Expressway', icon: Building2 },
    { number: '98%', label: 'Satisfaction', icon: TrendingUp },
  ];

  const services = [
    {
      title: 'Residential Properties',
      description: 'Premium residential properties including villas, apartments, and luxury homes in prime locations',
    },
    {
      title: 'Commercial Properties',
      description: 'Strategic commercial real estate solutions for offices, retail spaces, and business establishments',
    },
    {
      title: 'IT/ITES Properties',
      description: 'Specialized properties for IT companies, tech parks, and modern workspace solutions',
    },
    {
      title: 'Forest Properties',
      description: 'Exclusive forest-adjacent properties offering privacy, natural beauty, and eco-friendly living',
    },
    {
      title: 'Mountain Properties',
      description: 'Stunning mountain-side properties with panoramic views, perfect for retreats and luxury living',
    },
    {
      title: 'River Facing Properties',
      description: 'Premium river-facing properties offering serene waterfront living and scenic beauty',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section ref={sectionRef} className="relative min-h-[60vh] flex items-center overflow-hidden">
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <img
            src={forestTrekImage}
            alt="About Us"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.1) contrast(1.15) saturate(1.2)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h1>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-gold mb-8"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <motion.p 
              className="text-2xl text-white/90 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your trusted partner for premium nature-focused real estate across Uttarakhand's 
              most pristine locations
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pt-16 pb-24 -mt-8 bg-background relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.h2 
                className="text-5xl md:text-6xl font-bold text-foreground mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nextgen Estate  Advisors Pvt. Ltd. specializes in premium residential, 
                commercial, and investment properties with a unique focus on Uttarakhand's 
                natural landscapes.
              </motion.p>
              <motion.p 
                className="text-xl text-muted-foreground mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We deliver transparent advice, accurate market insights, and value-driven deals 
                in forest lands, mountain resorts, and waterfall-adjacent properties across 
                Uttarakhand's most pristine locations.
              </motion.p>
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                From property shortlisting and site visits to documentation support and 
                best-price negotiation, our team ensures a smooth, secure, and profitable 
                experience for every nature-loving buyer and investor.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative hidden md:block"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={ourStoryImage}
                alt="Our Story"
                className="rounded-2xl shadow-elegant w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Message from Founder Section */}
      <section className="pt-16 pb-24 -mt-8 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-2 md:px-4 lg:px-6 relative z-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Portrait on Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-full">
                {/* Decorative frame background */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 rounded-2xl blur-sm" />
                <div className="absolute -inset-2 bg-white/50 rounded-xl" />
                
                {/* Image container with professional frame */}
                <div className="relative bg-white rounded-xl p-4 shadow-2xl border-2 border-gray-200/80">
                  {/* Double border effect */}
                  <div className="absolute inset-0 rounded-lg border border-gray-300/50 pointer-events-none" />
                  
                  <motion.img
                    src={raviSinghImage}
                    alt="Mr. Ravi Singh"
                    className="w-full h-auto rounded-lg object-cover relative z-10"
                    style={{ maxHeight: '600px' }}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Decorative corner accents */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
                </div>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-xl pointer-events-none" />
              </div>
            </motion.div>

            {/* Quote Card on Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              {/* Quote Card */}
              <div className="relative bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8 md:p-10 lg:p-12 border-2 border-gray-200/80" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
                {/* Double border effect */}
                <div className="absolute inset-0 rounded-lg border border-gray-300/50 pointer-events-none" />
                
                {/* Quote Text */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mb-8"
                >
                  <Quote className="w-12 h-12 text-primary/30 mb-4" />
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                    At <strong>Nextgen Estate Advisors</strong>, we believe that investing in nature properties is not just 
                    about acquiring land—it's about <strong>securing a piece of paradise</strong> for generations to come. 
                    Our commitment to Uttarakhand's pristine landscapes drives everything we do.
                  </p>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-4">
                    With over 8+ years of experience in the real estate industry, we've built a reputation 
                    for transparency, integrity, and excellence. Every property we recommend undergoes 
                    thorough due diligence, ensuring our clients make informed decisions that align with 
                    their vision and values.
                  </p>
                  <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
                    We understand that each client's journey is unique. Whether you're looking for a 
                    mountain retreat, a forest sanctuary, or an investment opportunity, our team is 
                    dedicated to making your dreams a reality while preserving the natural beauty 
                    that makes Uttarakhand special.
                  </p>
                </motion.div>

                {/* Signature */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="mt-8 pt-6 border-t border-gray-200"
                >
                  <p className="text-2xl md:text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'cursive, serif' }}>
                    Mr. Ravi Singh
                  </p>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    Founder & CMD, Nextgen Estate Advisors
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-muted/30 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <div className="w-32 h-1.5 bg-gradient-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-smooth"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center mb-6"
                >
                  <value.icon className="w-8 h-8 text-foreground" />
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <stat.icon className="w-10 h-10 text-foreground" />
                </motion.div>
                <motion.h3 
                  className="text-5xl md:text-6xl font-bold text-white mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-xl text-white/90 font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Our Services
            </h2>
            <div className="w-32 h-1.5 bg-gradient-gold mx-auto mb-8" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive real estate solutions for nature property investments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card rounded-2xl p-8 shadow-elegant border border-border hover:shadow-gold transition-smooth"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
