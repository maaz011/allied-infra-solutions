import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThirtyOne from "@/assets/31.jpg"

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${ThirtyOne})`,
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white py-12 md:py-16">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Allied Infra Solutions - Your Trusted Partner for Industrial Construction & Real Estate
          </h1>
          <div className="w-24 h-1 bg-primary mb-4 md:mb-6"></div>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 opacity-95 leading-relaxed">
            NCR-based industrial construction and real estate company delivering turnkey solutions across India. We specialize in industrial buildings, warehouses, factory construction, property leasing, and land development with active projects in Delhi NCR and nationwide operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-md transition duration-300 text-base md:text-lg"
            >
              Get Free Consultation
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-md transition duration-300 border-2 border-white/30 text-base md:text-lg"
            >
              View Our Projects
            </Link>
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-4 md:gap-6 text-xs sm:text-sm opacity-90">
            <div className="flex items-center">
              <span className="font-semibold mr-2">15+</span>
              <span>Years Experience</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">500+</span>
              <span>Projects Completed</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">100%</span>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;