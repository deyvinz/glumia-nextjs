"use client";

import Image from "next/image";
import { Card, CardBody, Progress } from "@heroui/react";
import { motion } from "framer-motion";
import { CheckCircle, Users, Award, TrendingUp } from "lucide-react";

export default function AboutSection() {
  const checklist = [
    "Transform ideas into impactful digital products",
    "Enhance efficiency through scalable technology",
    "Deliver data-driven insights for better decision-making"
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "50+", label: "Projects Completed" },
    { icon: <Award className="w-6 h-6" />, value: "9+", label: "Years Experience" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "100%", label: "Client Satisfaction" }
  ];

  const skills = [
    { name: "Software Development", percentage: 95 },
    { name: "Data Analytics", percentage: 90 },
    { name: "Web3 & Blockchain", percentage: 85 },
    { name: "Digital Marketing", percentage: 88 }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="section-subtitle">About Us</span>
              <h2 className="section-title">Empowering businesses with innovative digital solutions</h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              At Glumia Solutions, we are dedicated to creating cutting-edge technology tailored to meet the unique needs of
              businesses and organizations. Our solutions streamline operations, foster growth, and drive digital transformation.
            </p>

            <div className="space-y-4">
              {checklist.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Skills Progress */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Expertise</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-primary-500 font-semibold">{skill.percentage}%</span>
                  </div>
                  <Progress
                    value={skill.percentage}
                    color="primary"
                    className="w-full"
                    classNames={{
                      track: "bg-gray-200",
                      indicator: "bg-primary-500"
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <Image
                src="/assets/img/normal/about_glumia.png"
                width={510}
                height={400}
                alt="About Glumia"
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Stats Card */}
              <motion.div
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                //  transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-primary-500 mb-2">9+</h2>
                  <p className="text-gray-600 text-sm font-medium">
                    Years of experience in delivering innovative digital solutions
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                    <CardBody className="p-4">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary-500">
                        {stat.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                      <p className="text-gray-600 text-sm">{stat.label}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}