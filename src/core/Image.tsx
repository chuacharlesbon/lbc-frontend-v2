import React, { FC } from 'react';

interface ImageProps {
  className?: string;
  alt?: string;
  src?: string;
}

export const Image: FC<ImageProps> = ({ className, alt, src, ...props }) => (
  <img alt={alt} className={`${className}`} src={src} {...props} />
);
