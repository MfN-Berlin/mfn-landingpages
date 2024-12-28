import React from 'react';
import { Link } from 'gatsby';
import ContentImage from '../elements/ContentImage';
import CardText from '../elements/CardText';

const SlideContent = ({ imageName, altText, kicker, title, text, link, imageMap }) => {
  const slideContent = (
    <div className="w-full h-full flex flex-col">
      <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
        <div className="absolute inset-0">
          <ContentImage 
            imageName={imageName}
            alt={altText}
            imageMap={imageMap}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="bg-Green-100 p-8 group-hover:bg-Green-200 transition-colors duration-300">
        <CardText
          kicker={kicker}
          headline={title}
          body={text}
          headlineStyle="h3"
          spacing="wide"
          alignment="left"
        />
      </div>
    </div>
  );

  if (link) {
    return (
      <Link 
        to={link}
        className="group w-full p-3 rounded-[10px] inline-flex flex-col items-start gap-2.5 hover:bg-Green-200 focus:border-2 focus:border-[#729800]"
      >
        {slideContent}
      </Link>
    );
  }

  return slideContent;
};

export default SlideContent;
