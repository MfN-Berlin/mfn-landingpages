import React from 'react';
import { Link } from 'gatsby';
import ContentImage from '../elements/ContentImage';
import CardText from '../elements/CardText';

const StoryTime = ({ 
  imageProps,
  textProps,
  linkUrl,
  imagePosition = 'left',
  linkText
}) => {
  const ImageElement = (
    <div className="w-full md:w-1/2 h-[400px] md:h-auto w-[400px] md:w-full md:aspect-square relative">
      <div className="absolute inset-0 rounded-full overflow-hidden m-12">
        <ContentImage 
          {...imageProps}
          className="w-full h-full object-cover"
        />
      </div>
      {linkUrl && linkText && (
        <Link 
          to={linkUrl} 
          className="absolute bottom-4 right-4 w-32 h-32 md:w-36 md:h-36 px-4 py-6 md:px-6 md:py-9 bg-Green-500 rounded-full flex-col justify-center items-center gap-2.5 inline-flex hover:bg-[#5f7d00] transition-colors duration-300 z-10"
        >
          <div className="w-full text-center text-white text-xl font-bold leading-[1.75rem]">{linkText}</div>
        </Link>
      )}
    </div>
  );

  const TextElement = (
    <div className="w-full md:w-1/2 flex-col justify-center items-start gap-4 inline-flex">
      <CardText {...textProps} />
    </div>
  );

  return (
    <div className="w-full flex flex-col md:flex-row justify-start items-center gap-1 md:gap-20 xl:gap-36">
      {imagePosition === 'left' ? (
        <>
          {ImageElement}
          {TextElement}
        </>
      ) : (
        <>
          {TextElement}
          {ImageElement}
        </>
      )}
    </div>
  );
};

export default StoryTime;
