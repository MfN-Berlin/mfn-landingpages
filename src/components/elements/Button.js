import React from 'react';

const Button = ({ text, children, variant = 'primary', url, onClick, className = '', inheritAlignment = true, ...props }) => {
  const baseClasses = `inline-flex items-center whitespace-normal ${
    inheritAlignment ? "" : "justify-center"
  } transition-colors duration-200 ease-in-out focus:outline-none`;

  const styleClasses = {
    primary: 'h-[34px] px-4 pt-1.5 pb-2 bg-Green-500 text-White-White hover:bg-Green-600 focus:bg-Green-500 focus:border-2 focus:border-Black-900 typography-button',
    secondary: 'h-[34px] px-4 pt-1.5 pb-2 bg-White-White text-Black-900 border-2 border-Green-500 hover:bg-Green-200 focus:border-Black-900 typography-button',
    inverted: 'h-[34px] px-4 pt-1.5 pb-2 bg-White-White text-Black-900 hover:bg-Green-200 focus:bg-White-White focus:border-2 focus:border-Black-900 typography-button',
    plain: 'text-Green-500 hover:text-Green-600 underline typography-body focus:outline-2 focus:outline-offset-2 focus:outline-Green-500 text-left'
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (url) {
      // Wenn die URL mit einem Hash beginnt, scrolle zur Section
      if (url.startsWith('#')) {
        e.preventDefault();
        const element = document.getElementById(url.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Öffne externe URLs in neuem Tab
        window.open(url, '_blank', 'noopener noreferrer');
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${styleClasses[variant]} ${className}`}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
