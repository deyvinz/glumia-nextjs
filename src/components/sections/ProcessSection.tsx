"use client";

import { Card, CardBody } from "@heroui/react";
import { motion } from "framer-motion";
import { Search, BarChart3, Play, CheckCircle2 } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Select a project",
      description: "Share your vision with us, and we'll work with you to define your goals, needs, and expectations.",
      step: "01"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Project analysis",
      description: "Our team conducts a deep dive to analyze your requirements, identify challenges, and craft the ideal solution tailored to your business.",
      step: "02"
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "Plan Execute",
      description: "We create a detailed plan and implement it with precision, combining innovative strategies and cutting-edge technology to ensure seamless execution.",
      step: "03"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Deliver result",
      description: "We deliver solutions that exceed expectations, driving measurable impact and setting the stage for long-term success.",
      step: "04"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle">WORK PROCESS</span>
          <h2 className="section-title">How We Work</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mt-4">
            Our proven methodology ensures every project is delivered with precision,
            innovation, and measurable results that drive your business forward.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 z-0">
            <div className="flex justify-between items-center px-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex-1 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500"></div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                  <CardBody className="p-8 text-center relative min-h-[280px] flex flex-col justify-between">

                    {/* Content Container */}
                    <div className="flex-1 flex flex-col justify-center">
                      {/* Icon */}
                      <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-500 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </CardBody>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary-500 to-blue-600 text-white">
            <CardBody className="p-8">
              <h3 className="text-2xl text-center font-bold mb-4">Ready to Start Your Project?</h3>
              <p className="text-blue-100 mb-6">
                Let&apos;s discuss your vision and turn it into a reality with our proven process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact-sec"
                  className="bg-white text-primary-500 hover:bg-gray-100 font-semibold py-3 px-6 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started Today
                </motion.a>
                <motion.a
                  href="https://wa.me/19432589932"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-500 font-semibold py-3 px-6 rounded-full transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}