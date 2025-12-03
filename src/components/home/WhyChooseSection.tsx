import { motion } from 'framer-motion';
import { Heart, Shield, Target, Award } from 'lucide-react';

const WhyChooseSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Nature',
      description: 'Deep commitment to preserving Uttarakhand\'s pristine landscapes while connecting you with your dream property.',
    },
    {
      icon: Shield,
      title: 'Trust & Transparency',
      description: 'Complete honesty in every transaction with verified documents and clear communication throughout.',
    },
    {
      icon: Target,
      title: 'Strategic Vision',
      description: 'Expert market insights to identify high-growth locations before they become mainstream.',
    },
    {
      icon: Award,
      title: 'Excellence in Every Deal',
      description: 'Uncompromising quality standards ensuring the best value for your investment.',
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Why Choose Nextgen
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Four pillars that define our commitment to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group"
            >
              <div className="bg-background rounded-2xl p-8 h-full shadow-elegant border border-border/50 hover:border-accent/50 transition-all duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl bg-gradient-gold flex items-center justify-center mb-6 mx-auto group-hover:shadow-gold"
                >
                  <value.icon className="w-10 h-10 text-foreground" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
