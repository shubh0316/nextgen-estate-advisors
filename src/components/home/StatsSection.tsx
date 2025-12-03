import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { TreePine, IndianRupee, Users, Calendar } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    { icon: TreePine, value: 500, suffix: '+', label: 'Forest Properties', prefix: '' },
    { icon: IndianRupee, value: 250, suffix: ' Cr+', label: 'Managed Value', prefix: '₹' },
    { icon: Users, value: 98, suffix: '%', label: 'Client Satisfaction', prefix: '' },
    { icon: Calendar, value: 15, suffix: '+', label: 'Years Expertise', prefix: '' },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
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
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ stat, index }: { stat: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <div className="bg-secondary/50 rounded-2xl p-8 text-center border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-gold">
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20"
        >
          <stat.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
        </motion.div>
        <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
          {stat.prefix}{count}{stat.suffix}
        </div>
        <div className="text-muted-foreground font-medium">{stat.label}</div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
