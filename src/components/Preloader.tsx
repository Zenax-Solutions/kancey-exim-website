import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="text-center">
        {/* Logo or Company Name */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary animate-pulse">
            KANCEY EXIM
          </h1>
        </div>

        {/* Loading Spinner */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-muted-foreground animate-pulse">Loading...</p>
      </div>
    </div>
  );
};

export default Preloader;
