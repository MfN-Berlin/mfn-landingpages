import React from 'react';
import ContentImage from '../elements/ContentImage';
import CardText from '../elements/CardText';

const SlideContent = ({ imageName, imageMap, title, kicker, text, link }) => {
  if (!imageMap) {
    console.warn('SlideContent: imageMap is undefined');
    return null;
  }

  if (!imageName) {
    console.warn('SlideContent: imageName is undefined');
    return null;
  }

  return (
    <div className="flex flex-col">
      <div className="relative w-full pb-[56.25%]"> {/* 16:9 aspect ratio */}
        <ContentImage
          imageName={imageName}
          alt={title}
          imageMap={imageMap}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="bg-white p-4 flex justify-evenly">
        <CardText
          kicker={kicker}
          headline={title}
          body={text}
          link={link}
          headlineStyle="h3"
          alignment="center"
        />
      </div>
    </div>
  );
};

export default SlideContent;
