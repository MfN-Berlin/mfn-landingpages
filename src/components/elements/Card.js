import React from 'react';
import { Link } from 'gatsby';
import ContentImage from './ContentImage';
import CardText from './CardText';

const Card = ({ 
  variant = 'classic', 
  imageProps, 
  textProps, 
  url,
  className = ''
}) => {
  const cardContent = (
    <>
      <ContentImage {...imageProps} />
      {variant === 'classic' ? (
        <CardText {...textProps} />
      ) : (
        <div className="self-stretch p-5 bg-[#d5e0b2] flex-col justify-start items-start gap-2.5 flex">
          <CardText {...textProps} />
        </div>
      )}
    </>
  );

  return (
    <Link 
      to={url} 
      className={`group w-full p-3 flex-col justify-start items-start gap-2.5 inline-flex hover:bg-Green-200 rounded-[10px] focus:border-2 focus:border-[#729800] ${className}`}
    >
      {variant === 'classic' ? (
        cardContent
      ) : (
        <div className="self-stretch flex-col justify-center items-start flex">
          {cardContent}
        </div>
      )}
    </Link>
  );
};

export default Card;
