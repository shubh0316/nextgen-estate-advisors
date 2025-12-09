import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Import hero carousel images
import image1 from '@/assets/image1.jpeg';
import image2 from '@/assets/image2.jpeg';
import image3 from '@/assets/image3.jpg';
import image4 from '@/assets/image4.jpeg';
import image5 from '@/assets/image5.jpeg';
import image6 from '@/assets/image6.jpg';
import image7 from '@/assets/image7.jpg';
import image8 from '@/assets/image8.jpg';
import image9 from '@/assets/image9.jpg';
import image10 from '@/assets/image10.jpg';
import image11 from '@/assets/image11.jpg';
import image12 from '@/assets/image12.jpg';

interface BackgroundImage {
  src: string;
  alt: string;
  type: 'nature' | 'city' | 'night-city' | 'luxury' | 'flyover';
  location?: string;
}

const HeroBackgroundSlider = ({ 
  currentIndex = 0,
  onIndexChange 
}: { 
  currentIndex?: number;
  onIndexChange?: (index: number) => void;
}) => {
  // Start with first image
  const [activeIndex, setActiveIndex] = useState(0);

  // ===== BACKGROUND IMAGE SLIDER CONFIGURATION =====
  // Using numbered images from assets folder
  // ===================================================
  const backgroundImages: BackgroundImage[] = [
    {
      src: image1,
      alt: 'Hero Image 1',
      type: 'nature',
      location: 'Uttarakhand'
    },
    {
      src: image2,
      alt: 'Hero Image 2',
      type: 'nature',
      location: 'Uttarakhand'
    },
    {
      src: image3,
      alt: 'Hero Image 3',
      type: 'nature',
      location: 'Uttarakhand'
    },
    {
      src: image4,
      alt: 'Hero Image 4',
      type: 'nature',
      location: 'Uttarakhand'
    },
    {
      src: image5,
      alt: 'Hero Image 5',
      type: 'nature',
      location: 'Uttarakhand'
    },
    {
      src: image6,
      alt: 'Hero Image 6',
      type: 'nature',
      location: 'Uttarakhand'
    },
    {
      src: image7,
      alt: 'Hero Image 7',
      type: 'luxury',
      location: 'Uttarakhand'
    },
    {
      src: image8,
      alt: 'Hero Image 8',
      type: 'luxury',
      location: 'Uttarakhand'
    },
    {
      src: image9,
      alt: 'Hero Image 9',
      type: 'flyover',
      location: 'Uttarakhand'
    },
    {
      src: image10,
      alt: 'Hero Image 10',
      type: 'flyover',
      location: 'Uttarakhand'
    },
    {
      src: image11,
      alt: 'Hero Image 11',
      type: 'city',
      location: 'Uttarakhand'
    },
    {
      src: image12,
      alt: 'Hero Image 12',
      type: 'city',
      location: 'Uttarakhand'
    },
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % backgroundImages.length;
        if (onIndexChange) {
          onIndexChange(nextIndex);
        }
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [backgroundImages.length, onIndexChange]);

  // Sync with external currentIndex if provided
  useEffect(() => {
    if (currentIndex !== undefined && currentIndex !== activeIndex) {
      setActiveIndex(currentIndex);
    }
  }, [currentIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden z-0">
      {backgroundImages.map((image, index) => {
        const isActive = index === activeIndex;
        
        return (
          <motion.div
            key={index}
            initial={{ opacity: index === 0 ? 1 : 0 }}
            animate={{ 
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1 : 1.05
            }}
            transition={{ 
              duration: 1.5,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="absolute inset-0 w-full h-full"
            style={{
              pointerEvents: isActive ? 'auto' : 'none',
              zIndex: isActive ? 1 : 0,
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{
                filter: image.type === 'nature' 
                  ? 'brightness(1.05) contrast(1.25) saturate(1.45)' // Vibrant greenery/mountains - not dull
                  : image.type === 'night-city'
                  ? 'brightness(0.85) contrast(1.4) saturate(1.3) hue-rotate(5deg)' // Night city building views
                  : image.type === 'flyover'
                  ? 'brightness(0.95) contrast(1.35) saturate(1.4)' // City flyovers
                  : image.type === 'luxury'
                  ? 'brightness(1.0) contrast(1.3) saturate(1.35)' // Luxury villas and estates
                  : 'brightness(0.95) contrast(1.3) saturate(1.4)', // Commercial/city buildings
              }}
              loading={index === 0 ? "eager" : "lazy"}
              onError={(e) => {
                console.error(`Failed to load image: ${image.src}`, e);
              }}
            />
          </motion.div>
        );
      })}

      {/* Image indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              if (onIndexChange) {
                onIndexChange(index);
              }
            }}
            className={`transition-all duration-300 rounded-full backdrop-blur-sm ${
              index === activeIndex
                ? 'w-12 h-2 bg-accent shadow-gold'
                : 'w-2 h-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBackgroundSlider;

