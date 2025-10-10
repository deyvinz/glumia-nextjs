"use client";

import { Card, CardBody, Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Code, BarChart3, Link2, MessageCircle } from "lucide-react";

export default function CoreFeatures() {
  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom-Built Solutions",
      description: "Tailored software designed to meet your unique business needs, ensuring scalability and efficiency",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable strategies with our advanced analytics tools",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Link2 className="w-8 h-8" />,
      title: "Seamless Integration",
      description: "Our solutions integrate effortlessly with your existing systems, maximizing productivity without disruption",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">Our Core Features</span>
          <h2 className="section-title">Innovative tools to drive digital transformation</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
            We combine cutting-edge technology with deep industry expertise to deliver
            solutions that transform businesses and drive sustainable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardBody className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary-500 to-blue-600 text-white overflow-hidden">
            <CardBody className="p-12 text-center relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/img/pattern.svg')] bg-repeat"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-center mb-8">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <span className="text-white text-lg font-semibold">Chat on WhatsApp</span>
                  </div>
                </div>

                <h4 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Let&apos;s Request a Schedule For Free Consultation
                </h4>

                <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                  Ready to transform your business? Get in touch with our experts for a free consultation
                  and discover how we can help you achieve your goals.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    as="a"
                    href="#contact-sec"
                    variant="bordered"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-primary-500 font-semibold px-8 py-4"
                  >
                    Contact Us
                  </Button>

                  <Button
                    as="a"
                    href="https://wa.me/19432589932"
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="bg-white text-primary-500 hover:bg-gray-100 font-semibold px-8 py-4"
                    startContent={
                      <img alt="Chat on WhatsApp" src="/assets/img/whatsapp-gark-green.svg" width={15} className="mr-1" />

                    }
                  >
                    Chat Now
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}