import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, MapPin, TrendingUp, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-estate.jpg';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Where Vision Meets Value';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

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

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    { icon: MapPin, text: 'Prime Locations', delay: 0.6 },
    { icon: TrendingUp, text: 'Smart Investments', delay: 0.7 },
    { icon: Shield, text: 'Trusted Guidance', delay: 0.8 },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="h-full w-full"
        >
          <img
            src={heroImage}
            alt="Premium Real Estate"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
              Nextgen Estate
              <span className="block text-accent text-4xl md:text-5xl lg:text-6xl mt-2">
                Infra Advisors
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-accent min-h-[60px]">
              {displayedText}
              {!isTypingComplete && (
                <span className="animate-pulse">|</span>
              )}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-primary-foreground/90 mb-12 max-w-2xl leading-relaxed"
          >
            Your trusted partner for premium residential, commercial, and investment
            properties across Noida, Yamuna Expressway, and Jim Corbett. We deliver
            transparent advice, accurate market insights, and value-driven deals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-gold text-foreground hover:shadow-gold transition-smooth font-semibold text-lg px-8"
            >
              Explore Properties <ArrowRight className="ml-2" />
            </Button>
            <Button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              size="lg"
              variant="outline"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-foreground transition-smooth font-semibold text-lg px-8"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg p-4 border border-accent/30"
              >
                <div className="p-3 bg-accent rounded-lg">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <span className="text-primary-foreground font-medium text-lg">
                  {feature.text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-accent rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
