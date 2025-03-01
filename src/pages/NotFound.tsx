
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    
    // Set dark theme by default
    document.documentElement.classList.add("dark");
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0A0A0A] flex items-center justify-center px-4">
      <div className="text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold mb-4 text-gradient-neon neon-glow"
        >
          404
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/80 mb-8"
        >
          Oops! Page not found
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button 
            asChild
            className="neon-border bg-black hover:bg-black/70 text-neon-lime group transition-all duration-300"
          >
            <a href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Return to Home
            </a>
          </Button>
        </motion.div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-lime/5 rounded-full filter blur-[80px] animate-pulse-neon"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-purple/5 rounded-full filter blur-[80px] animate-pulse-neon" style={{ animationDelay: "1s" }}></div>
      </div>
    </div>
  );
};

export default NotFound;
