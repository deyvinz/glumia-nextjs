"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      id="preloader" 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div id="loader" className="text-center">
        <div className="animation-preloader">
          <div className="logo-loader mb-4">
            <img 
              src="/assets/img/logo.svg" 
              alt="Glumia" 
              className="w-16 h-16 animate-pulse"
            />
          </div>
          <div className="text-primary-500 font-semibold text-lg">
            Loading...
          </div>
        </div>
      </div>
    </div>
  );
}
