import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const LocalExperts = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const experts = [
    {
      name: 'Rajesh Sharma',
      role: 'Dehradun Expert',
      region: 'Dehradun & Mussoorie',
      experience: '12+ Years',
      speciality: 'Forest Lands & Hill Properties',
    },
    {
      name: 'Vikram Singh',
      role: 'Jim Corbett Specialist',
      region: 'Jim Corbett & Ramnagar',
      experience: '10+ Years',
      speciality: 'Wildlife Corridor Properties',
    },
    {
      name: 'Priya Negi',
      role: 'Nainital Region Head',
      region: 'Nainital & Bhimtal',
      experience: '8+ Years',
      speciality: 'Lakeside & Valley Properties',
    },
    {
      name: 'Amit Rawat',
      role: 'Rishikesh Consultant',
      region: 'Rishikesh & Haridwar',
      experience: '15+ Years',
      speciality: 'Riverside & Spiritual Tourism',
    },
    {
      name: 'Neha Bisht',
      role: 'Investment Advisor',
      region: 'Yamuna Expressway & Noida',
      experience: '9+ Years',
      speciality: 'Commercial & Residential Projects',
    },
  ];

  // Auto-scroll carousel: alternate direction every 2 seconds
  useEffect(() => {
    if (!api || !isAutoScrolling) return;

    let timeoutId: NodeJS.Timeout;
    let currentDirection: 'left' | 'right' = 'right';

    const scrollAndSwitch = () => {
      // Scroll in current direction
      if (currentDirection === 'right') {
        api.scrollNext();
      } else {
        api.scrollPrev();
      }

      // Switch direction for next scroll
      currentDirection = currentDirection === 'right' ? 'left' : 'right';

      // Schedule next scroll after 2 seconds
      timeoutId = setTimeout(scrollAndSwitch, 2000);
    };

    // Start the first scroll after 2 seconds
    timeoutId = setTimeout(scrollAndSwitch, 2000);

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [api, isAutoScrolling]);

  // Pause auto-scroll on user interaction
  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      // Pause auto-scroll temporarily when user interacts
      setIsAutoScrolling(false);
      setTimeout(() => {
        setIsAutoScrolling(true);
      }, 4000); // Resume after 4 seconds of no interaction
    };

    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Meet the Local Experts
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted advisors with deep regional knowledge
          </p>
        </motion.div>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {experts.map((expert, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <div className="bg-secondary/50 rounded-2xl p-6 h-full border border-border/50 hover:border-accent/50 transition-all duration-500 hover:shadow-gold">
                    {/* Avatar Placeholder */}
                    <div className="relative w-24 h-24 mx-auto mb-6">
                      <div className="w-full h-full rounded-full bg-muted grayscale group-hover:grayscale-0 transition-all duration-500 flex items-center justify-center text-3xl font-bold text-muted-foreground group-hover:text-primary group-hover:bg-accent/20">
                        {expert.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-accent flex items-center justify-center"
                      >
                        <MapPin className="w-4 h-4 text-foreground" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground text-center mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-accent text-center mb-4 font-medium">{expert.role}</p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{expert.region}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-4 h-4 text-xs font-bold text-primary">Exp</span>
                        <span>{expert.experience}</span>
                      </div>
                      <div className="pt-3 border-t border-border/50">
                        <span className="text-xs text-primary font-medium">Speciality:</span>
                        <p className="text-muted-foreground mt-1">{expert.speciality}</p>
                      </div>
                    </div>

                    <div className="flex justify-center gap-3 mt-6">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                      >
                        <Phone className="w-4 h-4 text-primary" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-accent/20 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-primary" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-background border-border hover:bg-accent hover:border-accent" />
          <CarouselNext className="hidden md:flex -right-12 bg-background border-border hover:bg-accent hover:border-accent" />
        </Carousel>
      </div>
    </section>
  );
};

export default LocalExperts;
