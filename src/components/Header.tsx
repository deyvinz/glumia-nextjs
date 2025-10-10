"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import { Menu, X, Mail } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navigationItems = [
    { label: "About Us", href: "about" },
    { label: "Services", href: "services" },
    { label: "Contact Us", href: "contact" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();

    // Check if we're on the homepage
    if (pathname === '/') {
      // On homepage, just scroll to the section
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Not on homepage, navigate to homepage with hash
      router.push(`/#${targetId}`);
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="bg-white h-full flex flex-col items-center justify-center relative">
          <Button
            isIconOnly
            variant="light"
            className="absolute top-6 right-6 text-gray-600 hover:text-primary-500"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <X className="w-6 h-6" />
          </Button>

          <div className="mb-8">
            <Link href="/" className="block">
              <Image src="/assets/img/logo.svg" width={50} height={50} alt="Glumia" />
            </Link>
          </div>

          <nav className="space-y-6 text-center">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.href}`}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="block text-lg text-gray-700 hover:text-primary-500 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-40">
        {/* Header Top */}
        <div className="bg-gray-50 py-2 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex justify-center lg:justify-between items-center">
              <div className="hidden md:block">
                <div className="flex items-center space-x-6 text-sm">
                  <div className="flex items-center text-gray-600 hover:text-primary-500 transition-colors">
                    <img alt="Chat on WhatsApp" src="/assets/img/whatsapp-gark-green.svg" width={15} className="mr-1" />
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://wa.me/19432589932"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                  {/*   <div className="hidden xl:flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="hidden xl:flex items-center text-gray-600">
                    <Building2 className="w-4 h-4 mr-1" />
                    <span>RC:7121278</span>
                  </div> */}
                  <div className="flex items-center text-gray-600 hover:text-primary-500 transition-colors">
                    <Mail className="w-4 h-4 mr-1" />
                    <a href="mailto:info@glumia.com">info@glumia.com</a>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Follow Us On:</span>
                  <div className="flex space-x-3">
                    <a
                      href="https://www.x.com/glumiang"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                      aria-label="Follow us on X (Twitter)"
                    >
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/glumiaofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary-500 transition-colors"
                      aria-label="Follow us on Instagram"
                    >
                      <i className="fab bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Menu Area */}
        <div className="py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" className="block">
                  <Image src="/assets/img/logo.svg" width={70} height={70} alt="Glumia" />
                </Link>
              </div>

              <div className="flex items-center space-x-8">
                <nav className="hidden lg:block">
                  <ul className="flex items-center space-x-8">
                    {navigationItems.map((item, index) => (
                      <li key={index}>
                        <a
                          href={`#${item.href}`}
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                          className="text-gray-700 hover:text-primary-500 transition-colors font-medium text-sm"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>

                <Button
                  isIconOnly
                  variant="light"
                  className="lg:hidden text-gray-600 hover:text-primary-500"
                  onClick={toggleMobileMenu}
                  aria-label="Open mobile menu"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </div>

              <div className="hidden xxl:block">
                <Button
                  as={Link}
                  href="https://wa.me/19432589932"
                  target="_blank"
                  rel="noopener noreferrer"
                  color="success"
                  variant="bordered"
                  className="font-semibold"
                  startContent={
                    <img alt="Chat on WhatsApp" src="/assets/img/whatsapp-gark-green.svg" width={20} />
                  }
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}