import React, { FC } from 'react';

interface TextProps {
  className?: string;
  props?: any;
  children?: any;
}

export const Text: FC<TextProps> = ({ className, children, ...props }) => (
  <p className={`${className}`} {...props}>
    {children}
  </p>
);
