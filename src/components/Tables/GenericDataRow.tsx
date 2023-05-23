import React, { FC } from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

interface DataProps {
    containerClass?: string;
    className?: string;
    item1?: any;
    item2?: any;
    item3?: any;
    item4?: any;
    item5?: any;
    item6?: any;
    item7?: any;
    item8?: any;
}

export const GenericDataRow6: FC<DataProps> = ({
    containerClass,
    className,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
}) => (
    <>
        <FlexRow className={`items-center justify-between w-full py-2 hover:bg-grey-400 ${containerClass}`}>
            <Div className={`w-1/6 ${className}`}>
                {item1}
            </Div>
            <Div className={`w-1/6 ${className}`}>
                {item2}
            </Div>
            <Div className={`w-1/6 ${className}`}>
                {item3}
            </Div>
            <Div className={`w-1/6 ${className}`}>
                {item4}
            </Div>
            <Div className={`w-1/6 ${className}`}>
                {item5}
            </Div>
            <Div className={`w-1/6 ${className}`}>
                {item6}
            </Div>
        </FlexRow>
    </>
);

export const GenericDataRow8: FC<DataProps> = ({
    containerClass,
    className,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
}) => (
    <>
        <FlexRow className={`items-center justify-between w-full py-2 hover:bg-grey-400 ${containerClass}`}>
            <Div className={`w-1/8 ${className}`}>
                {item1}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item2}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item3}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item4}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item5}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item6}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item7}
            </Div>
            <Div className={`w-1/8 ${className}`}>
                {item8}
            </Div>
        </FlexRow>
    </>
);