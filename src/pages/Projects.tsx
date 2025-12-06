import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { TreePine, Mountain, Waves, MapPin, IndianRupee, ArrowRight, Sparkles, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';
import forestProperty from '@/assets/forest-property-1.jpg';
import waterfallProperty from '@/assets/waterfall-property.jpg';
import mountainLand from '@/assets/mountain-land.jpg';
import forestTrek from '@/assets/forest-trek.jpg';
import riversideLand from '@/assets/riverside-land.jpg';
import hillsideLand from '@/assets/hillside-land.jpg';
import valleyProperty from '@/assets/valley-property.jpg';
import heroImage from '@/assets/image6.jpg';
import { Button } from '@/components/ui/button';
import ContactFormModal from '@/components/ContactFormModal';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedPropertyName, setSelectedPropertyName] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Properties', icon: Sparkles },
    { id: 'exclusive', name: 'Exclusive Properties', icon: Crown },
    { id: 'forest', name: 'Forest Lands', icon: TreePine },
    { id: 'mountain', name: 'Mountain Estates', icon: Mountain },
    { id: 'waterfall', name: 'Waterfall Properties', icon: Waves },
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Forest Villa Estate',
      location: 'Ranikhet, Uttarakhand',
      category: 'forest',
      price: '₹3 Cr - 8 Cr',
      image: forestProperty,
      features: ['Eco-Resort', 'Pine Forest', 'Mountain View', '5-10 Acres'],
      description: 'Premium eco-luxury villas nestled in pristine pine forest with panoramic valley views.',
      isExclusive: true,
    },
    {
      id: 2,
      title: 'Waterfall Paradise Land',
      location: 'Mussoorie Region',
      category: 'waterfall',
      price: '₹2 Cr - 5 Cr',
      image: waterfallProperty,
      features: ['Waterfall View', 'Natural Stream', 'Forest Cover', '3-7 Acres'],
      description: 'Exclusive land parcels near pristine waterfalls, perfect for boutique resorts.',
      isExclusive: false,
    },
    {
      id: 3,
      title: 'Himalayan View Land',
      location: 'Almora Hills',
      category: 'mountain',
      price: '₹1.5 Cr - 4 Cr',
      image: mountainLand,
      features: ['Himalayan Views', 'Green Meadows', 'Pine Forest', '2-5 Acres'],
      description: 'Scenic mountain land with breathtaking Himalayan panoramas and lush meadows.',
      isExclusive: false,
    },
    {
      id: 4,
      title: 'Forest Trek Resort Land',
      location: 'Nainital Forest',
      category: 'forest',
      price: '₹2.5 Cr - 6 Cr',
      image: forestTrek,
      features: ['Trekking Trails', 'Dense Forest', 'Adventure Hub', '4-8 Acres'],
      description: 'Perfect for adventure resort development with natural trekking paths through forest.',
      isExclusive: false,
    },
    {
      id: 5,
      title: 'Riverside Mountain Land',
      location: 'Rishikesh Hills',
      category: 'waterfall',
      price: '₹3 Cr - 7 Cr',
      image: riversideLand,
      features: ['River Frontage', 'Mountain Peaks', 'Pristine Water', '5-10 Acres'],
      description: 'Premium riverside property with crystal clear mountain stream and forest cover.',
      isExclusive: false,
    },
    {
      id: 6,
      title: 'Hillside Forest Estate',
      location: 'Bhimtal Region',
      category: 'mountain',
      price: '₹4 Cr - 10 Cr',
      image: hillsideLand,
      features: ['Valley View', 'Winding Roads', 'Forest Cover', '8-15 Acres'],
      description: 'Expansive hillside property perfect for luxury eco-resort development.',
      isExclusive: false,
    },
    {
      id: 7,
      title: 'Valley Paradise Land',
      location: 'Chopta Valley',
      category: 'mountain',
      price: '₹5 Cr - 12 Cr',
      image: valleyProperty,
      features: ['Snow Peaks', 'Green Valley', 'Wildflowers', '10-20 Acres'],
      description: 'Pristine valley land with snow-capped peaks, ideal for adventure tourism.',
      isExclusive: true,
    },
    {
      id: 8,
      title: 'Forest Sanctuary Estate',
      location: 'Corbett Forest Area',
      category: 'forest',
      price: '₹6 Cr - 15 Cr',
      image: forestProperty,
      features: ['Wildlife Corridor', 'Dense Forest', 'Eco-Tourism', '15-30 Acres'],
      description: 'Exclusive forest estate near Corbett, perfect for wildlife-focused eco-resort.',
      isExclusive: true,
    },
  ];

  // Filter and sort projects based on category
  const filteredProjects = (() => {
    let filtered = projects;
    
    if (activeCategory === 'exclusive') {
      // Show only exclusive properties
      filtered = projects.filter(p => p.isExclusive);
    } else if (activeCategory === 'all') {
      // Show all properties, but sort exclusive first
      filtered = projects.sort((a, b) => {
        if (a.isExclusive && !b.isExclusive) return -1;
        if (!a.isExclusive && b.isExclusive) return 1;
        return 0;
      });
    } else {
      // Filter by category, but sort exclusive first within category
      filtered = projects
        .filter(p => p.category === activeCategory)
        .sort((a, b) => {
          if (a.isExclusive && !b.isExclusive) return -1;
          if (!a.isExclusive && b.isExclusive) return 1;
          return 0;
        });
    }
    
    return filtered;
  })();

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden mb-20">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Properties"
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(1.1) contrast(1.15) saturate(1.2)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/65 to-primary/45" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
              Our Projects
            </h1>
            <motion.div 
              className="w-32 h-1.5 bg-gradient-gold mb-8"
              initial={{ width: 0 }}
              animate={{ width: 128 }}
              transition={{ duration: 1, delay: 0.3 }}
            />
            <p className="text-2xl text-white/90 max-w-2xl">
              Discover premium forest lands, mountain estates, and waterfall properties
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={sectionRef} className="py-12 bg-background relative overflow-hidden">
        {/* Parallax Background */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-5"
        >
          <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg transition-all ${
                  activeCategory === category.id
                    ? 'gradient-gold text-foreground shadow-gold'
                    : 'bg-card border-2 border-border text-foreground hover:border-accent'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-gold transition-smooth group"
              >
                {/* Project Image */}
                <div className="relative h-72 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
                  
                  {/* Exclusive Badge */}
                  {project.isExclusive && (
                    <motion.div 
                      className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 px-4 py-2 rounded-full text-sm font-bold text-foreground shadow-lg flex items-center gap-1.5 z-10"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Crown className="w-4 h-4" />
                      Exclusive
                    </motion.div>
                  )}
                  
                  {/* Category Badge */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-accent px-4 py-2 rounded-full text-sm font-bold text-foreground"
                    whileHover={{ scale: 1.1 }}
                  >
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </motion.div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="font-medium">{project.location}</span>
                  </div>

                  <p className="text-muted-foreground mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-full border border-border font-medium"
                      >
                        {feature}
                      </motion.span>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between pt-5 border-t border-border">
                    <div className="flex items-center gap-2 text-accent font-bold text-xl">
                      <IndianRupee className="w-6 h-6" />
                      <span>{project.price.replace('₹', '')}</span>
                    </div>
                    <motion.div whileHover={{ x: 5 }}>
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setSelectedPropertyName(project.title);
                          setIsContactModalOpen(true);
                        }}
                        className="text-primary hover:text-accent-foreground hover:bg-accent transition-smooth"
                      >
                        View More <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-20"
          >
            <Button
              onClick={() => {
                setSelectedPropertyName('');
                setIsContactModalOpen(true);
              }}
              size="lg"
              className="gradient-gold text-foreground hover:shadow-gold transition-smooth font-semibold text-xl px-12 py-6"
            >
              Schedule Site Visit <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        open={isContactModalOpen}
        onOpenChange={setIsContactModalOpen}
        title="Schedule Site Visit"
        propertyName={selectedPropertyName}
      />
    </div>
  );
};

export default Projects;
