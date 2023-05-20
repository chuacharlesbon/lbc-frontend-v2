import React, { FC } from 'react';
import { FlexRow, Div, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { ImInfo } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { PickupScheduleItem } from '../../../components';
import { tempBorderColors, tempPickupScheduleData } from '../../../constants/TempData';
import { RawButton } from '../../../core/Buttons/RawButton';

export const SchedulePickUpTab: FC<any> = () => {

    return (
        <FlexRow className='justify-between w-full h-full'>
            <Div className='w-1/3 h-3/4 p-5'>
                <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        //
                    </Text>
                </Div>
            </Div>
            <Div className='w-2/3 h-3/4 p-5'>
                <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-full h-full'>
                    <Text className='text-secondary-200 font-bold'>
                        PICK UP SCHEDULES
                    </Text>
                    <Spacer className='h-5' />
                    <Div className='overflow-y-scroll h-3/5'>
                        {
                            tempPickupScheduleData.map((item: any, index: number) => (
                                <PickupScheduleItem
                                    data={item}
                                    className={`${tempBorderColors[index % 2]}`}
                                    id={item.id}
                                    pickUpSchedule={item.pickUpSchedule}
                                    address={item.address}
                                    contactPerson={item.contactPerson}
                                    estVolumePerPickup={item.estVolumePerPickup}
                                    specialInstruction={item.specialInstruction}
                                />
                            ))
                        }
                    </Div>
                    <FlexRow className='justify-center w-full my-2'>
                        <RawButton className='bg-grey-500 hover:bg-grey-400 rounded-lg p-2' onClick={() => { }}>
                            <Text className='text-secondary-200 text-sm font-bold'>
                                + Add Schedule
                            </Text>
                        </RawButton>
                    </FlexRow>
                    <FlexRow className='bg-grey-400 items-start justify-center p-5'>
                        <ImInfo className='text-secondary-200 text-2xl' />
                        <Div className='px-2'>
                            <Text className='text-secondary-200 text-xs'>
                                Requests to change the details in your current pick up schedule or add new pick up schedules will be reviewed by our team, before they will be applied, but we will get back to you as soon as we can. We thank you for your patience.
                            </Text>
                        </Div>
                    </FlexRow>
                </Div>
            </Div>
        </FlexRow>
    );
};