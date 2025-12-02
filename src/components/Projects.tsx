import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Building2, Home, Landmark, MapPin, IndianRupee, ArrowRight } from 'lucide-react';
import commercialImage from '@/assets/commercial-property.jpg';
import jimCorbettImage from '@/assets/jim-corbett-villa.jpg';
import yamunaImage from '@/assets/yamuna-expressway.jpg';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Building2 },
    { id: 'residential', name: 'Residential', icon: Home },
    { id: 'commercial', name: 'Commercial', icon: Building2 },
    { id: 'investment', name: 'Investment', icon: Landmark },
  ];

  const projects = [
    {
      id: 1,
      title: 'Premium Residential Towers',
      location: 'Noida Sector 137',
      category: 'residential',
      price: '₹85 Lac - 1.5 Cr',
      image: yamunaImage,
      features: ['3/4 BHK', 'Clubhouse', 'Pool', 'Gardens'],
      description: 'Luxurious high-rise apartments with world-class amenities and stunning city views.',
    },
    {
      id: 2,
      title: 'Corporate Business Hub',
      location: 'Yamuna Expressway',
      category: 'commercial',
      price: '₹1.2 Cr - 3 Cr',
      image: commercialImage,
      features: ['Office Spaces', 'Retail', 'Parking', 'Security'],
      description: 'State-of-the-art commercial complex designed for modern businesses.',
    },
    {
      id: 3,
      title: 'Nature Luxury Villas',
      location: 'Jim Corbett',
      category: 'investment',
      price: '₹2 Cr - 5 Cr',
      image: jimCorbettImage,
      features: ['5 BHK', 'Private Garden', 'Mountain View', 'Resort Style'],
      description: 'Exclusive villas nestled in nature, perfect for weekend retreats and investments.',
    },
    {
      id: 4,
      title: 'Smart City Apartments',
      location: 'Noida Extension',
      category: 'residential',
      price: '₹45 Lac - 85 Lac',
      image: yamunaImage,
      features: ['2/3 BHK', 'Smart Home', 'Gym', 'Green Spaces'],
      description: 'Affordable luxury living with modern smart home technology.',
    },
    {
      id: 5,
      title: 'Investment Plaza',
      location: 'Yamuna Expressway',
      category: 'investment',
      price: '₹80 Lac - 2 Cr',
      image: commercialImage,
      features: ['Retail Shops', 'Food Court', 'High ROI', 'Prime Location'],
      description: 'High-yield commercial property investment opportunity in growing region.',
    },
    {
      id: 6,
      title: 'Elite Residences',
      location: 'Noida Sector 150',
      category: 'residential',
      price: '₹1.5 Cr - 2.5 Cr',
      image: jimCorbettImage,
      features: ['4/5 BHK', 'Concierge', 'Spa', 'Private Lift'],
      description: 'Ultra-premium residences for discerning buyers seeking the finest living.',
    },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-40 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="inline-block px-6 py-2 bg-accent/10 text-accent rounded-full font-semibold border border-accent/20">
              Our Projects
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Premium Properties
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our curated selection of premium properties across prime locations
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              className={`${
                activeCategory === category.id
                  ? 'gradient-gold text-foreground'
                  : 'border-border hover:border-accent'
              } transition-smooth font-semibold`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card rounded-2xl overflow-hidden shadow-elegant border border-border hover:shadow-gold transition-smooth group"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4 bg-accent px-3 py-1 rounded-full text-sm font-semibold text-foreground">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{project.location}</span>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-muted text-foreground text-sm rounded-full border border-border"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-accent font-bold text-xl">
                    <IndianRupee className="w-5 h-5" />
                    <span>{project.price.replace('₹', '')}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="text-primary hover:text-accent group-hover:translate-x-2 transition-smooth"
                  >
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
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
          className="text-center mt-16"
        >
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            className="gradient-gold text-foreground hover:shadow-gold transition-smooth font-semibold text-lg px-8"
          >
            Explore More Properties <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
