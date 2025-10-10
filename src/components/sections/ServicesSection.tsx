"use client";

import { Accordion, AccordionItem } from "@heroui/react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      key: "custom-software",
      title: "Custom Software Development",
      subtitle: "Tailored solutions for your business",
      description: "At Glumia, we specialize in creating tailored software solutions that address your unique business challenges. From seamless integration to scalable architecture, we deliver solutions that grow with your business.",
      icon: "/assets/img/icon/service_grid_2.svg",
      features: [
        "Scalable architecture design",
        "Seamless system integration",
        "Custom business logic implementation",
        "Performance optimization"
      ]
    },
    {
      key: "data-analytics",
      title: "Data Analytics & Insights",
      subtitle: "Transform data into actionable insights",
      description: "Leverage our expertise in data analytics to turn raw data into actionable insights. We provide the tools and strategies you need to make informed, growth-oriented decisions.",
      icon: "/assets/img/icon/service_grid_3.svg",
      features: [
        "Advanced data visualization",
        "Predictive analytics",
        "Business intelligence dashboards",
        "Data-driven strategy consulting"
      ]
    },
    {
      key: "web3-blockchain",
      title: "Web3 and Blockchain Solutions",
      subtitle: "Cutting-edge decentralized technology",
      description: "Empower your business with cutting-edge Web3 technology. From decentralization to smart contracts, we deliver innovative blockchain solutions that drive transparency, security, and efficiency across industries.",
      icon: "/assets/img/icon/service_grid_2.svg",
      features: [
        "Smart contract development",
        "DeFi platform creation",
        "NFT marketplace development",
        "Blockchain integration"
      ]
    },
    {
      key: "product-design",
      title: "Product Design",
      subtitle: "User-centered design solutions",
      description: "From ideation to execution, we design and refine products—both digital and physical—to deliver exceptional user experiences and functionality.",
      icon: "/assets/img/icon/service_grid_4.svg",
      features: [
        "User experience (UX) design",
        "User interface (UI) design",
        "Prototyping and testing",
        "Design system creation"
      ]
    },
    {
      key: "digital-marketing",
      title: "Digital Marketing",
      subtitle: "Comprehensive online marketing strategies",
      description: "Enhance your digital presence with our comprehensive online marketing strategies, driving engagement, traffic, and results across various platforms.",
      icon: "/assets/img/icon/service_grid_1.svg",
      features: [
        "SEO optimization",
        "Social media marketing",
        "Content marketing",
        "Performance analytics"
      ]
    },
    {
      key: "web-mobile-dev",
      title: "Web & Mobile Development",
      subtitle: "High-performance applications",
      description: "We design and develop high-performance web and mobile applications that are user-friendly, responsive, and aligned with your business goals.",
      icon: "/assets/img/icon/service_grid_2.svg",
      features: [
        "Responsive web development",
        "Mobile app development",
        "Cross-platform solutions",
        "Performance optimization"
      ]
    },
    {
      key: "creative-design",
      title: "Creative Design & User Experience",
      subtitle: "Captivating user experiences",
      description: "We deliver user-focused designs that captivate audiences and create intuitive experiences—bridging the gap between functionality and aesthetics.",
      icon: "/assets/img/icon/service_grid_4.svg",
      features: [
        "Brand identity design",
        "Visual design systems",
        "Interactive prototypes",
        "Usability testing"
      ]
    }
  ];

  return (
    <section className="service-area7 py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">WHAT WE DO</span>
          <h2 className="section-title">Empowering Your Business Through Technology</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
            Discover our comprehensive range of technology services designed to transform your business and drive digital innovation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion
            variant="shadow"
            selectionMode="multiple"
            className="max-w-4xl mx-auto"
            itemClasses={{
              base: "py-0 w-full",
              title: "font-semibold text-lg",
              trigger: "px-6 py-4 data-[hover=true]:bg-primary-50 rounded-lg",
              indicator: "text-primary-500",
              content: "text-gray-600 px-6 pb-4",
            }}
          >
            {services.map((service) => (
              <AccordionItem
                key={service.key}
                aria-label={service.title}
                title={
                  <div className="flex items-center gap-4">
                    <div>
                      <h3 className="font-bold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-gray-500 font-normal">{service.subtitle}</p>
                    </div>
                  </div>
                }
                startContent={
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="w-6 h-6"
                    />
                  </div>
                }
              >
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}