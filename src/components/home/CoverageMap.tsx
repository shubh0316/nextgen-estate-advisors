import { motion } from 'framer-motion';
import { MapPin, Mountain, TreePine, Waves, Building2 } from 'lucide-react';
import { useState } from 'react';

const CoverageMap = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  const regions = [
    {
      name: 'Dehradun',
      icon: Building2,
      position: { top: '25%', left: '40%' },
      properties: '120+ Properties',
      highlight: 'Capital city with modern amenities',
      type: 'Urban & Suburban',
    },
    {
      name: 'Nainital Region',
      icon: Waves,
      position: { top: '55%', left: '65%' },
      properties: '85+ Properties',
      highlight: 'Lake district with scenic beauty',
      type: 'Hill Station',
    },
    {
      name: 'Mussoorie Hills',
      icon: Mountain,
      position: { top: '20%', left: '55%' },
      properties: '70+ Properties',
      highlight: 'Queen of Hills with colonial charm',
      type: 'Hill Station',
    },
    {
      name: 'Jim Corbett',
      icon: TreePine,
      position: { top: '60%', left: '45%' },
      properties: '95+ Properties',
      highlight: 'Wildlife corridor investments',
      type: 'Forest & Wildlife',
    },
    {
      name: 'Rishikesh Valley',
      icon: Waves,
      position: { top: '35%', left: '25%' },
      properties: '60+ Properties',
      highlight: 'Spiritual & adventure tourism hub',
      type: 'Riverside',
    },
    {
      name: 'Noida Office',
      icon: Building2,
      position: { top: '75%', left: '30%' },
      properties: 'HQ + Projects',
      highlight: 'Yamuna Expressway developments',
      type: 'Commercial Hub',
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
            Uttarakhand Coverage
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic presence across prime locations
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[16/10] bg-gradient-to-br from-primary/20 via-primary/10 to-accent/10 rounded-3xl border border-border/50 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                    <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>

            {/* Uttarakhand Outline (Simplified) */}
            <div className="absolute inset-8 border-2 border-dashed border-primary/30 rounded-[40%_60%_50%_50%/60%_40%_60%_40%]" />

            {/* Region Pins */}
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="absolute z-10"
                style={{ top: region.position.top, left: region.position.left }}
                onMouseEnter={() => setActiveRegion(index)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.3 }}
                  className="relative cursor-pointer"
                >
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-12 h-12 -m-3 rounded-full bg-accent/30"
                  />
                  
                  {/* Pin */}
                  <div className="w-6 h-6 rounded-full bg-accent shadow-gold flex items-center justify-center">
                    <region.icon className="w-3 h-3 text-foreground" />
                  </div>

                  {/* Tooltip */}
                  {activeRegion === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-background rounded-xl p-4 shadow-elegant border border-border/50 z-20"
                    >
                      <h4 className="font-bold text-foreground mb-1">{region.name}</h4>
                      <p className="text-xs text-accent mb-2">{region.properties}</p>
                      <p className="text-xs text-muted-foreground mb-2">{region.highlight}</p>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {region.type}
                      </span>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-background border-r border-b border-border/50" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Region Legend */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 p-3 rounded-lg cursor-pointer transition-colors ${
                  activeRegion === index ? 'bg-accent/20' : 'bg-background/50'
                }`}
                onMouseEnter={() => setActiveRegion(index)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <region.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{region.name}</p>
                  <p className="text-xs text-muted-foreground">{region.properties}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
