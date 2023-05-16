import React, { FC } from 'react';
import { Div, FlexRow, Spacer, TextDivider } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { tempPerformanceDataRow } from '../../../constants/TempData';
import { PerformanceDataRow } from '../../../components/Tables/PerformanceDataRow';
import { Link } from 'react-router-dom';

export const PerformanceReports: FC<any> = () => {

    return (
        <Div className='w-full rounded-lg border border-grey-400'>
            <FlexRow className='justify-between items-center py-4 px-10'>
                <Text className='text-secondary-100 text-sm font-bold'>
                    Delivery Performance
                </Text>
                <Text className='text-secondary-100 text-sm'>
                    Monthly May 2023
                </Text>
                <Spacer className='' />
            </FlexRow>

            <FlexRow className='justify-between items-center border border-grey-400 shadow-xl rounded-xl m-5 py-4 px-10'>
                <Div>
                    <Text className='text-green-100 text-xl text-center font-bold'>
                        95%
                    </Text>
                    <Text className='text-secondary-100 text-xs text-center'>
                        YTD Delivery Performance
                    </Text>
                </Div>
                <Div>
                    <Text className='text-green-100 text-xl text-center font-bold'>
                        95%
                    </Text>
                    <Text className='text-secondary-100 text-xs text-center'>
                        MTD Delivery Performance
                    </Text>
                </Div>
                <Div>
                    <Text className='text-green-100 text-xl text-center font-bold'>
                        95%
                    </Text>
                    <Text className='text-secondary-100 text-xs text-center'>
                        YTD Delivery % with SLA
                    </Text>
                </Div>
                <Div>
                    <Text className='text-green-100 text-xl text-center font-bold'>
                        95%
                    </Text>
                    <Text className='text-secondary-100 text-xs text-center'>
                        Weekly % Return w/in SLA
                    </Text>
                </Div>
            </FlexRow>

            <TextDivider
                className='bg-grey-400'
                textType="end"
                textElement={
                    <Link to="/dashboard-home/delivery-table-data">
                        <Text className='text-red-100 text-xs font-bold'>
                            View all
                        </Text>
                    </Link>
                }
            />

            <Div className='w-full p-5'>
                {
                    tempPerformanceDataRow.map((list: any) => (
                        <PerformanceDataRow
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
    );
};
