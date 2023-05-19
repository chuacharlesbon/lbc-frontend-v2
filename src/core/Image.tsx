import React, { FC } from 'react';

interface ImageProps {
  className?: string;
  alt?: string;
  src?: any;
}

export const Image: FC<ImageProps> = ({ className, alt, src, ...props }) => (
  <img alt={alt} className={`${className}`} src={src} {...props} />
);
