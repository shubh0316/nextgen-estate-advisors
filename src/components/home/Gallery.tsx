import { motion } from 'framer-motion';
import forestImage from '@/assets/forest-property-1.jpg';
import waterfallImage from '@/assets/waterfall-property.jpg';
import mountainImage from '@/assets/mountain-land.jpg';
import valleyImage from '@/assets/valley-property.jpg';
import trekImage from '@/assets/forest-trek.jpg';
import riversideImage from '@/assets/riverside-land.jpg';
import hillsideImage from '@/assets/hillside-land.jpg';
import heroImage from '@/assets/uttarakhand-hero.jpg';

const Gallery = () => {
  const images = [
    { src: heroImage, title: 'Himalayan Peaks', span: 'col-span-2 row-span-2' },
    { src: forestImage, title: 'Dense Forests', span: 'col-span-1 row-span-1' },
    { src: waterfallImage, title: 'Pristine Waterfalls', span: 'col-span-1 row-span-2' },
    { src: mountainImage, title: 'Mountain Lands', span: 'col-span-1 row-span-1' },
    { src: valleyImage, title: 'Valley Views', span: 'col-span-1 row-span-1' },
    { src: trekImage, title: 'Trek Trails', span: 'col-span-2 row-span-1' },
    { src: riversideImage, title: 'Riverside Properties', span: 'col-span-1 row-span-1' },
    { src: hillsideImage, title: 'Hillside Retreats', span: 'col-span-1 row-span-1' },
  ];

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
            Uttarakhand in Motion
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the breathtaking beauty of Dev Bhoomi
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-2xl ${image.span}`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Title */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h3 className="text-xl md:text-2xl font-bold text-white">{image.title}</h3>
              </motion.div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-accent/0 group-hover:border-accent transition-colors duration-500" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-accent/0 group-hover:border-accent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-gold text-foreground font-semibold rounded-xl hover:shadow-gold transition-shadow"
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
