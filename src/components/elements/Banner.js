import React from 'react';

const Banner = ({ 
  message, 
  type = 'info', 
  className = '',
  dismissible = false,
  onDismiss = () => {}
}) => {
  const typeStyles = {
    info: 'bg-blue-100 border-blue-200 text-blue-800',
    warning: 'bg-yellow-100 border-yellow-200 text-yellow-800',
    error: 'bg-red-100 border-red-200 text-red-800',
    success: 'bg-green-100 border-green-200 text-green-800'
  };

  const iconMap = {
    info: '💡',
    warning: '⚠️',
    error: '❌',
    success: '✅'
  };

  return (
    <div className={`w-full border-l-4 p-4 ${typeStyles[type]} ${className}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-lg mr-3" aria-hidden="true">
            {iconMap[type]}
          </span>
          <p className="text-sm font-medium">
            {message}
          </p>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-4 text-current opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Banner schließen"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default Banner;
