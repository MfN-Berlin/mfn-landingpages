import React from 'react';
import ContentImage from '../elements/ContentImage';
import CardText from '../elements/CardText';
import Button from '../elements/Button';

const Teaser = ({ 
  imageProps,
  textProps,
  buttonProps,
  textStyle = 'circle-white',
  textPosition = 'bottom-left',
  className = ''
}) => {
  const getTextStyleClasses = () => {
    switch (textStyle) {
      case 'circle-white':
        return 'bg-white text-Black-900';
      case 'circle-green':
        return 'bg-Green-500 text-white';
      case 'box-white':
        return 'bg-white text-Black-900';
      default:
        return 'bg-white text-Black-900';
    }
  };

  const getTextPositionClasses = () => {
    switch (textPosition) {
      case 'bottom-left':
        return 'bottom-4 left-4';
      case 'center-left':
        return 'top-1/2 left-4 transform -translate-y-1/2';
      case 'center-right':
        return 'top-1/2 right-4 transform -translate-y-1/2';
      case 'center-center':
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
      default:
        return 'bottom-4 left-4';
    }
  };

  const isCircle = textStyle.includes('circle');

  return (
    <div className={`relative w-full ${className}`}>
      {imageProps && (
        <ContentImage {...imageProps} className="w-full h-full object-cover" />
      )}
      <div className={`absolute ${getTextPositionClasses()}`}>
        <div className={`
          ${isCircle ? 'w-64 h-64 rounded-full flex items-center justify-center' : 'p-4'}
          ${getTextStyleClasses()}
        `}>
          <div className={isCircle ? 'w-48 h-48 flex flex-col items-center justify-center text-center' : ''}>
            <CardText {...textProps} alignment={isCircle ? 'center' : textProps.alignment} />
            {buttonProps && (
              <Button variant={buttonProps.variant || 'primary'} className="mt-4">
                {buttonProps.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teaser;
