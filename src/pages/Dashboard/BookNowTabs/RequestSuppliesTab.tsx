import React, { FC } from 'react';
import { FlexRow, Div } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const RequestSuppliesTab: FC<any> = () => {

    const text = "SchedulePickUpTab";

    return (
        <FlexRow className='justify-between w-full h-full'>
            <Div className='border-r border-grey-400 w-2/3 h-full p-5'>
                <Div className='p-5 w-full h-full'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        //
                    </Text>
                </Div>
            </Div>
            <Div className='border-l border-grey-400 w-1/3 h-full p-5'>
                <Div className='p-5 w-full h-full'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        //
                    </Text>
                </Div>
            </Div>
        </FlexRow>
    );
};