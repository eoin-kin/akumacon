import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MapPin, Heart, Tag } from "lucide-react";

export default function InfoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Auto-rotation functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Location coordinates for Áras na MacLéinn, Galway
  const galwayCoords = "53.2784,-9.0594";

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${galwayCoords}`,
      "_blank"
    );
  };

  return (
    <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-primary-custom text-light p-4 flex items-center justify-center">
        <h2 className="text-xl font-bold text-center">
          Galway Student Information
        </h2>
      </div>

      {/* Slider container */}
      <div className="relative h-64 overflow-hidden">
        {/* Map Slide */}
        <div
          className={`absolute w-full h-full transition-transform duration-500 p-4 flex flex-col ${
            currentSlide === 0 ? "translate-x-0" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="text-primary-custom" />
            <h3 className="text-lg font-semibold text-primary-custom">
              Áras na MacLéinn, Galway
            </h3>
          </div>

          <div className="relative flex-1 bg-highlight rounded-lg mb-3">
            {/* This would be your map image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="/api/placeholder/400/200"
                alt="Map of Áras na MacLéinn"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>

          <button
            onClick={openGoogleMaps}
            className="bg-cta text-dark py-2 px-4 rounded-lg hover:opacity-90 flex items-center justify-center gap-2"
          >
            <MapPin size={18} />
            Open in Google Maps
          </button>
        </div>

        {/* Charity Partners Slide */}
        <div
          className={`absolute w-full h-full transition-transform duration-500 p-4 flex flex-col ${
            currentSlide === 1 ? "translate-x-0" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Heart className="text-secondary-custom" />
            <h3 className="text-lg font-semibold text-primary-custom">
              Charity Partners
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-secondary-custom" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-custom">
                    Galway Simon Community
                  </h4>
                  <p className="text-sm text-dark">
                    Supporting homeless individuals across Galway.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-secondary-custom" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-custom">
                    MADRA Dog Rescue
                  </h4>
                  <p className="text-sm text-dark">
                    Animal welfare and rehoming services.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-12 h-12 bg-highlight rounded-full flex items-center justify-center">
                  <Heart size={24} className="text-secondary-custom" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-custom">
                    Croí Heart & Stroke
                  </h4>
                  <p className="text-sm text-dark">
                    Cardiac health research and services.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Local Discounts Slide */}
        <div
          className={`absolute w-full h-full transition-transform duration-500 p-4 flex flex-col ${
            currentSlide === 2 ? "translate-x-0" : "translate-x-full opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 mb-3">
            <Tag className="text-tertiary" />
            <h3 className="text-lg font-semibold text-primary-custom">
              Student Discounts
            </h3>
          </div>

          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-3">
              <li className="bg-highlight p-3 rounded-lg">
                <h4 className="font-medium text-primary-custom">
                  The Quays Bar
                </h4>
                <p className="text-sm text-dark">
                  20% off food with student ID
                </p>
              </li>

              <li className="bg-highlight p-3 rounded-lg">
                <h4 className="font-medium text-primary-custom">
                  Charlie Byrne's Bookshop
                </h4>
                <p className="text-sm text-dark">
                  10% discount on all purchases
                </p>
              </li>

              <li className="bg-highlight p-3 rounded-lg">
                <h4 className="font-medium text-primary-custom">
                  Galway Atlantaquaria
                </h4>
                <p className="text-sm text-dark">Student entry €10 (save €3)</p>
              </li>

              <li className="bg-highlight p-3 rounded-lg">
                <h4 className="font-medium text-primary-custom">
                  Pálás Cinema
                </h4>
                <p className="text-sm text-dark">Student tickets €8 all week</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Navigation controls */}
      <div className="flex justify-between p-4 bg-highlight">
        <div className="flex gap-2">
          {[...Array(totalSlides)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === idx ? "bg-primary-custom" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} className="text-primary-custom" />
          </button>

          <button
            onClick={nextSlide}
            className="p-2 bg-white rounded-full hover:bg-gray-100"
            aria-label="Next slide"
          >
            <ChevronRight size={18} className="text-primary-custom" />
          </button>
        </div>
      </div>
    </div>
  );
}
