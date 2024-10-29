import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Fade from 'embla-carousel-fade';
import Autoplay from 'embla-carousel-autoplay';
import CardText from '../elements/CardText';

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
          <div className="flex touch-pan-y">
            {React.Children.map(children, (child, index) => (
              <div className="flex-[0_0_100%] min-w-0 flex flex-col">
                {/* Image Container with Pagination */}
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0">
                    {React.cloneElement(child, { imageMap })}
                  </div>
                  {/* Pagination Dots - Now inside image container */}
                  <div className="absolute left-0 right-0 bottom-4 flex justify-center">
                    <div className="flex gap-2 rounded-[20px] p-1.5 bg-black/50">
                      {React.Children.map(children, (_, dotIndex) => (
                        <button
                          className={`w-3 h-3 rounded-full cursor-pointer transition-colors
                            ${selectedIndex === dotIndex ? 'bg-[#daff6a]' : 'bg-white/70'}`}
                          onClick={() => scrollTo(dotIndex)}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* CardText below image */}
                <div className="bg-white p-6">
                  <CardText
                    kicker={child.props.kicker}
                    headline={child.props.headline}
                    body={child.props.body}
                    spacing="wide"
                    alignment="center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button 
          className="absolute left-4 top-[48%] -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center rotate-180 hover:bg-gray-50"
          onClick={scrollPrev}
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75586 8.76074L13.5873 8.76074" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.23926 15.5217L14.0001 8.76085L7.23926 2" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button 
          className="absolute right-4 top-[48%] -translate-y-1/2 w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-gray-50"
          onClick={scrollNext}
        >
          <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75586 8.76074L13.5873 8.76074" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.23926 15.5217L14.0001 8.76085L7.23926 2" stroke="#1a1a1a" strokeWidth="3.38043" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
