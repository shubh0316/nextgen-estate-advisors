import { motion } from 'framer-motion';
import { MapPin, Mountain, TreePine, Waves, Building2 } from 'lucide-react';
import { useState } from 'react';

const CoverageMap = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  const regions = [
    {
      name: 'Ramnagar',
      icon: TreePine,
      position: { top: '28%', left: '52%' },
      properties: 'Multiple Projects',
      highlight: 'Prime location near Jim Corbett National Park',
      type: 'Uttarakhand',
    },
    {
      name: 'Nainital',
      icon: Mountain,
      position: { top: '30%', left: '54%' },
      properties: 'Premium Properties',
      highlight: 'Lake district with scenic beauty',
      type: 'Uttarakhand',
    },
    {
      name: 'Jim Corbett',
      icon: TreePine,
      position: { top: '29%', left: '53%' },
      properties: 'Exclusive Projects',
      highlight: 'Wildlife corridor investments',
      type: 'Uttarakhand',
    },
    {
      name: 'Noida',
      icon: Building2,
      position: { top: '35%', left: '48%' },
      properties: 'Commercial Projects',
      highlight: 'Sector 142 commercial developments',
      type: 'Uttar Pradesh',
    },
    {
      name: 'Yamuna Expressway',
      icon: Building2,
      position: { top: '36%', left: '47%' },
      properties: 'Residential Projects',
      highlight: 'Sector 22D Greater Noida',
      type: 'Uttar Pradesh',
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
            Our Coverage
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic presence across prime locations in India
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* India SVG Map */}
            <svg
              viewBox="0 0 600 700"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Background glow */}
              <defs>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* India Outline - Simplified shape */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M150 50 
                   C200 40, 280 45, 350 60
                   C420 75, 480 100, 520 140
                   C540 170, 550 210, 540 250
                   C530 290, 520 330, 500 370
                   C480 410, 450 440, 410 460
                   C370 480, 320 490, 270 485
                   C220 480, 170 470, 130 450
                   C90 430, 60 400, 45 360
                   C30 320, 30 280, 40 240
                   C50 200, 70 160, 100 130
                   C120 100, 130 70, 150 50Z
                   M200 180 L220 200 L240 180 L260 200 L280 180
                   M300 200 L320 220 L340 200
                   M400 250 L420 270 L440 250
                   M450 300 L470 320 L490 300"
                fill="url(#mapGradient)"
                stroke="hsl(var(--primary))"
                strokeWidth="2.5"
                filter="url(#glow)"
                className="drop-shadow-lg"
              />

              {/* State boundaries (simplified) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                d="M250 150 L280 200 L300 250 M350 200 L380 250 L400 300"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="5,5"
                fill="none"
              />
            </svg>

            {/* Region Pins */}
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
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
                    animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-10 h-10 -m-2 rounded-full bg-accent/40"
                  />
                  
                  {/* Pin */}
                  <div className="w-6 h-6 rounded-full bg-accent shadow-gold flex items-center justify-center border-2 border-background">
                    <region.icon className="w-3 h-3 text-foreground" />
                  </div>

                  {/* Tooltip */}
                  {activeRegion === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-52 bg-background rounded-xl p-4 shadow-elegant border border-border z-20"
                    >
                      <h4 className="font-bold text-foreground mb-1">{region.name}</h4>
                      <p className="text-sm text-accent font-semibold mb-2">{region.properties}</p>
                      <p className="text-xs text-muted-foreground mb-2">{region.highlight}</p>
                      <span className="inline-block text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {region.type}
                      </span>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-background border-r border-b border-border" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Region Legend */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: 'hsl(var(--accent) / 0.1)' }}
                className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-all border ${
                  activeRegion === index 
                    ? 'bg-accent/20 border-accent/50' 
                    : 'bg-background/50 border-border/50 hover:border-accent/30'
                }`}
                onMouseEnter={() => setActiveRegion(index)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${
                  activeRegion === index ? 'bg-accent/30' : 'bg-primary/10'
                }`}>
                  <region.icon className={`w-5 h-5 transition-colors ${
                    activeRegion === index ? 'text-accent' : 'text-primary'
                  }`} />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{region.name}</p>
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
