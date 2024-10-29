import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  backgroundColor = 'bg-transparent',
  padding = 'py-16',
  columns = 1,
  gapClass = 'gap-4',
  layout = 'equal'
}) => {
  // Enhanced grid class logic to handle 4 columns
  const getGridClass = () => {
    if (layout === 'custom') {
      return `grid-cols-12 ${gapClass}`;
    }
    
    switch(columns) {
      case 2:
        return `grid-cols-1 md:grid-cols-2 ${gapClass}`;
      case 3:
        return `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapClass}`;
      case 4:
        return `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gapClass}`;
      default:
        return `grid-cols-1 ${gapClass}`;
    }
  };

  return (
    <section className={`w-full ${padding} ${backgroundColor} ${className}`}>
      <div className="grid grid-cols-[1fr_minmax(auto,_min(1165px,_100vw))_1fr]">
        <div className="col-start-2 col-end-3 px-3">
          <div className={`grid justify-items-center items-center px-12 xl:px-0 ${getGridClass()}`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
