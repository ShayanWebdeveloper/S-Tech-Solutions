import logoPath from "@assets/480176787_122103918212795332_6131134995016059852_n.jpg";
import { Facebook, Twitter, Linkedin, PhoneCall } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    "Web Development",
    "Digital Marketing", 
    "Social Media Management",
    "Meta Ads",
    "Google Ads",
    "YouTube Ads"
  ];

  const quickLinks = [
    { label: "Home", action: () => scrollToSection("home") },
    { label: "Services", action: () => scrollToSection("services") },
    { label: "About", action: () => scrollToSection("about") },
    { label: "Portfolio", action: () => scrollToSection("portfolio") },
    { label: "Contact", action: () => scrollToSection("contact") },
    { label: "Blog", action: () => {} }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61573859978746" },
   
    { icon: Linkedin, href: "https://www.linkedin.com/company/s-tech-solution12/" },
 
  ];

  return (
    <footer className="bg-brand-navy border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoPath} 
                alt="S Tech Solution" 
                className="h-8 w-auto rounded-lg"
              />
              <span className="ml-3 text-xl font-bold text-white">S Tech Solution</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for digital marketing excellence. We help businesses grow through 
              innovative web solutions and strategic marketing campaigns.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white bg-opacity-10 p-2 rounded-lg hover:bg-opacity-20 transition-colors duration-200"
                >
                  <social.icon className="text-white h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service}>
                  <button 
                    onClick={() => scrollToSection("services")}
                    className="hover:text-brand-orange transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={link.action}
                    className="hover:text-brand-orange transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 S Tech Solution. All rights reserved. | Designed with ❤️ for digital excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
