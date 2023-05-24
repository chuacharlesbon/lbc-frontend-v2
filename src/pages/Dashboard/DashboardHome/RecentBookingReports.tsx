import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { tempPerformanceDataRow } from '../../../constants/TempData';
import { Link } from 'react-router-dom';
import { RecentBookingSummary } from '../../../components/Tables';

export const RecentBookingReports: FC<any> = () => {

    return (
        <Div className='w-1/2'>
            <Div className='w-full rounded-lg border border-grey-400 mr-1'>
                <FlexRow className='justify-between items-center py-4 px-10'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        Recent Bookings
                    </Text>
                    <Link className='ml-auto' to="/activity">
                        <Text className='text-red-400 text-xs font-bold'>
                            View all
                        </Text>
                    </Link>
                    <Spacer className='' />
                </FlexRow>

                <Div className='w-full p-5'>
                    {
                        tempPerformanceDataRow.map((list: any) => (
                            <RecentBookingSummary
                                deliveryId={list.deliveryId}
                                deliverySize={list.deliverySize}
                                logisticsType={list.logisticsType}
                                deliveryDate={list.deliveryDate}
                                transactionDate={list.transactionDate}
                                clientNameFrom={list.clientNameFrom}
                                clientAddressFrom={list.clientAddressFrom}
                                clientNameTo={list.clientNameTo}
                                clientAddressTo={list.clientAddressTo}
                            />
                        ))
                    }
                </Div>
            </Div>
        </Div>
    );
};
