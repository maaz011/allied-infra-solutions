import { Building2, Warehouse, Hammer, Truck } from 'lucide-react';
import { motion } from 'framer-motion';



const Service = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
      <div className="bg-primary/10 p-3 sm:p-4 inline-block rounded-full mb-3 sm:mb-4 text-primary flex-shrink-0">
        {icon}
      </div>
      <h3 className="font-heading text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-secondary">{title}</h3>
      <p className="text-darkgray text-sm sm:text-base flex-grow">{description}</p>
    </div>
  );
};

const ServiceSection = () => {
  const services = [
    {
      icon: <Building2 size={32} />,
      title: "Industrial Construction Services",
      description: "Allied Infra Solutions provides turnkey industrial construction services for manufacturing plants, warehouses, factories, and industrial facilities across India. Our industrial building construction focuses on durability, efficiency, and compliance with all regulations. We specialize in factory construction, warehouse development, and industrial facility construction with active projects in Delhi NCR and nationwide operations."
    },
    {
      icon: <Warehouse size={32} />,
      title: "Industrial Property Leasing & Rental",
      description: "Allied Infra Solutions offers flexible property leasing and rental options for industrial spaces, warehouses, industrial sheds, and commercial properties across India. Whether you need warehouse for rent, factory space for lease, or industrial property rental, we provide tailored solutions for your business needs with active projects in Delhi NCR and PAN India operations."
    },
    {
      icon: <Truck size={32} />,
      title: "Industrial Architectural & Design Services",
      description: "Allied Infra Solutions delivers comprehensive industrial architectural design and planning services. Our design solutions focus on efficiency, scalability, compliance with R-zone and free zone regulations, and modern industrial standards. We provide complete architectural services for industrial buildings, warehouses, and manufacturing facilities."
    },
    {
      icon: <Hammer size={32} />,
      title: "Industrial Real Estate Advisory & Consultancy",
      description: "Allied Infra Solutions provides expert industrial real estate advisory and consultancy services across India. We help you make informed, strategic property decisions for industrial land purchase, lease agreements, property development, and real estate investment. Our consultancy covers R-zone land, free zone properties, and all industrial real estate needs nationwide."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-lightgray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3 sm:mb-4 px-4">
            Allied Infra Solutions - Our Industrial Construction & Real Estate Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4 sm:mb-6"></div>
          <p className="max-w-2xl mx-auto text-darkgray text-sm sm:text-base px-4">
            Allied Infra Solutions provides comprehensive industrial construction, real estate, property leasing, and consultancy services across India. From industrial building construction to warehouse rental, factory development to land acquisition, we deliver turnkey solutions for all your industrial needs. NCR-based company with active projects in Delhi NCR and PAN India operations.
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <Service {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;