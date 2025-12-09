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
    <section className="py-24 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
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
            Our Coverage
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategic presence across prime locations in India
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative bg-gradient-to-br from-card/50 to-card rounded-3xl p-8 md:p-12 shadow-2xl border border-border/50 backdrop-blur-sm"
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
                  <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
                </linearGradient>
                <radialGradient id="pinGradient" cx="50%" cy="50%">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
                </radialGradient>
              </defs>

              {/* Grid pattern background */}
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* India Outline - Enhanced shape */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
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
                strokeWidth="3"
                filter="url(#glow)"
                className="drop-shadow-2xl"
              />

              {/* State boundaries (enhanced) */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 1 }}
                d="M250 150 L280 200 L300 250 M350 200 L380 250 L400 300"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeDasharray="8,4"
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
                  {/* Pulse Effect - Multiple rings */}
                  <motion.div
                    animate={{ scale: [1, 2.5, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-12 h-12 -m-3 rounded-full bg-accent/30"
                  />
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="absolute inset-0 w-10 h-10 -m-2 rounded-full bg-primary/30"
                  />
                  
                  {/* Pin */}
                  <motion.div 
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-primary shadow-lg flex items-center justify-center border-3 border-background relative z-10"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <region.icon className="w-4 h-4 text-foreground drop-shadow-sm" />
                  </motion.div>

                  {/* Tooltip */}
                  {activeRegion === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-56 bg-gradient-to-br from-background to-card rounded-2xl p-5 shadow-2xl border-2 border-accent/30 z-20 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                          <region.icon className="w-4 h-4 text-accent" />
                        </div>
                        <h4 className="font-bold text-foreground text-lg">{region.name}</h4>
                      </div>
                      <p className="text-sm text-accent font-semibold mb-2">{region.properties}</p>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{region.highlight}</p>
                      <span className="inline-block text-xs bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1.5 rounded-full font-semibold border border-primary/30">
                        {region.type}
                      </span>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 bg-background border-r-2 border-b-2 border-accent/30" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Region Legend */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`flex flex-col items-center gap-3 p-5 rounded-2xl cursor-pointer transition-all border-2 ${
                  activeRegion === index 
                    ? 'bg-gradient-to-br from-accent/20 to-primary/20 border-accent shadow-lg' 
                    : 'bg-gradient-to-br from-background/80 to-card/50 border-border/50 hover:border-accent/50 hover:shadow-md'
                }`}
                onMouseEnter={() => setActiveRegion(index)}
                onMouseLeave={() => setActiveRegion(null)}
              >
                <motion.div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all shadow-md ${
                    activeRegion === index 
                      ? 'bg-gradient-to-br from-accent to-primary scale-110' 
                      : 'bg-gradient-to-br from-primary/20 to-accent/20'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <region.icon className={`w-7 h-7 transition-colors ${
                    activeRegion === index ? 'text-foreground' : 'text-primary'
                  }`} />
                </motion.div>
                <div className="text-center">
                  <p className="font-bold text-foreground text-sm mb-1">{region.name}</p>
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
