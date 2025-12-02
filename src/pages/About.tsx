import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Award, Target, Users, TrendingUp, Heart, Shield, MapPin, Sparkles } from 'lucide-react';
import forestTrekImage from '@/assets/forest-trek.jpg';
import mountainImage from '@/assets/mountain-land.jpg';

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
    { number: '500+', label: 'Forest Properties', icon: MapPin },
    { number: '98%', label: 'Client Satisfaction', icon: Users },
    { number: '₹250Cr+', label: 'Property Value', icon: TrendingUp },
    { number: '15+', label: 'Years Experience', icon: Sparkles },
  ];

  const services = [
    {
      title: 'Forest Land Acquisition',
      description: 'Expert guidance in acquiring premium forest-adjacent properties with proper clearances and documentation',
    },
    {
      title: 'Mountain Resort Development',
      description: 'Complete support for developing eco-luxury resorts and retreats in pristine mountain locations',
    },
    {
      title: 'Investment Advisory',
      description: 'Strategic advice on high-yield nature property investments across Uttarakhand',
    },
    {
      title: 'Property Management',
      description: 'Comprehensive management services for your mountain and forest properties',
    },
    {
      title: 'Eco-Tourism Projects',
      description: 'Consultation for sustainable eco-tourism and adventure property developments',
    },
    {
      title: 'Legal & Documentation',
      description: 'Complete legal support and documentation for all property transactions',
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
            alt="Forest Trek"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
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
      <section className="py-32 bg-background relative overflow-hidden">
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
                Nextgen Estate Infra Advisors Pvt. Ltd. specializes in premium residential, 
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
              className="relative"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={mountainImage}
                alt="Mountain Property"
                className="rounded-2xl shadow-elegant w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
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
