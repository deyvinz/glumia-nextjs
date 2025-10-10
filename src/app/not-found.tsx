import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="error-img mb-8">
          <Image 
            src="/assets/img/theme-img/error.svg" 
            alt="404 image" 
            width={400}
            height={300}
            className="mx-auto"
          />
        </div>
        
        <div className="error-content">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-primary-500">OooPs!</span> Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          <Link 
            href="/" 
            className="btn-primary text-lg px-8 py-4 inline-flex items-center"
          >
            <i className="fal fa-home me-2"></i>
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}
