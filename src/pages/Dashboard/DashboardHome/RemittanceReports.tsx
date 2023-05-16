import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { tempRemittanceDataRow } from '../../../constants/TempData';
import { Link } from 'react-router-dom';
import { RemittanceHistorySummary } from '../../../components/Tables';

export const RemittanceReports: FC<any> = () => {

    return (
        <Div className='w-1/2'>
            <Div className='w-full rounded-lg border border-grey-400 ml-1'>
                <FlexRow className='justify-between items-center py-4 px-10'>
                    <Text className='text-secondary-100 text-xs font-bold'>
                        Remittance History
                    </Text>
                    <Link className='ml-auto' to="/dashboard-home/remittance-table-data">
                        <Text className='text-red-400 text-xs font-bold'>
                            View all
                        </Text>
                    </Link>
                    <Spacer className='' />
                </FlexRow>

                <Div className='w-full p-5'>
                    {
                        tempRemittanceDataRow.map((list: any) => (
                            <RemittanceHistorySummary
                                referenceId={list.referenceId}
                                depositedDate={list.depositedDate}
                                amount={list.amount}
                            />
                        ))
                    }
                </Div>
            </Div>
        </Div>
    );
};
