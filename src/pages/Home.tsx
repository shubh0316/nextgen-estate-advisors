import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, Mountain, TreePine, Waves, Sparkles, Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import forestImage from '@/assets/forest-property-1.jpg';
import waterfallImage from '@/assets/waterfall-property.jpg';
import mountainImage from '@/assets/mountain-land.jpg';
import { Button } from '@/components/ui/button';
import HeroBackgroundSlider from '@/components/home/HeroBackgroundSlider';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import VisionSection from '@/components/home/VisionSection';
import StatsSection from '@/components/home/StatsSection';
import VerificationProcess from '@/components/home/VerificationProcess';
import LocalExperts from '@/components/home/LocalExperts';
import CoverageMap from '@/components/home/CoverageMap';


const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Real estate experts for mountains and Delhi-NCR.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Check if we're in the hero section based on scroll position
  // Icons should be visible as long as hero section (carousel area) is visible
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Show icons when hero section is visible (any part of it is in viewport)
        setIsInHeroSection(heroRect.bottom > 0 && heroRect.top < windowHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const features = [
    { icon: Mountain, text: 'Himalayan Views', delay: 0.6 },
    { icon: TreePine, text: 'Forest Retreats', delay: 0.7 },
    { icon: Waves, text: 'Waterfall Properties', delay: 0.8 },
    { icon: Sparkles, text: 'Eco-Luxury Living', delay: 0.9 },
  ];

  const highlights = [
    {
      image: forestImage,
      title: 'Forest Villas',
      description: 'Premium eco-resorts nestled in pristine Uttarakhand forests',
    },
    {
      image: waterfallImage,
      title: 'Waterfall Estates',
      description: 'Exclusive properties near natural waterfalls and streams',
    },
    {
      image: mountainImage,
      title: 'Mountain Lands',
      description: 'Strategic land investments with panoramic Himalayan views',
    },
  ];

  const socialLinks = [
    { icon: Facebook, link: 'https://www.facebook.com/profile.php?id=61584196140737', name: 'Facebook', color: '#1877F2' },
    { icon: Instagram, link: 'https://www.instagram.com/nextgenestateadvisors/', name: 'Instagram', color: '#E4405F' },
  ];

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Parallax Background with Slider */}
        <motion.div
          style={{ y }}
          className="absolute inset-0"
        >
          <HeroBackgroundSlider />
          <motion.div 
            style={{ opacity }}
            className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/30 to-background/70 z-10"
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden z-20">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{
                y: [null, Math.random() * -500],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-accent rounded-full"
            />
          ))}
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-30 pt-32">
          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Nextgen Estate Advisors
                {/* <motion.span 
                  className="block text-accent text-4xl md:text-6xl lg:text-7xl mt-4"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Infra Advisors
                </motion.span> */}
              </motion.h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mb-8"
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-accent min-h-[80px]">
                {displayedText}
                {!isTypingComplete && (
                  <motion.span 
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-accent"
                  >
                    |
                  </motion.span>
                )}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed"
            >
             Partnering with leading Delhi-NCR developers, we offer a diverse range of properties—from high-end villas and luxury residences to affordable apartments and plots—across prime locations in Gurgaon, Noida, and Delhi.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-wrap gap-6 mb-16"
            >
              <Link to="/projects">
                <Button
                  size="lg"
                  className="gradient-gold text-foreground hover:shadow-gold transition-smooth font-semibold text-lg px-10 py-6"
                >
                  Explore Properties <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-smooth font-semibold text-lg px-10 py-6 backdrop-blur-sm bg-background/10"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>

            {/* Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-accent/30"
                >
                  <motion.div 
                    className="p-4 bg-accent rounded-xl"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-foreground" />
                  </motion.div>
                  <span className="text-white font-semibold text-center text-lg">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-accent rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, 24, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-4 bg-accent rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Social Media Icons - Fixed position, only visible in hero section */}
      <motion.div
        animate={{ 
          opacity: isInHeroSection ? 1 : 0,
          scale: isInHeroSection ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
        className="fixed right-3 sm:right-4 md:right-6 lg:right-8 top-[40%] -translate-y-1/2 sm:top-[38%] sm:-translate-y-1/2 z-[60] flex flex-col gap-2 sm:gap-3 md:gap-4"
        style={{ 
          pointerEvents: isInHeroSection ? 'auto' : 'none'
        }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, x: 0 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isInHeroSection ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
            className="p-2 sm:p-2.5 md:p-3 bg-white/10 backdrop-blur-md rounded-full border transition-all duration-300 shadow-lg hover:bg-white/20"
            style={{ 
              borderColor: `${social.color}4D`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = social.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${social.color}4D`;
            }}
            aria-label={social.name}
          >
            <social.icon 
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors duration-300" 
              style={{ color: social.color }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Highlights Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.05 }}
          viewport={{ once: true }}
          className="absolute inset-0"
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
              Nature's Finest Investments
            </h2>
            <div className="w-32 h-1.5 bg-gradient-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -20, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-elegant">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={highlight.image}
                    alt={highlight.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <motion.h3 
                      className="text-3xl font-bold text-white mb-3"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {highlight.title}
                    </motion.h3>
                    <motion.p 
                      className="text-white/90 text-lg"
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {highlight.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-20"
          >
            <Link to="/projects">
              <Button
                size="lg"
                className="gradient-gold text-foreground hover:shadow-gold transition-smooth font-semibold text-xl px-12 py-6"
              >
                View All Properties <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Nextgen */}
      <WhyChooseSection />

      {/* Vision Section */}
      <VisionSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Verification Process */}
      <VerificationProcess />

      {/* Local Experts */}
      <LocalExperts />

      {/* Coverage Map */}
      <CoverageMap />
    </div>
  );
};

export default Home;
