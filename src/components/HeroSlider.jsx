import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import slider1 from '@/assets/slider_1.png';
import slider2 from '@/assets/slider_2.png';
import slider3 from '@/assets/slider_3.png';
import slider4 from '@/assets/slider_4.png';

const HeroSlider = () => {
  const [sliderImages, setSliderImages] = useState([]);
  
  // Initialize autoplay plugin safely
  const autoplayPlugin = Autoplay({ delay: 2000, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplayPlugin]);

  // Set slider images
  useEffect(() => {
    setSliderImages([slider1, slider2, slider3, slider4]);
  }, []);

  if (sliderImages.length === 0) {
    return (
      <section className="relative min-h-screen flex items-center pt-20 md:pt-24 bg-gradient-to-br from-secondary to-gray-900">
        <div className="container mx-auto px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Allied Infra Solutions
          </h1>
          <p className="text-xl mb-8">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-transparent">
      {/* Background Slider - Horizontal Scrolling Carousel */}
      <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
        <div className="flex h-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            {/* Heading with Animation */}
            <motion.h1
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Building Dreams,{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                Creating Value
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.div
              className="w-24 h-1.5 bg-gradient-to-r from-primary to-cyan-400 mb-6"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />

            <motion.p
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              NCR's premier industrial construction and real estate company.
              Delivering excellence in warehouses, factories, and commercial spaces
              with 15+ years of trusted expertise across India.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-primary to-cyan-500 rounded-lg hover:from-primary hover:to-cyan-400 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary to-cyan-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/projects"
                className="group inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 ease-in-out bg-white/10 backdrop-blur-md rounded-lg border border-white/20 hover:bg-white/20 hover:border-white/30 transform hover:scale-105"
              >
                View Our Projects
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-8 text-white/90"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex items-center">
                <div className="text-3xl font-bold text-primary mr-2">10+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-primary mr-2">15+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="flex items-center">
                <div className="text-3xl font-bold text-primary mr-2">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

export default HeroSlider;