// import { ExternalLink, Calendar } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { ProjectType } from '../types/ProjectType';

// type ProjectCardProps = {
//   project: ProjectType;
//   index: number;
// };

// const ProjectCard = ({ project, index }: ProjectCardProps) => {
//   return (
//     <motion.div 
//       className="card overflow-hidden"
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       viewport={{ once: true }}
//     >
//       <div className="relative overflow-hidden h-64">
//         <img 
//           src={project.image} 
//           alt={project.title} 
//           className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end">
//           <div className="p-6 w-full">
//             <div className="flex justify-between items-center">
//               <span className="text-white text-sm font-medium px-3 py-1 rounded-full bg-primary/80">
//                 {project.status}
//               </span>
//               <div className="flex items-center text-white text-sm">
//                 <Calendar size={16} className="mr-1" />
//                 <span>2025</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       <div className="p-6">
//         <h3 className="font-heading text-xl font-semibold mb-2 text-secondary">{project.title}</h3>
//         <div className="flex items-center mb-4 text-darkgray text-sm">
//           <span className="font-medium">Location:</span>
//           <span className="ml-2">{project.location}</span>
//         </div>
//         <p className="text-darkgray mb-4 line-clamp-3">{project.description}</p>
//         <Link 
//           to={`/projects`} 
//           className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors"
//         >
//           View Details
//           <ExternalLink size={16} className="ml-1" />
//         </Link>
//       </div>
//     </motion.div>
//   );
// };

// export default ProjectCard;
import { ExternalLink, MapPin, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectImageSlider from './ProjectImageSlider';

const ProjectCard = ({ project, index }) => {
  // Progress bar color based on completion percentage
  const getProgressColor = (percentage) => {
    if (percentage === 100) return 'bg-gradient-to-r from-success to-emerald-400';
    if (percentage >= 75) return 'bg-gradient-to-r from-primary to-cyan-400';
    if (percentage >= 50) return 'bg-gradient-to-r from-warning to-amber-400';
    return 'bg-gradient-to-r from-orange-500 to-red-400';
  };

  return (
    <motion.div
      className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.43, 0.13, 0.23, 0.96] }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
    >
      {/* Image Slider Section */}
      <div className="relative overflow-hidden">
        <ProjectImageSlider
          images={project.images || project.image}
          title={project.title}
          autoPlay={true}
        />

        {/* Status Badge */}
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 + index * 0.1 }}
            className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5"
          >
            {project.completionPercentage === 100 ? (
              <CheckCircle className="w-4 h-4 text-success" />
            ) : (
              <div className="w-3 h-3 bg-warning rounded-full animate-pulse" />
            )}
            <span className="text-xs font-semibold text-gray-800">{project.status}</span>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="font-heading text-xl lg:text-2xl font-bold text-secondary mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Location */}
        <div className="flex items-center mb-4 text-darkgray">
          <MapPin className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
          <span className="text-sm font-medium">{project.location}</span>
        </div>

        {/* Description */}
        <p className="text-darkgray text-sm leading-relaxed mb-5 line-clamp-3">
          {project.description}
        </p>

        {/* Progress Bar */}
        {project.completionPercentage !== undefined && (
          <div className="mb-5">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-darkgray">Progress</span>
              <span className="text-xs font-bold text-secondary">{project.completionPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${getProgressColor(project.completionPercentage)} rounded-full`}
                initial={{ width: 0 }}
                whileInView={{ width: `${project.completionPercentage}%` }}
                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                viewport={{ once: true }}
              />
            </div>
          </div>
        )}

        {/* CTA Button */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 group/link"
        >
          <span className="relative">
            View Details
            <span className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
          </span>
          <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform duration-300" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;