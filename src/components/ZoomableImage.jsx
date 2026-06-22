import React, { useState } from 'react';
import ImageModal from './ImageModal';

const ZoomableImage = ({ src, alt, className, style, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, cursor: 'zoom-in' }}
        width={width}
        height={height}
        onClick={() => setIsOpen(true)}
      />
      <ImageModal
        isOpen={isOpen}
        imageSrc={src}
        altText={alt}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ZoomableImage;
