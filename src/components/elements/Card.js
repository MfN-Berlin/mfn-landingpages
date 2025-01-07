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
        return "self-stretch p-5 bg-[#d5e0b2] flex-col justify-start items-start gap-2.5 flex";
      case 'white':
        return "self-stretch p-5 bg-White-White flex-col justify-start items-start gap-2.5 flex";
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
        <div className={getVariantStyles()}>
          <CardText {...textProps} />
        </div>
      )}
    </>
  );

  return (
    <Link 
      to={url} 
      className={`group w-full p-3 flex-col justify-start ${alignment === 'left' ? 'items-start' : 'items-center'} gap-2.5 inline-flex hover:bg-Green-200 rounded-[10px] focus:border-2 focus:border-[#729800] ${className}`}
    >
      {variant === 'classic' ? (
        cardContent
      ) : (
        <div className={`self-stretch flex-col bg-White-White justify-center ${alignment === 'left' ? 'items-start' : 'items-center'} flex`}>
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
  );
};

export default Card;
