
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  const redirectToTelegram = () => {
    window.open("https://t.me/razor_1xx", "_blank");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-[80vh] px-4 py-12 relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[20%] left-[15%] w-64 h-64 bg-neon-lime/10 rounded-full filter blur-[80px] animate-pulse-neon"></div>
        <div className="absolute bottom-[30%] right-[15%] w-64 h-64 bg-neon-purple/10 rounded-full filter blur-[80px] animate-pulse-neon" style={{ animationDelay: "1s" }}></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="px-3 py-1 text-xs font-medium rounded-full glass-morphism text-neon-lime inline-block mb-4">
            ORIGINAL VERSION
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4 tracking-tight neon-glow"
        >
          <span className="text-white">1XBET</span> <span className="text-gradient-neon">HACK</span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl md:text-6xl font-bold mb-6 text-white"
        >
          Razor Hack <span className="text-sm align-text-top">2025</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 text-white/80"
        >
          100% Win | 0% Lose
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button 
            onClick={redirectToTelegram} 
            size="lg" 
            className="neon-border bg-black hover:bg-black/70 text-neon-lime text-lg group transition-all duration-300 animate-pulse-neon"
          >
            Buy Now <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
