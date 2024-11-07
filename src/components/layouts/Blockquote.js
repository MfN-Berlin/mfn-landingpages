import React from 'react';
import ContentImage from '../elements/ContentImage';


const BlockQuote = ({ 
  text, 
  source, 
  sourceTitle,
  backgroundColor = '#0197b7', 
  imageProps,
  className = ''
}) => {
  const hasImage = !!imageProps;

  return (
    <blockquote 
      className={`px-10 pt-20 pb-5 flex flex-col justify-start items-start ${className}`}
      style={{ backgroundColor }}
    >
      <div className="self-stretch flex justify-start items-start gap-[50px] flex-col md:flex-row">
        {hasImage && (
          <div className="w-[191.70px] h-[191.70px] relative">
            <div className="w-[191.70px] h-[191.70px] absolute bg-[#c4c4c4] rounded-full overflow-hidden">
              <ContentImage
                {...imageProps}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
        <div className="flex-grow flex-shrink basis-0 flex-col justify-start items-start">
          {text && (
            <p className="self-stretch text-white text-lg italic leading-relaxed mb-4">
              {text}
            </p>
          )}
          {(source || sourceTitle) && (
            <cite className="self-stretch opacity-70">
              {source && (
                <span className="text-white text-sm font-bold mr-2">
                  {source}
                </span>
              )}
              {sourceTitle && (
                <span className="text-white text-sm">
                  {sourceTitle}
                </span>
              )}
            </cite>
          )}
        </div>
      </div>
      <div className="self-stretch h-10 flex justify-end items-end mt-4">
        <img src='/images/logo-duotone.svg' alt="Logo" className="w-[76.78px] h-10" />
      </div>
    </blockquote>
  );
};

export default BlockQuote;
