import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <motion.main 
        className="flex-grow"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <Footer />
      <WhatsAppButton phoneNumber="919999999999" />
    </div>
  );
};

export default Layout;