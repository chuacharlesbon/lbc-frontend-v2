import { FC } from 'react';
import { Div, FlexRow, Spacer, Divider } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { AnalyticsDropdown } from '../../../core/Buttons/AnalyticsDropdown';
import { ResponsiveBar } from '@nivo/bar';
import { FaUserCircle } from 'react-icons/fa';
import { tempBarGraphData } from '../../../constants/TempData';

export const Analytics: FC<any> = () => {

    const colors = ['#FBDD8C', '#F37777', '#63C9A8', '#3173AF', '#202123B3'];

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

        {/* Bar Graph */}
        <Div className='h-200px w-full'>
        <ResponsiveBar
            data={tempBarGraphData}
            keys={[
                'Picked up/Dropped Off',
                'For Disposition',
                'In-transit',
                'Delivered',
                'Returned',
            ]}
            indexBy="country"
            margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            padding={0.3}
            valueScale={{ type: 'linear' }}
            indexScale={{ type: 'band', round: true }}
            colors={colors}
            enableGridX={false}
            enableGridY={false}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Quarterly',
                legendPosition: 'middle',
                legendOffset: 32
            }}
            axisLeft={null}
            labelSkipWidth={12}
            labelSkipHeight={12}
            labelTextColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        1.6
                    ]
                ]
            }}
            legends={[]}
            role="application"
            ariaLabel="Nivo bar chart demo"
            barAriaLabel={e=>e.id+": "+e.formattedValue+" in country: "+e.indexValue}
        />
        </Div>
        
        {/*  Custom Legends - ( Non-Interactive ) */}
        <FlexRow className='items-start justify-between'>
            <FlexRow className='w-1/3 items-center justify-center p-2'>
                <Spacer className='w-4 h-4 rounded-sm mr-4 bg-yellow-100'/>
                <Text className='text-secondary-100 text-xs font-semibold'>
                    Picked Up/ Dropped Off
                </Text>
            </FlexRow>
            <Div className='w-1/3 p-2'>
            <FlexRow className='w-full items-center justify-start py-2'>
                <Spacer className='w-4 h-4 rounded-sm mr-4 bg-red-100'/>
                <Text className='text-secondary-100 text-xs font-semibold'>
                    For Disposition
                </Text>
            </FlexRow>
            <FlexRow className='w-full items-center justify- py-2'>
                <Spacer className='w-4 h-4 rounded-sm mr-4 bg-blue-100'/>
                <Text className='text-secondary-100 text-xs font-semibold'>
                    In-transit
                </Text>
            </FlexRow>
            </Div>
            <Div className='w-1/3 p-2'>
            <FlexRow className='w-full items-center justify-start py-2'>
                <Spacer className='w-4 h-4 rounded-sm mr-4 bg-green-100'/>
                <Text className='text-secondary-100 text-xs font-semibold'>
                    Delivered
                </Text>
            </FlexRow>
            <FlexRow className='w-full items-center justify-start py-2'>
                <Spacer className='w-4 h-4 rounded-sm mr-4 bg-secondary-200'/>
                <Text className='text-secondary-100 text-xs font-semibold'>
                    Returned
                </Text>
            </FlexRow>
            </Div>

        </FlexRow>
    </Div>
);
};