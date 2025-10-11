"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Send, CheckCircle, XCircle } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setEmail(''); // Clear form on success
      } else {
        setSubmitStatus('error');
        setErrorMessage(data.error || 'Failed to subscribe to newsletter.');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to subscribe to newsletter. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <footer className="footer-wrapper footer-layout2 bg-cover bg-center bg-no-repeat bg-gray-900">
      <div className="widget-area py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="widget footer-widget">
                <div className="th-widget-about">
                  <div className="about-logo mb-6">
                    <Link href="/">
                      <Image src="/assets/img/logo.svg" width={70} height={70} alt="Glumia" />
                    </Link>
                  </div>
                  <p className="about-text text-gray-300 mb-6 leading-relaxed">
                    Redefining ROI with innovative, low-risk strategies that drive high-impact results.
                    At Glumia, we empower businesses through cost-effective, user-centric solutions
                    built on collaboration and excellence.
                  </p>
                  <div className="th-social flex space-x-4">
                    <a
                      href="https://wa.me/19432589932"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center text-white hover:bg-whatsapp-light transition-colors"
                      aria-label="Chat on WhatsApp"
                    >
                      <i className="fa-brands bi bi-whatsapp"></i>
                    </a>
                    <a
                      href="https://www.x.com/glumiang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                      aria-label="Follow us on X (Twitter)"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/glumiaofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <i className="fa-brands bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1 lg:col-span-1">
              <div className="widget footer-widget">
                <h3 className="widget_title text-white text-xl font-bold mb-6">Contact Us</h3>
                <div className="th-widget-contact space-y-4">
                  <div className="contact-feature flex items-start">
                    <div className="icon-btn w-10 h-10 bg-whatsapp-green rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fa-brands bi bi-whatsapp"></i>
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label text-gray-300 text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/19432589932"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-feature_link text-white hover:text-primary-300 transition-colors"
                      >
                        Let&apos;s chat
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature flex items-start">
                    <div className="icon-btn w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fa-solid bi bi-envelope"></i>
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label text-gray-300 text-sm">Email address</p>
                      <a
                        href="mailto:info@glumia.com"
                        className="contact-feature_link text-white hover:text-primary-300 transition-colors"
                      >
                        info@glumia.com
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature flex items-start">
                    <div className="icon-btn w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                      <i className="fa-solid bi bi-geo-alt"></i>
                    </div>
                    <div className="media-body">
                      <p className="contact-feature_label text-gray-300 text-sm">office location</p>
                      <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-feature_link text-white hover:text-primary-300 transition-colors"
                      >
                        Acworth, GA
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="widget footer-widget">
                <h3 className="widget_title text-white text-xl font-bold mb-6">Get in touch!</h3>
                <div className="newsletter-widget">
                  <p className="footer-text text-gray-300 mb-6 leading-relaxed">
                    Subscribe to our upcoming latest article and news resources.
                    Sign up today for hints, tips and the latest product news.
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
                    <div className="form-group flex">
                      <input
                        className="form-control flex-1 px-4 py-3 rounded-l-lg border-1 border-primary-500 focus:ring-2 focus:ring-primary-500 focus:outline-none"
                        type="email"
                        placeholder="Enter email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={isSubmitting}
                      />
                      <button
                        type="submit"
                        className="icon-btn bg-primary-500 hover:bg-primary-600 text-white px-4 py-3 rounded-r-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed border-1 border-primary-500"
                        aria-label="Subscribe to newsletter"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Successfully subscribed to newsletter!
                      </div>
                    )}

                    {submitStatus === 'error' && (
                      <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center gap-2 text-sm">
                        <XCircle className="w-4 h-4" />
                        {errorMessage}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright-wrap bg-primary-500">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center py-6">
            <div className="mb-4 lg:mb-0">
              <p className="copyright-text text-white text-sm">
                © {new Date().getFullYear()} {" "}
                <Link href="/" className="hover:text-gray-200 transition-colors">Glumia</Link>.
                All Rights Reserved.
              </p>
            </div>
            <div className="hidden lg:block">
              <div className="footer-links">
                <ul className="flex space-x-6 text-sm">
                  <li>
                    <Link href="/privacy-policy" className="text-white hover:text-gray-200 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
