import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';

const Slideshow = ({ children, imageMap }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      duration: 40
    },
    [
      Fade(),
      Autoplay({
        delay: 4000, // 4 seconds
        stopOnInteraction: true, // stops on user interaction
        stopOnMouseEnter: true, // optional: stops on mouse enter
        rootNode: (emblaRoot) => emblaRoot.parentElement, // optional: track mouse enter on the whole component
      })
    ]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="w-full max-w-[1165px] mx-auto">
      <div className="relative">
        <div ref={emblaRef}>
          <div className="flex touch-pan-y overflow-hidden">
            {React.Children.map(children, (child, index) => (
              <div className="flex-[0_0_100%] min-w-0">
                {React.cloneElement(child, { 
                  imageMap,
                  paginationDots: (
                    <div className="flex gap-2" role="tablist">
                      {React.Children.map(children, (_, dotIndex) => (
                        <button
                          role="tab"
                          aria-label={`Go to slide ${dotIndex + 1}`}
                          aria-selected={selectedIndex === dotIndex}
                          className={`w-3 h-3 rounded-full cursor-pointer transition-colors
                            ${selectedIndex === dotIndex ? 'bg-[#daff6a]' : 'bg-white/70'}`}
                          onClick={() => scrollTo(dotIndex)}
                        />
                      ))}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          className="absolute left-4 top-[48%] -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center rotate-180 hover:bg-gray-50"
          onClick={scrollPrev}
          aria-label="Previous slide"
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1.75586 8.76074L13.5873 8.76074" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.23926 15.5217L14.0001 8.76085L7.23926 2" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="absolute right-4 top-[48%] -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-50"
          onClick={scrollNext}
          aria-label="Next slide"
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M1.75586 8.76074L13.5873 8.76074" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.23926 15.5217L14.0001 8.76085L7.23926 2" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
