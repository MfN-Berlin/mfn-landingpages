import React, { useState, createContext, useContext } from 'react';

const AccordionContext = createContext();

const AccordionCloseButton = ({ isOpen }) => (
  <span className={`w-[25px] h-[15.80px] relative transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} aria-hidden="true">
    <span className="w-[17.53px] h-[4.38px] left-[3.10px] top-0 absolute origin-top-left rotate-45 bg-[#5f5f5f]"></span>
    <span className="w-[17.53px] h-[4.38px] left-[25px] top-[3.40px] absolute origin-top-left rotate-[135deg] bg-[#5f5f5f]"></span>
  </span>
);

export const Accordion = ({ children, bgColor = 'white', defaultOpenIndex = null }) => {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const [previousIndex, setPreviousIndex] = useState(null);

  const handleIndexChange = (newIndex) => {
    setPreviousIndex(openIndex);
    setOpenIndex(newIndex);
  };

  return (
    <AccordionContext.Provider value={{ openIndex, previousIndex, handleIndexChange, bgColor }}>
      <div className="w-full">
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { index })
        )}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({ children, title, index }) => {
  const { openIndex, previousIndex, handleIndexChange, bgColor } = useContext(AccordionContext);
  const isOpen = openIndex === index;

  const toggleItem = () => {
    handleIndexChange(isOpen ? null : index);
  };

  const itemId = `accordion-item-${index}`;
  const headingId = `accordion-heading-${index}`;

  return (
    <div className={`mb-4 ${bgColor === 'green' ? 'bg-Green-100' : 'bg-white'}`}>
      <h3 id={headingId}>
        <button
          className="w-full p-5 flex justify-between items-center text-left"
          onClick={toggleItem}
          aria-expanded={isOpen}
          aria-controls={itemId}
        >
          <span className="text-Black-900 text-[21px] font-bold font-tradegothic-bold">{title}</span>
          <AccordionCloseButton isOpen={isOpen} />
        </button>
      </h3>
      <div 
        id={itemId}
        role="region"
        aria-labelledby={headingId}
        className={`
          grid
          transition-all duration-300 ease-in-out
          ${isOpen 
            ? 'grid-rows-[1fr] opacity-100' 
            : 'grid-rows-[0fr] opacity-0'
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="p-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export const AccordionSpacer = ({ children }) => {
  const { bgColor } = useContext(AccordionContext);

  return (
    <div className={`mb-4 ${bgColor === 'green' ? 'bg-Green-100' : 'bg-white'}`}>
      <div className="p-5">
        {children}
      </div>
    </div>
  );
};
