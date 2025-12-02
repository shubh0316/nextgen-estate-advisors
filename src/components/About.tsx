import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Award, Users, Target, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [100, 0, 0, -100]);

  const values = [
    {
      icon: Shield,
      title: 'Transparency',
      description: 'We provide honest, accurate advice and market insights you can trust.',
    },
    {
      icon: Target,
      title: 'Client-First',
      description: 'Your goals drive our strategy. We focus on your long-term success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Premium service quality in every interaction and transaction.',
    },
    {
      icon: TrendingUp,
      title: 'Value Creation',
      description: 'We negotiate the best prices and identify high-potential investments.',
    },
  ];

  const services = [
    'Property Shortlisting & Consultation',
    'Site Visits & Market Analysis',
    'Documentation Support & Legal Guidance',
    'Best-Price Negotiation',
    'Investment Advisory',
    'Post-Purchase Support',
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <motion.div style={{ opacity, y }} className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-6 py-2 bg-accent/10 text-accent rounded-full font-semibold border border-accent/20">
              About Us
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Nextgen Estate Infra Advisors
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border border-border"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              <strong className="text-foreground">Nextgen Estate Infra Advisors Pvt. Ltd.</strong> is a trusted real estate consultancy 
              specializing in premium residential, commercial, and investment properties across{' '}
              <span className="text-primary font-semibold">Noida, Yamuna Expressway, and the Jim Corbett region</span>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              We focus on delivering transparent advice, accurate market insights, and value-driven deals that help clients 
              make confident decisions. From property shortlisting, site visits, and documentation support to best-price 
              negotiation—our team ensures a smooth, secure, and profitable experience for every buyer and investor.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              With <strong className="text-foreground">strong project knowledge, local expertise, and a commitment to fair guidance</strong>, 
              Nextgen stands for its promise to help you build wealth through strategic real estate investments.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-card rounded-xl p-6 shadow-elegant border border-border hover:shadow-gold transition-smooth"
              >
                <div className="inline-flex p-4 bg-accent/10 rounded-lg mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-3 bg-card rounded-lg p-4 border border-border hover:border-accent transition-smooth"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-medium">{service}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: '500+', label: 'Properties Sold' },
            { number: '1000+', label: 'Happy Clients' },
            { number: '3', label: 'Prime Locations' },
            { number: '100%', label: 'Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
