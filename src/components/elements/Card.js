import React from 'react';
import { Link } from 'gatsby';
import ContentImage from './ContentImage';
import CardText from './CardText';
import Button from './Button';

const Card = ({ 
  variant = 'classic', 
  alignment = 'left',
  imageProps, 
  textProps, 
  url,
  className = '',
  imageRatio = '56.25',
  buttons
}) => {
  const getVariantStyles = () => {
    switch(variant) {
      case 'green':
        return "bg-[#d5e0b2] ";
      case 'white':
        return "bg-White-White ";
      case 'classic':
      default:
        return "";
    }
  };

  const cardContent = (
    <>
      {imageProps && (
        <div className="relative w-full" style={{ paddingTop: `${imageRatio}%` }}>
          <div className="absolute top-0 left-0 w-full h-full">
            <ContentImage {...imageProps} className="h-full" />
          </div>
        </div>
      )}
      {variant === 'classic' ? (
        <CardText {...textProps} />
      ) : (
        <div className="self-stretch p-5  flex-col justify-start items-start gap-2.5 flex">
          <CardText {...textProps} />
        </div>
      )}
    </>
  );

  return (
    <div className="h-full w-full">
      <Link 
        to={url} 
        className={`group w-full h-full p-3 flex flex-col justify-start ${alignment === 'left' ? 'items-start' : 'items-center'} gap-2.5 hover:bg-Green-200 rounded-[10px] focus:border-2 focus:border-[#729800] ${className}`}
      >
        {variant === 'classic' ? (
          cardContent
        ) : (
          <div className={`self-stretch h-full flex-col ${getVariantStyles()} justify-start ${alignment === 'left' ? 'items-start' : 'items-center'} flex`}>
            {cardContent}
          </div>
        )}
        <div className={`flex flex-col ${alignment === 'left' ? 'items-start' : 'items-center'}`}>
          {buttons?.map((button, index) => (
            <Button
              key={index}
              {...button}
              className={`w-full ${alignment === 'left' ? 'text-left' : 'text-center'}`}
              inheritAlignment={true}
            />
          ))}
        </div>
      </Link>
    </div>
  );
};

export default Card;
