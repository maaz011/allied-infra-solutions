import HeroSlider from '../components/HeroSlider';
import ServiceSection from '../components/ServiceSection';
import ProjectCard from '../components/ProjectCard';
import StatsCounter from '../components/StatsCounter';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import SEOHead from '../components/SEOHead';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HomePage = () => {
  const [featuredProjects, setFeaturedProjects] = useState(projects.slice(0, 3));

  return (
    <div className="pt-0">
      <SEOHead
        title="Allied Infra Solutions | Allied Infra | Industrial Construction & Real Estate PAN India"
        description="Allied Infra Solutions - NCR-based industrial construction and real estate company operating PAN India. Specialized in industrial buildings, warehouses, land lease, factory construction, R-zone & free zone properties. Turnkey solutions for industrial property sale, purchase, lease, and rental across India."
        keywords="allied, infra, alliedinfra, allied infra, allied infra solutions, alliedinfrasolutions, industrial construction, real estate, Delhi NCR, industrial buildings, construction, lease, warehouse, factory, property"
      />
      <HeroSlider />
      
      <ServiceSection />
      
      {/* SEO-Rich Content Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4 sm:mb-6 text-center px-4">
              Allied Infra Solutions - Your Premier Industrial Construction & Real Estate Partner
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
            <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-darkgray space-y-4 px-4">
              <p>
                <strong>Allied Infra Solutions</strong> (also known as <strong>Allied Infra</strong> or <strong>AlliedInfra</strong>) is an NCR-based industrial construction and real estate company operating PAN India. We specialize in industrial buildings, warehouse development, factory construction, property leasing, land acquisition, and comprehensive real estate services. Currently executing multiple projects in Delhi NCR while serving clients across India.
              </p>
              <p>
                Our expertise spans <strong>industrial construction</strong>, <strong>real estate development</strong>, <strong>property leasing</strong>, and <strong>industrial property management</strong>. Whether you need a warehouse for rent, industrial land for sale, factory space for lease, or turnkey construction services, Allied Infra Solutions delivers exceptional results nationwide.
              </p>
              <p>
                We understand the complexities of <strong>R-zone and free zone industrial land</strong> regulations across different states. Our team provides expert guidance on industrial property purchase, lease agreements, and development projects. From industrial sheds to large-scale manufacturing facilities, Allied Infra Solutions is your trusted partner for all industrial construction and real estate needs across India.
              </p>
              <p>
                With years of experience in <strong>industrial real estate</strong> and <strong>construction services</strong>, we've completed hundreds of successful projects PAN India. Our services include industrial building contractors, property dealers, real estate brokers, land acquisition specialists, and construction management professionals - all working together to deliver your vision.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-12 sm:py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4">
                Our Featured Industrial Projects
              </h2>
              <div className="w-24 h-1 bg-primary mb-4 sm:mb-6"></div>
              <p className="max-w-2xl text-darkgray text-sm sm:text-base">
                Explore our latest industrial construction and real estate projects across India. From warehouse development to factory construction, see how Allied Infra Solutions delivers excellence with active projects in Delhi NCR and nationwide operations.
              </p>
            </div>
            <Link 
              to="/projects" 
              className="inline-flex items-center text-primary font-medium mt-4 md:mt-0 hover:text-primary/80 transition-colors"
            >
              View All Projects
              <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      <StatsCounter />
      
      <Testimonials />
      
      <FAQ />
      
      {/* Call to Action */}
      <section className="py-12 sm:py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 px-4">
              Ready to Start Your Industrial Project with Allied Infra Solutions?
            </h2>
            <p className="text-base sm:text-lg mb-6 sm:mb-8 opacity-90 px-4">
              Whether you're looking to build, lease, or rent industrial facilities anywhere in India, our NCR-based team at Allied Infra Solutions is ready to deliver turnkey solutions tailored to your needs. Contact us for industrial construction, real estate services, property leasing, and more.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-primary font-medium py-3 px-6 sm:px-8 rounded-md transition duration-300 hover:bg-opacity-90 text-sm sm:text-base"
            >
              GET FREE CONSULTATION
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;