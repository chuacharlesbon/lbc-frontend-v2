import React, { FC } from 'react';
import { FlexRow, Div, Spacer } from '../../../core/Containers';
import { Image } from '../../../core/Image';
import { Span, Text } from '../../../core/Text';
import { SuppliesReceiverInfo } from '../../../components/SuppliesReceiverInfo';
import { tempLBCPackage, tempReceiverData } from '../../../constants/TempData';
import { PackageItem } from '../../../components/Feature/PackageItem';
import { Button } from '../../../core/Buttons';
import { Images } from '../../../assets/images/images';

export const RequestSuppliesTab: FC<any> = () => {

    return (
        <FlexRow className='justify-between w-full h-full'>

            {/* First Body */}
            <Div className='border-r border-grey-400 w-2/3 h-full p-5'>
                <Div className='p-5 w-full h-48 shadow-lg rounded-lg border border-grey-400'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        Supplies Inventory Report
                        <Span className='mx-1'>as of Jan 1, 2023, 12:00 PM</Span>
                    </Text>

                    <FlexRow className='justify-between items-center my-2 w-full'>
                        <Div className='w-1/5'>
                            <Text className='text-secondary-100 text-xl text-center font-bold'>
                                295
                            </Text>
                            <Text className='text-secondary-100 text-center text-sm'>
                                No. of Supplies Delivered
                            </Text>
                            <Text className='text-secondary-200 text-center text-xs my-2'>
                                as of 01/01/2023
                            </Text>
                        </Div>
                        <Div className='w-1/5'>
                            <Text className='text-secondary-100 text-xl text-center font-bold'>
                                95
                            </Text>
                            <Text className='text-secondary-100 text-center text-sm'>
                                No. of Supplies Consumed
                            </Text>
                            <Text className='text-secondary-200 text-center text-xs my-2'>
                                as of 01/01/2023
                            </Text>
                        </Div>
                        <Div className='w-1/5'>
                            <Text className='text-secondary-100 text-xl text-center font-bold'>
                                232
                            </Text>
                            <Text className='text-secondary-100 text-center text-sm'>
                                No. of Supplies Remaining
                            </Text>
                            <Text className='text-secondary-200 text-center text-xs my-2'>
                                as of 01/01/2023
                            </Text>
                        </Div>
                        <Div className='w-1/5'>
                            <Text className='text-green-100 text-xl text-center font-bold'>
                                95%
                            </Text>
                            <Text className='text-secondary-100 text-center text-sm'>
                                % Supplies Remaining
                            </Text>
                            <Text className='text-secondary-200 text-center text-xs my-2'>
                                as of 01/01/2023
                            </Text>
                        </Div>
                    </FlexRow>
                </Div>

                <Spacer className='h-5' />

                <Text className='text-secondary-200 text-left font-bold'>
                    CHOOSE PACKAGING
                </Text>

                <Div className='w-full overflow-x-scroll p-2'>
                    <FlexRow className='w-1000px py-2'>
                        {
                            tempLBCPackage.map((item: any) => (
                                <PackageItem
                                    className='w-200px mx-2'
                                    isSelected={false}
                                    data={item}
                                    onClick={() => { }}
                                />
                            ))
                        }
                    </FlexRow>
                </Div>

                <Spacer className='h-5' />

                <FlexRow className='w-full items-center justify-center py-2'>
                    <Button
                        className='w-40 ml-2 h-10'
                        onClick={() => { }}
                    >
                        Add to Bag
                    </Button>
                </FlexRow>
            </Div>

            {/* Second Body */}
            <Div className='border-l border-grey-400 w-1/3 h-full p-5'>
                <Div className='p-5 w-full h-full'>
                    <SuppliesReceiverInfo
                        data={tempReceiverData}
                    />

                    <Text className='text-secondary-100 text-center font-bold my-5'>
                        MY SUPPLIES BAG
                    </Text>

                    <Image
                        alt='LBC Bag'
                        className='my-5 mx-auto'
                        src={Images.lbcBag}
                    />

                    <Text className='text-secondary-200 text-center text-sm'>
                        Your bag is empty
                    </Text>
                    <Text className='text-secondary-200 text-center text-sm'>
                        Add packaging from the list
                    </Text>

                    <Spacer className='h-16' />

                    <FlexRow className='w-full items-center justify-center'>
                        <Button
                            className='w-4/5 ml-2 h-10 phone:bg-grey-400 phone:rounded-full hover:bg-grey-300'
                            onClick={() => { }}
                        >
                            Submit Request
                        </Button>
                    </FlexRow>
                </Div>
            </Div>
        </FlexRow>
    );
};