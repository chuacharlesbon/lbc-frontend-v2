import React, { FC } from 'react';
import { Switch } from '@headlessui/react';
import { Div, FlexRow, Spacer, Divider } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { AnalyticsDropdown } from '../../../core/Buttons/AnalyticsDropdown';
import { ResponsiveBar } from '@nivo/bar';
import { FaUserCircle } from 'react-icons/fa';
import { tempBarGraphData } from '../../../constants/TempData';
import { getCookie } from '../../../hooks';
import { ImSpinner2 } from 'react-icons/im';
import { RawButton } from '../../../core/Buttons';

export const Analytics: FC<any> = () => {

    const [customLegend, setLegend] = React.useState(false);

    const [loading, setLoading] = React.useState(true);
    const [loading1, setLoading1] = React.useState(true);

    const firstname: string = getCookie('firstName').toString();
    const lastname: string = getCookie('lastName').toString();
    const newDate = new Date().toString().substring(4, 21);

    const [enabled, setEnabled] = React.useState(true);
    const [current, setCurrent] = React.useState('Delivery Status');
    const [sortDeliveryStatus, setSortDeliveryStatus] = React.useState<string[]>(['Make Default']);
    const [sortRemittanceStatus, setSortRemittanceStatus] = React.useState<string[]>(['Make Default']);

    const colors = ['#F79520', '#F37777', '#63C9A8', '#3173AF', '#202123B3'];

    const onSelectItems = (type: string, sort: string) => {
        if (type === 'Delivery Status') {
            if (sort === 'Make Default' && !sortDeliveryStatus.includes('Make Default')) {
                setSortDeliveryStatus([sort])
            } else if (sort !== 'Make Default' && sortDeliveryStatus.includes('Make Default')) {
                setSortDeliveryStatus([sort])
            } else if (sort === 'Others' && sortDeliveryStatus.includes('Make Default')) {
                setSortDeliveryStatus(['Others', 'Picked up/Dropped Off'])
            } else if (sort === 'Others' && sortDeliveryStatus.includes('Others')) {
                const tempList = [...sortDeliveryStatus].filter((value: any) => value !== sort && value !== 'Picked up/Dropped Off');
                setSortDeliveryStatus(tempList);
            } else if (sort === 'Others' && !sortDeliveryStatus.includes('Others')) {
                const tempList = [...sortDeliveryStatus];
                tempList.push(sort);
                tempList.push('Picked up/Dropped Off');
                setSortDeliveryStatus(tempList);
            } else if (sortDeliveryStatus.includes(sort)) {
                const tempList = [...sortDeliveryStatus].filter((value: any) => value !== sort);
                setSortDeliveryStatus(tempList);
            } else {
                const tempList = [...sortDeliveryStatus];
                tempList.push(sort);
                setSortDeliveryStatus(tempList);
            }
        } else {
            if (sortRemittanceStatus.includes(sort)) {
                const tempList = [...sortRemittanceStatus].filter((value: any) => value !== sort);
                setSortRemittanceStatus(tempList);
            } else {
                const tempList = [...sortRemittanceStatus];
                tempList.push(sort);
                setSortRemittanceStatus(tempList);
            }
        }
    }

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
        setTimeout(() => {
            setLoading1(false);
        }, 1500)
    }, [])

    return (
        <Div className='border border-grey-400 rounded-xl shadow-lg w-2/5 h-full'>
            <FlexRow className='items-center justify-start p-5'>
                <FaUserCircle className='text-grey-300 rounded-full w-10 h-10 laptop:h-16 laptop:w-16' />
                <Spacer className='w-5' />
                <Div>
                    <Text className='text-secondary-100 font-bold text-2xl laptop:text-3xl'>
                        Hello, {firstname}{' '}{lastname}!
                    </Text>
                    <Text className='text-secondary-200'>
                        Account Number: 1087468768798790
                    </Text>
                </Div>
            </FlexRow>
            <Divider className='text-grey-400' />
            <FlexRow>
                <AnalyticsDropdown
                    onSelectMenu={setCurrent}
                    onSelectSubMenu={onSelectItems}
                    list1={sortDeliveryStatus}
                    list2={sortRemittanceStatus}
                />
            </FlexRow>

            {
                loading ?
                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-10'>
                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                    </Text>
                    :
                    <Div className='w-full'>
                        <FlexRow className='items-start justify-between px-2'>
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
                        <Divider className='text-grey-400 p-2' />
                        <FlexRow className='items-start justify-between px-2'>
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
            }

            <Spacer className='w-5 h-5' />

            <FlexRow className='items-center justify-start px-5'>
                <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${enabled ? 'bg-red-400' : 'bg-secondary-200'
                        } relative inline-flex h-6 w-12 items-center rounded-full`}
                >
                    <span className="sr-only">{''}</span>
                    <span
                        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
                            } inline-block h-4 w-4 transform rounded-full bg-white transition text-red-400`}
                    />
                </Switch>
                <Spacer className='w-5 h-5' />
                <Text className='text-secondary-200 text-sm'>
                    Show labels
                </Text>
                <RawButton className='ml-auto cursor-auto' onClick={() => setLegend(!customLegend)}>
                    <div title='This is Test Debugger Button'>
                    <Text className='text-secondary-200 text-sm'>
                        Data Updates as of {newDate}
                    </Text>
                    </div>
                </RawButton>

            </FlexRow>

            <Spacer className='w-10 h-10' />

            {/* Bar Graph */}
            {
                loading1 ?
                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-16'>
                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                    </Text>
                    :
                    <Div className='h-200px w-full '>
                        <ResponsiveBar
                            enableLabel={enabled}
                            data={tempBarGraphData}
                            keys={
                                sortDeliveryStatus.includes('Make Default')
                                    ? [
                                        'Picked up/Dropped Off',
                                        'For Disposition',
                                        'In-transit',
                                        'Delivered',
                                        'Returned',
                                    ]
                                    : sortDeliveryStatus
                            }
                            indexBy="country"
                            margin={
                                customLegend ?
                                { top: 50, right: 50, bottom: 50, left: 50 }
                                :
                                { top: 0, right: 200, bottom: 50, left: 0 }
                            }
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
                            legends={
                                customLegend ?
                                    []
                                    :
                                    [
                                        {
                                            dataFrom: 'keys',
                                            anchor: 'bottom-right',
                                            direction: 'column',
                                            justify: false,
                                            translateX: 120,
                                            translateY: 0,
                                            itemsSpacing: 2,
                                            itemWidth: 100,
                                            itemHeight: 20,
                                            itemDirection: 'left-to-right',
                                            itemOpacity: 0.85,
                                            symbolSize: 20,
                                            effects: [
                                                {
                                                    on: 'hover',
                                                    style: {
                                                        itemOpacity: 1
                                                    }
                                                }
                                            ]
                                        }
                                    ]}
                            role="application"
                            ariaLabel="Nivo bar chart demo"
                            barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                        />
                    </Div>
            }

            {/*  Custom Legends - ( Non-Interactive ) */}
            {
                customLegend ?
                    <FlexRow className='items-start justify-start'>
                        {
                            sortDeliveryStatus.includes('Others') || sortDeliveryStatus.includes('Make Default') ?
                                <FlexRow className='w-1/3 items-center justify-center p-2'>
                                    <Spacer className='w-4 h-4 rounded-sm mr-4 bg-yellow-100' />
                                    <Text className='text-secondary-100 text-xs font-semibold'>
                                        Picked Up/ Dropped Off
                                    </Text>
                                </FlexRow>
                                :
                                <></>
                        }
                        <Div className={`w-1/3 p-2 ${sortDeliveryStatus.includes('For Disposition') || sortDeliveryStatus.includes('In-transit') || sortDeliveryStatus.includes('Make Default') ? '' : 'hidden'}`}>
                            {
                                sortDeliveryStatus.includes('For Disposition') || sortDeliveryStatus.includes('Make Default') ?
                                    <FlexRow className='w-full items-center justify-start py-2'>
                                        <Spacer className='w-4 h-4 rounded-sm mr-4 bg-red-100' />
                                        <Text className='text-secondary-100 text-xs font-semibold'>
                                            For Disposition
                                        </Text>
                                    </FlexRow>
                                    :
                                    <></>
                            }
                            {
                                sortDeliveryStatus.includes('In-transit') || sortDeliveryStatus.includes('Make Default') ?
                                    <FlexRow className='w-full items-center justify- py-2'>
                                        <Spacer className='w-4 h-4 rounded-sm mr-4 bg-blue-100' />
                                        <Text className='text-secondary-100 text-xs font-semibold'>
                                            In-transit
                                        </Text>
                                    </FlexRow>
                                    :
                                    <></>
                            }
                        </Div>
                        <Div className={`w-1/3 p-2 ${sortDeliveryStatus.includes('Delivered') || sortDeliveryStatus.includes('Returned') || sortDeliveryStatus.includes('Make Default') ? '' : 'hidden'}`}>
                            {
                                sortDeliveryStatus.includes('Delivered') || sortDeliveryStatus.includes('Make Default') ?
                                    <FlexRow className='w-full items-center justify-start py-2'>
                                        <Spacer className='w-4 h-4 rounded-sm mr-4 bg-green-100' />
                                        <Text className='text-secondary-100 text-xs font-semibold'>
                                            Delivered
                                        </Text>
                                    </FlexRow>
                                    :
                                    <></>
                            }
                            {
                                sortDeliveryStatus.includes('Returned') || sortDeliveryStatus.includes('Make Default') ?
                                    <FlexRow className='w-full items-center justify-start py-2'>
                                        <Spacer className='w-4 h-4 rounded-sm mr-4 bg-secondary-200' />
                                        <Text className='text-secondary-100 text-xs font-semibold'>
                                            Returned
                                        </Text>
                                    </FlexRow>
                                    :
                                    <></>
                            }
                        </Div>

                    </FlexRow>
                    :
                    <></>
            }
        </Div>
    );
};