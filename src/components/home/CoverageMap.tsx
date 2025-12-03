import { motion } from 'framer-motion';
import { MapPin, Mountain, TreePine, Waves, Building2 } from 'lucide-react';
import { useState } from 'react';

const CoverageMap = () => {
  const [activeRegion, setActiveRegion] = useState<number | null>(null);

  const regions = [
    {
      name: 'Dehradun',
      icon: Building2,
      position: { top: '32%', left: '28%' },
      properties: '120+ Properties',
      highlight: 'Capital city with modern amenities',
      type: 'Urban & Suburban',
    },
    {
      name: 'Nainital Region',
      icon: Waves,
      position: { top: '58%', left: '72%' },
      properties: '85+ Properties',
      highlight: 'Lake district with scenic beauty',
      type: 'Hill Station',
    },
    {
      name: 'Mussoorie Hills',
      icon: Mountain,
      position: { top: '25%', left: '38%' },
      properties: '70+ Properties',
      highlight: 'Queen of Hills with colonial charm',
      type: 'Hill Station',
    },
    {
      name: 'Jim Corbett',
      icon: TreePine,
      position: { top: '70%', left: '55%' },
      properties: '95+ Properties',
      highlight: 'Wildlife corridor investments',
      type: 'Forest & Wildlife',
    },
    {
      name: 'Rishikesh Valley',
      icon: Waves,
      position: { top: '42%', left: '22%' },
      properties: '60+ Properties',
      highlight: 'Spiritual & adventure tourism hub',
      type: 'Riverside',
    },
    {
      name: 'Noida Office',
      icon: Building2,
      position: { top: '88%', left: '35%' },
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

        <div className="relative max-w-4xl mx-auto">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* Uttarakhand SVG Map */}
            <svg
              viewBox="0 0 400 450"
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

              {/* Uttarakhand State Outline - Simplified realistic shape */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeInOut" }}
                d="M80 120 
                   C90 80, 130 50, 180 40
                   C220 35, 260 45, 300 70
                   C340 95, 360 130, 350 170
                   C345 200, 330 230, 320 260
                   C310 290, 320 320, 300 350
                   C280 380, 240 400, 200 390
                   C160 380, 130 360, 110 330
                   C90 300, 70 260, 60 220
                   C50 180, 60 150, 80 120Z"
                fill="url(#mapGradient)"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                filter="url(#glow)"
                className="drop-shadow-lg"
              />

              {/* District boundaries (simplified) */}
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                d="M150 100 L200 150 L180 220 M200 150 L280 180 M150 250 L200 300"
                stroke="hsl(var(--primary))"
                strokeWidth="1"
                strokeDasharray="5,5"
                fill="none"
              />

              {/* Mountain indicators */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.4 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <path d="M120 90 L130 70 L140 90" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" />
                <path d="M160 60 L175 35 L190 60" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" />
                <path d="M220 55 L235 30 L250 55" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" />
                <path d="M280 80 L295 55 L310 80" stroke="hsl(var(--muted-foreground))" strokeWidth="1.5" fill="none" />
              </motion.g>

              {/* Rivers */}
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.8 }}
                d="M90 180 Q120 200 150 190 Q180 180 200 210 Q220 240 250 250"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                opacity="0.5"
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
