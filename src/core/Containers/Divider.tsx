import React, { FC } from 'react';
import { FlexRow } from './FlexRow';

interface DividerProps {
  className?: string;
}

interface TextDividerProps {
    className?: string;
    textType?: string;
    textElement?: any;
  }

export const Divider: FC<DividerProps> = ({ className, ...props }) => (
  <hr className={`${className}`} {...props} />
);

export const TextDivider: FC<TextDividerProps> = ({ className, textType, textElement, ...props }) => {
if(textType === "center"){
    return (
        <FlexRow className='items-center justify-center w-full'>
        <div className={`mx-5 h-1 w-1/4 rounded-full ${className}`} />
        {textElement}
        <div className={`mx-5 h-2 w-1/4 rounded-full ${className}`} />
        </FlexRow>
    );
}
else if(textType === "end"){
    return (
        <FlexRow className='items-center justify-center w-full'>
            <div className={`mx-5 h-1 w-3/4 rounded-full ${className}`} />
            <div className='mx-5'>
            {textElement}
            </div>
        </FlexRow>
    );
}
else if(textType === "start"){
    return (
        <FlexRow className='items-center justify-center w-full'>
            <div className='mx-5'>
            {textElement}
            </div>
            <div className={`mx-5 h-1 w-3/4 rounded-full ${className}`} />
        </FlexRow>
    );
}
return (
    <hr className={`${className}`} {...props} />
);
};
