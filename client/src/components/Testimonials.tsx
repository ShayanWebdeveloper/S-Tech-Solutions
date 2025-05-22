import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    title: "CEO, TechStart Inc.",
    content: "S Tech Solution transformed our online presence completely. Our website traffic increased by 400% and conversions improved dramatically. Highly recommended!",
    initials: "JD",
    bgColor: "bg-brand-orange"
  },
  {
    name: "Sarah Miller",
    title: "Marketing Director, GrowthCo",
    content: "The team's expertise in Google Ads is exceptional. They reduced our cost per acquisition by 50% while doubling our lead volume. Outstanding results!",
    initials: "SM",
    bgColor: "bg-brand-blue"
  },
  {
    name: "Mike Johnson",
    title: "Founder, LocalBiz",
    content: "Their social media management has taken our brand to the next level. Engagement is through the roof and we're seeing real business impact from social media.",
    initials: "MJ",
    bgColor: "bg-purple-500"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-brand-navy mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with S Tech Solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-light-gray rounded-xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-brand-orange">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 ${testimonial.bgColor} rounded-full flex items-center justify-center text-white font-bold`}>
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-brand-navy">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
