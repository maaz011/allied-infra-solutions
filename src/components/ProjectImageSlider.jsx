import { useState, useEffect, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const ProjectImageSlider = ({ images, title, autoPlay = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Convert single image to array for consistency
  const imageArray = Array.isArray(images) ? images : [images];
  
  // Create array with 3 duplicates of each image
  const sliderImages = [];
  imageArray.forEach(img => {
    for (let i = 0; i < 3; i++) {
      sliderImages.push(img);
    }
  });

  // Create autoplay plugin instance once
  const autoplayPlugin = useMemo(() => 
    Autoplay({ 
      delay: 2000, 
      stopOnInteraction: false, 
      stopOnMouseEnter: false 
    }), 
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1
    },
    autoPlay ? [autoplayPlugin] : []
  );

  // Control autoplay based on hover state
  useEffect(() => {
    if (!autoPlay || !autoplayPlugin) return;

    if (isHovered) {
      autoplayPlugin.play();
    } else {
      autoplayPlugin.stop();
    }
  }, [isHovered, autoPlay, autoplayPlugin]);

  // Stop autoplay on mount initially
  useEffect(() => {
    if (autoplayPlugin && autoPlay) {
      autoplayPlugin.stop();
    }
  }, [autoplayPlugin, autoPlay]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  if (sliderImages.length === 0) return null;

  return (
    <div 
      className="relative w-full h-64 overflow-hidden rounded-lg"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {sliderImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 h-full">
              <img
                src={image}
                alt={`${title} - Image ${(index % imageArray.length) + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient Overlay for better visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default ProjectImageSlider;