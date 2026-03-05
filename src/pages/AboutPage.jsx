import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Shield, Users } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const AboutPage = () => {

  return (
    <div className="pt-20 md:pt-24">
      <SEOHead
        title="About Allied Infra Solutions | Industrial Construction & Real Estate Company PAN India"
        description="Learn about Allied Infra Solutions - an NCR-based industrial construction and real estate company operating PAN India. 15+ years of experience in industrial buildings, warehouses, factory construction, property leasing, and real estate services with active projects in Delhi NCR."
        keywords="about allied infra solutions, allied infra company, industrial construction company, real estate company Delhi NCR, about allied infra"
      />
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center text-white">
            <motion.h1 
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Allied Infra Solutions
            </motion.h1>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            ></motion.div>
            <motion.p 
              className="text-base sm:text-lg px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Get to know Allied Infra Solutions - NCR-based industrial construction and real estate services company operating PAN India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Industrial Construction" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 bg-primary text-white py-4 px-8 rounded-tr-lg">
                <span className="font-heading font-bold text-xl">15+ Years</span>
                <p className="text-sm">Of Excellence</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
                Allied Infra Solutions - Leading Industrial Construction & Real Estate Company
              </h2>
              <div className="w-24 h-1 bg-primary mb-8"></div>
              <p className="text-darkgray mb-6">
                <strong>Allied Infra Solutions</strong> (also known as <strong>Allied Infra</strong>) is an NCR-based premier industrial construction and real estate company operating PAN India. With over 15 years of experience in developing, leasing, and managing industrial infrastructure, we bring innovation and reliability to every project. Currently executing 3-4 active projects in Delhi NCR while serving clients across India. Whether you're looking to construct a new industrial facility, lease industrial property, or rent warehouse space, our dedicated team at Allied Infra Solutions is here to deliver exceptional results.
              </p>
              <p className="text-darkgray mb-6">
                Our expertise spans <strong>industrial construction</strong>, <strong>warehouse development</strong>, <strong>factory construction</strong>, <strong>property leasing</strong>, <strong>land acquisition</strong>, and <strong>real estate consultancy</strong> across India. We specialize in R-zone and free zone industrial properties, providing comprehensive solutions for industrial property sale, purchase, and lease nationwide.
              </p>
              <p className="text-darkgray mb-8">
                Our mission at Allied Infra Solutions is to empower industrial growth through sustainable and efficient solutions tailored to client needs. We are committed to delivering quality industrial construction projects and exceptional real estate services that drive business success across India.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mr-4">
                    <Shield size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Quality Assurance</h4>
                    <p className="text-sm text-darkgray">Rigorous quality standards for all projects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-md text-primary mr-4">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-lg mb-2">Expert Team</h4>
                    <p className="text-sm text-darkgray">Highly skilled professionals</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 sm:py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-darkgray">
              The principles that guide our approach to every project and client relationship.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Shield size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Integrity</h3>
              <p className="text-darkgray">
                We maintain the highest ethical standards in all our business dealings.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Award size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Excellence</h3>
              <p className="text-darkgray">
                We strive for excellence in every aspect of our projects and services.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Target size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Innovation</h3>
              <p className="text-darkgray">
                We embrace new technologies and methods to improve efficiency and sustainability.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-primary/10 p-4 inline-block rounded-full mb-6 text-primary">
                <Users size={32} />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4 text-secondary">Collaboration</h3>
              <p className="text-darkgray">
                We believe in building strong partnerships with our clients and stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="relative py-20 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-secondary bg-opacity-80"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Industrial Project?
            </motion.h2>
            <motion.p 
              className="text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss how we can help bring your vision to life.
            </motion.p>
            <motion.a 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Contact Us
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;