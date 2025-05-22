import { motion } from "framer-motion";
import { Code, Megaphone, Share2, Facebook, Search, Youtube, Check, Monitor, TrendingUp, Earth } from "lucide-react";

const services = [
  {
    icon: Earth,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies. Responsive, fast, and optimized for conversions.",
    color: "text-brand-orange",
    bgColor: "White",
    features: ["Responsive Design", "Modern Frameworks", "Performance Optimization"]
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies that increase brand awareness and drive qualified traffic to your business.",
    color: "text-brand-blue",
    bgColor: "bg-green-500",
    features: ["Strategy Development", "Content Marketing", "Brand Management"]
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Engage your audience across all social platforms with strategic content and community management.",
    color: "text-purple-500",
    bgColor: "bg-purple-500",
    features: ["Content Creation", "Community Engagement", "Analytics & Reporting"]
  },
  {
    icon: Facebook,
    title: "Meta Ads",
    description: "Targeted Facebook and Instagram advertising campaigns that reach your ideal customers and drive conversions.",
    color: "text-blue-600",
    bgColor: "bg-blue-600",
    features: ["Audience Targeting", "Campaign Optimization", "A/B Testing"]
  },
  {
    icon: Search,
    title: "Google Ads",
    description: "Strategic Google Ads campaigns that capture high-intent traffic and maximize your return on ad spend.",
    color: "text-green-500",
    bgColor: "bg-green-500",
    features: ["Keyword Research", "PPC Optimization", "Conversion Tracking"]
  },
  {
    icon: Youtube,
    title: "YouTube Ads",
    description: "Engaging video advertising campaigns on YouTube that build brand awareness and drive action.",
    color: "text-red-500",
    bgColor: "bg-red-500",
    features: ["Video Production", "Audience Targeting", "Performance Analytics"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Our Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We specialize in delivering comprehensive digital solutions that drive growth and maximize your online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`${service.bgColor} bg-opacity-15 w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-opacity-25 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <service.icon className={`${service.color} h-10 w-10 group-hover:scale-110 transition-transform duration-300`} />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-navy mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 text-gray-600">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className={`${service.color} h-4 w-4 mr-2`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
