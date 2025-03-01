
import { motion } from "framer-motion";

const PhoneMockup = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[40%] left-[50%] w-64 h-64 bg-neon-blue/10 rounded-full filter blur-[80px] animate-pulse-neon" style={{ animationDelay: "0.5s" }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 glass-morphism p-6 rounded-2xl border border-white/10 max-w-md"
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient-neon">Winning Strategy</h2>
            <p className="text-white/80 mb-4">
              Our revolutionary hack provides unmatched advantages with our proprietary algorithm that analyzes patterns and predicts outcomes with unprecedented accuracy.
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-neon-lime rounded-full mr-2"></span>
                Advanced prediction algorithms
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-neon-lime rounded-full mr-2"></span>
                Real-time data analysis
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-neon-lime rounded-full mr-2"></span>
                Seamless integration
              </li>
              <li className="flex items-center">
                <span className="inline-block w-2 h-2 bg-neon-lime rounded-full mr-2"></span>
                Continuous updates
              </li>
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative animate-float"
          >
            <div className="w-[280px] h-[550px] bg-black rounded-[36px] p-3 border-4 border-gray-800 shadow-2xl relative z-10">
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-lg z-20"></div>
              <div className="w-full h-full rounded-[30px] overflow-hidden border border-gray-800 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900">
                  <div className="absolute top-0 left-0 w-full h-14 bg-black/50 flex items-center justify-between px-4">
                    <div className="text-neon-lime text-xs">21:37</div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 rounded-full bg-neon-lime/80 animate-pulse-neon"></div>
                      <div className="w-4 h-4 rounded-full bg-neon-lime/80 animate-pulse-neon" style={{ animationDelay: "0.3s" }}></div>
                      <div className="w-4 h-4 rounded-full bg-neon-lime/80 animate-pulse-neon" style={{ animationDelay: "0.6s" }}></div>
                    </div>
                  </div>
                  
                  <div className="mt-20 px-4">
                    <div className="h-8 w-3/4 bg-white/5 rounded mb-4"></div>
                    <div className="h-40 bg-white/5 rounded mb-4 overflow-hidden relative">
                      <div className="absolute bottom-3 right-3 bg-neon-lime/90 text-black px-2 py-1 text-xs rounded font-bold">
                        +241%
                      </div>
                    </div>
                    <div className="flex space-x-2 mb-4">
                      <div className="h-12 flex-1 bg-white/5 rounded"></div>
                      <div className="h-12 flex-1 bg-white/5 rounded"></div>
                    </div>
                    <div className="h-12 bg-neon-lime/20 border border-neon-lime/50 rounded mb-4 flex items-center justify-center">
                      <span className="text-neon-lime text-sm font-medium">PLACE BET</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="h-6 bg-white/5 rounded w-full"></div>
                      <div className="h-6 bg-white/5 rounded w-5/6"></div>
                      <div className="h-6 bg-white/5 rounded w-4/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-neon-lime/20 rounded-full filter blur-xl"></div>
            <div className="absolute -top-5 -left-5 w-20 h-20 bg-neon-purple/20 rounded-full filter blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PhoneMockup;
