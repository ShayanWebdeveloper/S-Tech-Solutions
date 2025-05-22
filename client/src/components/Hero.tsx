import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-brand-navy via-gray-900 to-brand-navy min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-white">Digital Marketing</span>
              <span className="text-brand-orange"> Excellence</span>
            </h1>
            <p className="text-xl mb-8 text-black leading-relaxed">
              Transform your digital presence with our comprehensive suite of marketing services. 
              From web development to targeted advertising campaigns, we deliver results that matter.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection("contact")}
                className="bg-brand-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-200"
              >
                Get Started Today
              </button>
              <button 
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-brand-blue text-brand-blue px-8 py-4 rounded-lg text-lg font-semibold hover:bg-brand-blue hover:text-white transition-colors duration-200"
              >
                View Our Work
              </button>
            </div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">150+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">95%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Digital marketing team collaboration" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg max-w-xs"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">ROI Increase</div>
                  <div className="text-2xl font-bold text-green-600">+245%</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
