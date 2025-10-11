"use client";

import { useState } from "react";
import { Button, Input, Textarea, Select, SelectItem, Card, CardBody, CardHeader } from "@heroui/react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    number: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          number: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      description: "+19432589932",
      action: "Call us"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "info@glumia.ng",
      action: "Send email"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      description: "Acworth, GA",
      action: "View on map"
    }
  ];

  const subjectOptions = [
    { key: "web-development", label: "Web Development" },
    { key: "web3-blockchain", label: "Web3 & Blockchain Development" },
    { key: "product-design", label: "Product Design" },
    { key: "digital-marketing", label: "Digital Marketing" },
    { key: "consultation", label: "General Consultation" }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle flex items-center justify-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
              <Send className="w-4 h-4 text-white" />
            </div>
            Let&apos;s Connect!
          </span>
          <h2 className="section-title">Have Any Questions?</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We&apos;re here to help! Reach out to us for expert guidance, personalized solutions, and answers to your inquiries.
            Together, we&apos;ll drive innovation and success for your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardBody className="flex flex-row items-center gap-4 p-6">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                    <Button
                      size="sm"
                      variant="light"
                      className="text-primary-500 p-0 h-auto mt-1"
                    >
                      {info.action}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-xl">
              <CardHeader className="pb-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">Send us a message</h3>
                  <p className="text-gray-600">Fill out the form below and we&apos;ll get back to you as soon as possible.</p>
                </div>

              </CardHeader>
              <CardBody>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input
                      label="Your Name"
                      placeholder="Enter your full name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      isRequired
                      variant="bordered"
                      classNames={{
                        input: "text-gray-900",
                        inputWrapper: "border-gray-300 hover:border-primary-500 focus-within:border-primary-500"
                      }}
                    />

                    <Input
                      label="Email Address"
                      placeholder="Enter your email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      isRequired
                      variant="bordered"
                      classNames={{
                        input: "text-gray-900",
                        inputWrapper: "border-gray-300 hover:border-primary-500 focus-within:border-primary-500"
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Select
                      label="Subject"
                      placeholder="Select a subject"
                      selectedKeys={formData.subject ? [formData.subject] : []}
                      onSelectionChange={(keys) => {
                        const selectedKey = Array.from(keys)[0] as string;
                        handleSelectChange(selectedKey);
                      }}
                      isRequired
                      variant="bordered"
                      classNames={{
                        trigger: "border-gray-300 hover:border-primary-500 focus-within:border-primary-500"
                      }}
                    >
                      {subjectOptions.map((option) => (
                        <SelectItem key={option.key}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Input
                      label="Phone Number"
                      placeholder="Enter your phone number"
                      name="number"
                      type="tel"
                      value={formData.number}
                      onChange={handleInputChange}
                      isRequired
                      variant="bordered"
                      classNames={{
                        input: "text-gray-900",
                        inputWrapper: "border-gray-300 hover:border-primary-500 focus-within:border-primary-500"
                      }}
                    />
                  </div>

                  <Textarea
                    label="Your Message"
                    placeholder="Tell us about your project or inquiry..."
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    isRequired
                    variant="bordered"
                    minRows={4}
                    classNames={{
                      input: "text-gray-900",
                      inputWrapper: "border-gray-300 hover:border-primary-500 focus-within:border-primary-500"
                    }}
                  />

                  <Button
                    type="submit"
                    color="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full font-semibold bg-primary-500"
                    startContent={!isSubmitting && <Send className="w-4 h-4" />}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-5 h-5" />
                      Message sent successfully! We&apos;ll get back to you soon.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <XCircle className="w-5 h-5" />
                      Failed to send message. Please try again or contact us directly.
                    </motion.div>
                  )}
                </form>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}