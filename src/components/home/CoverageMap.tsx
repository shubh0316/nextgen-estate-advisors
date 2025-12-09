import { motion } from 'framer-motion';
import coverageGif from '@/assets/nextgen-gif.gif';

const regions = [
  {
    name: 'Ramnagar',
    properties: 'Multiple Projects',
    highlight: 'Prime location near Jim Corbett National Park',
    type: 'Uttarakhand',
  },
  {
    name: 'Nainital',
    properties: 'Premium Properties',
    highlight: 'Lake district with scenic beauty',
    type: 'Uttarakhand',
  },
  {
    name: 'Jim Corbett',
    properties: 'Exclusive Projects',
    highlight: 'Wildlife corridor investments',
    type: 'Uttarakhand',
  },
  {
    name: 'Noida',
    properties: 'Commercial Projects',
    highlight: 'Sector 142 commercial developments',
    type: 'Uttar Pradesh',
  },
  {
    name: 'Yamuna Expressway',
    properties: 'Residential Projects',
    highlight: 'Sector 22D Greater Noida',
    type: 'Uttar Pradesh',
  },
];

const CoverageMap = () => {
  return (
    <section className="py-0 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden">
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
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-0">
            Our Coverage
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-1" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0">
            Strategic presence across prime locations in India
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto -mt-8 sm:-mt-12 md:-mt-32 lg:-mt-48">
          {/* GIF Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <motion.img
              src={coverageGif}
              alt="India Coverage"
              className="w-full h-full object-cover"
              initial={{ scale: 1.05 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        {/* Region Legend Cards */}
        <div className="max-w-5xl mx-auto -mt-8 sm:-mt-10 md:-mt-16 lg:-mt-20 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {regions.map((region) => (
              <div
                key={region.name}
                className="bg-card border border-border/60 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all"
              >
                <p className="text-sm font-semibold text-foreground">{region.name}</p>
                <p className="text-xs text-accent font-semibold mt-1">{region.properties}</p>
                <p className="text-[11px] text-muted-foreground mt-2 leading-snug">{region.highlight}</p>
                <span className="inline-block mt-3 text-[11px] bg-primary/10 text-primary px-2 py-1 rounded-full font-semibold">
                  {region.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
