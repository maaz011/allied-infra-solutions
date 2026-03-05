import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectImageSlider = ({ images, title, autoPlay = true, interval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Convert single image to array for consistency
  const imageArray = Array.isArray(images) ? images : [images];

  useEffect(() => {
    if (autoPlay && !isHovered && imageArray.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imageArray.length);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [autoPlay, isHovered, imageArray.length, interval]);

  const goToPrevious = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageArray.length) % imageArray.length);
  };

  const goToNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageArray.length);
  };

  const goToSlide = (index, e) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  if (imageArray.length === 0) return null;

  return (
    <div
      className="relative w-full h-64 overflow-hidden rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Display */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={imageArray[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Gradient Overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Navigation Arrows - Only show if multiple images */}
      {imageArray.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4 text-gray-800" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4 text-gray-800" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {imageArray.map((_, index) => (
              <button
                key={index}
                onClick={(e) => goToSlide(index, e)}
                className={`transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-6 h-1.5 bg-white rounded-full'
                    : 'w-1.5 h-1.5 bg-white/60 rounded-full hover:bg-white/80'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Hover Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

export default ProjectImageSlider;