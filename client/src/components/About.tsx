import { motion } from "framer-motion";
import { Rocket, Users, TrendingUp } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Rocket,
      title: "Results-Driven Approach",
      description: "Every strategy we implement is designed to deliver measurable results and drive real business growth.",
      color: "text-brand-orange",
      bgColor: "bg-brand-orange"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our team of certified professionals stays ahead of industry trends to keep your business competitive.",
      color: "text-brand-blue",
      bgColor: "bg-brand-blue"
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Insights",
      description: "We use advanced analytics and reporting to optimize campaigns and maximize your return on investment.",
      color: "text-purple-500",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-brand-navy mb-6">
              Why Choose S Tech Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're more than just a digital marketing agency. We're your strategic partner in digital transformation, 
              committed to delivering measurable results and exceptional ROI.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`${feature.bgColor} bg-opacity-10 p-3 rounded-lg`}>
                    <feature.icon className={`${feature.color} h-6 w-6`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Digital analytics workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />

            {/* Floating Cards */}
            <motion.div 
              className="absolute top-4 right-4 bg-white p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Live Projects: 23</span>
              </div>
            </motion.div>

            <motion.div 
              className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-sm text-gray-600">Client Success Rate</div>
              <div className="text-2xl font-bold text-brand-orange">98.5%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
