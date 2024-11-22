import React from 'react';
import ContentImage from '../elements/ContentImage';
import CardText from '../elements/CardText';
import { Link } from 'gatsby';

const SlideContent = ({ imageName, imageMap, title, kicker, text, link, altText, paginationDots }) => {
  if (!imageMap || !imageName) return null;

  const content = (
    <div className="flex flex-col h-full">
      <div className="relative w-full">
        <ContentImage
          imageName={imageName}
          alt={altText || title}
          imageMap={imageMap}
          className="relative top-0 left-0 w-full h-full object-cover"
        />
        {paginationDots && (
          <div className="absolute left-0 right-0 bottom-4 flex justify-center">
            <div className="flex gap-2 rounded-[20px] p-1.5 bg-black/50">
              {paginationDots}
            </div>
          </div>
        )}
      </div>
      <div className="bg-white p-8 text-center">
        <CardText
          kicker={kicker}
          headline={title}
          body={text}
          headlineStyle="h3"
          spacing="wide"
          alignment="center"
        />
      </div>
    </div>
  );

  return link ? (
    <Link to={link} className="block h-full">
      {content}
    </Link>
  ) : content;
};

export default SlideContent;
