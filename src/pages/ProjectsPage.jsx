import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
// import { ProjectType } from '../types/ProjectType';

const ProjectsPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filterCategories = [
    { id: 'all', label: 'All Projects' },
    { id: 'construction', label: 'Construction' },
    { id: 'leasing', label: 'Leasing' },
    { id: 'completed', label: 'Completed' },
    { id: 'ongoing', label: 'Ongoing' },
  ];

  const filterProjects = (category) => {
    setActiveFilter(category);
    
    if (category === 'all') {
      setFilteredProjects(projects);
      return;
    }
    
    let filtered;
    switch (category) {
      case 'construction':
        filtered = projects.filter(project => 
          project.title.includes('Manufacturing') || 
          project.title.includes('Construction') || 
          project.title.includes('Fabrication')
        );
        break;
      case 'leasing':
        filtered = projects.filter(project => 
          project.title.includes('Leasing') || 
          project.title.includes('Rental') || 
          project.title.includes('LogiPark')
        );
        break;
      case 'completed':
        filtered = projects.filter(project => 
          project.status.includes('completed') || 
          project.status === 'Operational'
        );
        break;
      case 'ongoing':
        filtered = projects.filter(project => 
          project.status.includes('Ongoing') || 
          project.status.includes('construction') || 
          project.status.includes('progress')
        );
        break;
      default:
        filtered = projects;
    }
    
    setFilteredProjects(filtered);
  };

  return (
    <div className="pt-20 md:pt-24">
      <SEOHead
        title="Industrial Projects Portfolio | Allied Infra Solutions | Construction & Real Estate PAN India"
        description="Explore Allied Infra Solutions' portfolio of industrial construction projects, warehouses, factories, and real estate developments across India. View our completed and ongoing industrial projects including active projects in Delhi NCR."
        keywords="allied infra projects, industrial projects Delhi NCR, construction projects, warehouse projects, factory projects, real estate projects"
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
              Allied Infra Solutions - Our Industrial Projects Portfolio
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
              Explore Allied Infra Solutions' diverse portfolio of industrial construction, warehouse development, factory construction, and real estate projects across India. Currently executing 3-4 active projects in Delhi NCR with nationwide operations.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => filterProjects(category.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-primary text-white'
                    : 'bg-lightgray text-darkgray hover:bg-primary/10'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-8">
              <p className="text-darkgray">No projects found matching the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-lightgray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-darkgray max-w-2xl mx-auto mb-8">
              Our team of experts is ready to help you bring your industrial project to life. 
              Contact us today to discuss your requirements.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-md transition duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;