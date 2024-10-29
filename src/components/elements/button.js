import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'h-[34px] px-4 pt-1.5 pb-2 inline-flex justify-center items-center gap-2.5 typography-button transition-colors duration-200 ease-in-out focus:outline-none';

  const styleClasses = {
    primary: 'bg-Green-500 text-White-White hover:bg-Green-600 focus:bg-Green-500 focus:border-2 focus:border-Black-900',
    secondary: 'bg-White-White text-Black-900 border-2 border-Green-500 hover:bg-Green-200 focus:border-Black-900',
    inverted: 'bg-White-White text-Black-900 hover:bg-Green-200 focus:bg-White-White focus:border-2 focus:border-Black-900',
  };

  return (
    <button
      className={`${baseClasses} ${styleClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
