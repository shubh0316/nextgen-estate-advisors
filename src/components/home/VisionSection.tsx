import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, TreePine, Mountain } from 'lucide-react';
import forestImage from '@/assets/forest-property-1.jpg';

const VisionSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={forestImage}
          alt="Uttarakhand Forest"
          className="w-full h-full object-cover brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="container mx-auto px-4 relative z-10 py-24"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex justify-center gap-6 mb-8">
              {[Leaf, TreePine, Mountain].map((Icon, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  whileHover={{ rotate: 360 }}
                  className="w-16 h-16 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center"
                >
                  <Icon className="w-8 h-8 text-accent" />
                </motion.div>
              ))}
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Our Eco Commitment
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed mb-12"
            >
              Preserving Uttarakhand's natural beauty while enabling sustainable development.
              Every property we recommend meets strict environmental guidelines, ensuring 
              your investment grows alongside nature, not against it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {['Sustainable Development', 'Forest Conservation', 'Eco-Tourism Focus'].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-white font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default VisionSection;
