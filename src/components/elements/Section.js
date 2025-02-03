import React from 'react';

const Section = ({ 
  children, 
  className = '', 
  backgroundColor = 'bg-transparent',
  innerBg = '',
  padding = 'py-8 md:py-16',
  columns = 1,
  gapClass = 'gap-4',
  layout = 'equal',
  justifyContent = 'start',
  forceGrid = false,
  id
}) => {
  const getGridClass = () => {
    if (layout === 'custom') {
      return `grid-cols-12 ${gapClass}`;
    }
    
    switch(columns) {
      case 2:
        return `grid-cols-1 md:grid-cols-2 ${gapClass} grid-flow-dense`;
      case 3:
        return `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapClass} grid-flow-dense`;
      case 4:
        return `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ${gapClass} grid-flow-dense`;
      default:
        return `grid-cols-1 ${gapClass}`;
    }
  };

  const getJustifyClass = () => {
    return justifyContent === 'start' ? 'items-start' : 'items-center';
  };

  return (
    <section 
      id={id}
      className={`w-full ${padding} ${backgroundColor} ${className}`}
    >
      <div className={`${forceGrid ? 'grid' : 'block md:grid'}  ${innerBg ? 'grid-cols-[1fr_minmax(auto,_min(1200px,_95vw))_1fr]' : '1fr grid-cols-[1fr_minmax(auto,_min(1165px,_100vw))_1fr]'} `}>
        <div className={`col-start-2 col-end-3 px-3 ${innerBg ? `${innerBg} py-12` : ''}`}>
          <div className={`
            ${forceGrid ? 'grid' : 'block md:grid'} 
            px-3 sm:px-12 xl:px-0 
            justify-items-center 
            ${getGridClass()} 
            ${getJustifyClass()}
            ${className.includes('grid-rows-auto') ? 'grid-auto-rows-fr' : ''}
          `}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
