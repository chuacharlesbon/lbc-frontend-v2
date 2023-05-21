import React, { FC } from 'react';
import { FlexColumn, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { Image } from '../../core/Image';
import { CheckBox } from '../../core/Forms';
import { Images } from '../../assets/images/images';

interface DataProps {
    className?: string;
    data: any;
    isSelected: boolean;
    onClick: any;
}

export const PackageItem: FC<DataProps> = ({ className, data, isSelected, onClick }) => {

    const [checked, setChecked] = React.useState(false);

    return (
        <FlexColumn className={`items-center justify-between border border-grey-400 rounded-lg shadow-lg hover:border-4 hover:border-red-200 p-2 ${isSelected || checked ? 'border-red-400' : ''} ${className}`} >
            <FlexRow className='w-full items-center'>
                <Text className={`text-sm ${isSelected ? 'text-red-400' : 'text-secondary-200'}`}>
                    {data.type}
                </Text>
                <CheckBox
                    className='phone:mx-0'
                    containerClass='ml-auto'
                    id={data.name}
                    name={data.name}
                    label=''
                    onClick={() => setChecked(!checked)}
                />
            </FlexRow>
            <Image
                alt={data.name}
                className='my-5'
                src={Images.packageImg}
            />
            <Text className='text-secondary-100 text-center font-bold'>
                {data.name}
            </Text>
            <Text className='text-secondary-100 text-center'>
                {data.dimension}
            </Text>
        </FlexColumn>
    );
};
