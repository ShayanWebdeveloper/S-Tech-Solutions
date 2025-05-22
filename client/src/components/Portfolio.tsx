import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const portfolioItems = [
  {
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Fashion Retailer Platform",
    description: "Complete e-commerce solution with 300% increase in online sales and improved user experience.",
    tags: ["E-commerce", "Web Development"],
    metric: "+300% Sales",
    alt: "E-commerce project showcase"
  },
  {
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Restaurant Chain Campaign",
    description: "Multi-platform social media strategy resulting in 450% engagement increase and 200% follower growth.",
    tags: ["Social Media", "Meta Ads"],
    metric: "+450% Engagement",
    alt: "Social media campaign results"
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "SaaS Lead Generation",
    description: "Strategic PPC campaign that reduced cost-per-lead by 60% while increasing qualified leads by 250%.",
    tags: ["Google Ads", "PPC"],
    metric: "-60% Cost/Lead",
    alt: "Google Ads campaign performance"
  }
];

const tagColors: Record<string, string> = {
  "E-commerce": "bg-brand-orange text-white",
  "Web Development": "bg-brand-blue text-white",
  "Social Media": "bg-purple-500 text-white",
  "Meta Ads": "bg-green-500 text-white",
  "Google Ads": "bg-green-500 text-white",
  "PPC": "bg-brand-orange text-white"
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-navy mb-4">Our Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their digital marketing goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-sm ${tagColors[tag] || "bg-gray-500 text-white"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-brand-orange font-semibold">{item.metric}</div>
                  <button className="text-brand-blue hover:text-blue-700 font-medium flex items-center">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <button className="bg-brand-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors duration-200">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
