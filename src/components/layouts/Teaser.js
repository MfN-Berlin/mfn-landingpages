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
  alignment = 'left',
  className = ''
}) => {
  const getTextStyleClasses = () => {
    switch (textStyle) {
      case 'circle-white':
        return 'bg-white';
      case 'circle-green':
        return 'bg-Green-500';
      case 'box-white':
        return 'bg-white';
      default:
        return 'bg-white';
    }
  };

  const getTextPositionClasses = () => {
    if (!textStyle.includes('box')) {
      switch (textPosition) {
        case 'bottom-left':
          return 'bottom-4 left-4 mr-4';
        case 'center-left':
          return 'top-1/2 left-4 transform -translate-y-1/2';
        case 'center-right':
          return 'top-1/2 right-4 transform -translate-y-1/2';
        case 'center-center':
          return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
        default:
          return 'bottom-4 left-4 mr-4';
      }
    }
    return '';
  };

  const isCircle = textStyle.includes('circle');
  const isGreenCircle = textStyle === 'circle-green';
  const isBoxWhite = textStyle === 'box-white';

  // Calculate minimum height based on circle size plus margins
  const getMinHeight = () => {
    if (isCircle) {
      if (isGreenCircle) {
        return 'min-h-[calc(24rem+4rem)] sm:min-h-[calc(32rem+4rem)]'; // 96px circle + 2em margins
      }
      return 'min-h-[calc(16rem+4rem)] sm:min-h-[calc(20rem+4rem)]'; // 64px circle + 2em margins
    }
    return '';
  };

  return (
    <div className={`relative w-full ${className}`}>
      {isCircle ? (
        // Circle variant: relative container, absolute image
        <div className={`relative w-full h-full ${getMinHeight()}`}>
          {imageProps && (
            <ContentImage 
              {...imageProps}
              className={`absolute w-full h-full object-cover ${imageProps.className || ''}`}
            />
          )}
        </div>
      ) : (
        // Box variant: absolute container
        <div className={`absolute w-full h-full ${getMinHeight()}`}>
          {imageProps && (
            <ContentImage 
              {...imageProps}
              className={`w-full h-full object-cover ${imageProps.className || ''}`}
            />
          )}
        </div>
      )}
      
      {isBoxWhite ? (
        <div className="relative mt-[15em] mx-8 mb-8 max-w-[35em]">
          <div className="relative bg-white p-4">
            <CardText 
              {...textProps}
              textColor="black"
            />
            {buttonProps && (
              <Button 
                {...buttonProps}
                variant={buttonProps.variant || 'primary'} 
                className="mt-4"
              >
                {buttonProps.label}
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className={`
          absolute top-0 left-0 right-0 bottom-0
          ${isCircle ? (
            isGreenCircle ? 
            'min-h-[20rem] sm:min-h-[28rem]' :
            'min-h-[16rem] sm:min-h-[20rem]'
          ) : ''}`
        }>
          <div className={`absolute ${getTextPositionClasses()}`}>
            <div className={`
              ${isCircle ? (
                isGreenCircle ? 
                'w-72 h-72 sm:w-96 sm:h-96 rounded-full' : 
                'w-48 h-48 sm:w-64 sm:h-64 rounded-full'
              ) : 'p-4'} 
              flex ${isCircle ? 'items-center' : 'items-start'} justify-center
              ${getTextStyleClasses()}
            `}>
              <div className={`
                ${isCircle ? (
                  isGreenCircle ? 
                  'w-60 h-60 sm:w-80 sm:h-80' : 
                  'w-36 h-36 sm:w-48 sm:h-48'
                ) : ''} 
                flex flex-col ${isCircle ? 'items-center' : 'items-start'} justify-center text-center
              `}>
                <CardText 
                  {...textProps} 
                  alignment={isCircle ? 'center' : textProps?.alignment}
                  textColor={isGreenCircle ? 'white' : 'black'}
                />
                {buttonProps && (
                  <Button 
                    {...buttonProps}
                    variant={buttonProps.variant || 'primary'} 
                    className={`mt-4 ${isGreenCircle ? 'text-White-White' : ''}`}
                  >
                    {buttonProps.label}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teaser;
