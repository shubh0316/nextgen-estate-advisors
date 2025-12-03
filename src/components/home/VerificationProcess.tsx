import { motion } from 'framer-motion';
import { Scale, Ruler, Car, Leaf, FileCheck } from 'lucide-react';

const VerificationProcess = () => {
  const steps = [
    {
      icon: Scale,
      title: 'Legal Verification',
      description: 'Complete title verification, ownership history, and encumbrance checks',
    },
    {
      icon: Ruler,
      title: 'Survey & Measurement',
      description: 'On-ground boundary verification with professional surveyors',
    },
    {
      icon: Car,
      title: 'Access Assessment',
      description: 'Road connectivity, approach routes, and future development plans',
    },
    {
      icon: Leaf,
      title: 'Environmental Check',
      description: 'Forest clearance status, eco-zone compliance, and green norms',
    },
    {
      icon: FileCheck,
      title: 'Documentation',
      description: 'Complete paperwork verification and registration support',
    },
  ];

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            On-Ground Verification
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our rigorous 5-step verification ensures complete peace of mind
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-background rounded-2xl p-6 shadow-elegant border border-border/50 hover:border-accent/50 transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div className="text-sm font-bold text-accent">Step {index + 1}</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              </div>

              {/* Center Node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-accent border-4 border-background shadow-lg z-10"
              />

              {/* Empty Space */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationProcess;
