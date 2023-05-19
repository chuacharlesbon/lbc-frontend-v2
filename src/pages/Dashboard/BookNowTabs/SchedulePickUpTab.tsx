import React, { FC } from 'react';
import { FlexRow, Div } from '../../../core/Containers';
import { Text } from '../../../core/Text';

export const SchedulePickUpTab: FC<any> = () => {

    const text = "SchedulePickUpTab";

    return (
        <FlexRow className='justify-between w-full h-full'>
            <Div className='w-1/3 h-full p-5'>
                <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        //
                    </Text>
                </Div>
            </Div>
            <Div className='w-2/3 h-full p-5'>
                <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        //
                    </Text>
                </Div>
            </Div>
        </FlexRow>
    );
};