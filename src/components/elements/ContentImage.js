// src/components/ContentImage.js
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const ContentImage = ({ imageName, alt, imageMap, className = '' }) => {
  const imageData = imageMap[imageName];

  if (!imageData) {
    return null;
  }

  const image = getImage(imageData);

  return (
    <GatsbyImage
      image={image}
      alt={alt}
      className={`${className} object-contain`}
      loading="lazy"
    />
  );
};

export default ContentImage;
