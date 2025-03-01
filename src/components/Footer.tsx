
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col items-center"
      >
        <div className="text-center mb-6">
          <h3 className="text-gradient-neon text-lg font-bold mb-2">Razor Hack</h3>
          <p className="text-white/60 text-sm">Premium betting advantage for 1XBET</p>
        </div>
        
        <div className="text-white/40 text-xs">
          &copy; {new Date().getFullYear()} Razor Hack. All rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
