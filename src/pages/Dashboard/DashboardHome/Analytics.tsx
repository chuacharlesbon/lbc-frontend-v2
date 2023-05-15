import { FC } from 'react';
import { Div, FlexRow, Spacer, Divider } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { FaUserCircle } from 'react-icons/fa';
import { AnalyticsDropdown } from '../../../core/Buttons/AnalyticsDropdown';

export const Analytics: FC<any> = () => {

return (
    <Div className='border border-grey-400 rounded-xl shadow-lg w-2/5 h-full'>
        <FlexRow className='items-center justify-start p-5'>
            <FaUserCircle className='text-grey-400 rounded-full border border-grey-400 h-10 w-10'/>
            <Spacer className='w-5' />
            <Div>
                <Text className='text-secondary-200 font-bold text-3xl'>
                    Hello, User!
                </Text>
                <Text className='text-secondary-200'>
                    Account Number: 1087468768798790
                </Text>
            </Div>
        </FlexRow>
        <Divider className='text-grey-400'/>
        <FlexRow>
            <AnalyticsDropdown />
        </FlexRow>

        <FlexRow className='items-center justify-between p-5'>
            <Div className='w-1/4 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    Total Transactions
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
            <Div className='w-1/4 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    Pickup/ Dropped Off
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
            <Div className='w-1/4 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    Returned
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
            <Div className='w-1/4 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    Others
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
        </FlexRow>
        <Divider className='text-grey-400'/>
        <FlexRow className='items-center justify-between p-5'>
            <Div className='w-1/3 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    Delivered
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
            <Div className='w-1/3 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    In-transit
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
            <Div className='w-1/3 p-2'>
                <Text className='text-secondary-200 text-xs'>
                    For Disposition
                </Text>
                <Text className='text-secondary-100 text-xs font-bold'>
                    32,000
                </Text>
            </Div>
        </FlexRow>
    </Div>
);
};