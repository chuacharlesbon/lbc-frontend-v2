import React, { FC } from 'react';
import { Div, Divider, FlexColumn, FlexRow, Spacer } from '../../../core/Containers';
import { Span, Text } from '../../../core/Text';
import { ColumnHeader } from '../../../components/Tables';
import { Button, RawButton } from '../../../core/Buttons';
import { ImUpload3, ImInfo } from 'react-icons/im';
import { Link, useLocation } from 'react-router-dom';
import { BookNowDataRow } from '../../../components/Tables/BookNowDataRow';
import { BookNowSummaryColumn } from '../../../constants/ConstantsData';
import { BookNowSummaryDetails } from '../../../constants/TempData';
import { BookNowDataSummaryRow } from '../../../components/Tables/BookNowSummaryRow';
import { CheckBox } from '../../../core/Forms';
import { BookNowModal } from '../../../components/Modals/BookNowModal';

export const BookNowTab: FC<any> = () => {

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('booking');

    const [bookType, setBookType] = React.useState('default');
    const [bookAdded, setBookAdded] = React.useState(false);
    
    const [isToastOpenA, setToastOpenA] = React.useState(false);

    React.useEffect(() => {
        if (actionQuery === 'added') {
            setBookAdded(true)
        }
    }, [actionQuery])

    return (
        <>
            <BookNowModal
                isOpen={isToastOpenA}
                onClose={() => setToastOpenA(false)}
            />
            {
                bookType === 'summary' ?
                    <FlexColumn className='w-full h-4/5 desktop:h-full overflow-y-scroll scrollbar-hide'>
                        <Spacer className='p-5' />
                        <Text className='text-secondary-200 font-bold'>
                            SUMMARY
                        </Text>
                        <Text className='text-secondary-200'>
                            Kindly review the summary details before placing your order
                        </Text>
                        <Spacer className='p-5' />

                        <Div className='w-full border border-grey-400 rounded-md p-5'>
                            <Text className='text-secondary-200 font-bold'>
                                BOOKING DETAILS
                            </Text>
                            <FlexRow className='w-full items-center justify-between py-2 border-b-2 border-secondary-200'>
                                {
                                    BookNowSummaryColumn.map((item: any) => (
                                        <Div className={`${item.width}`}>
                                            <Text className='text-secondary-200 text-left font-bold'>
                                                {item.name}
                                            </Text>
                                        </Div>
                                    ))
                                }
                            </FlexRow>
                            <Div className='h-3/4 desktop:h-400px overflow-y-scroll py-5'>
                                {
                                    BookNowSummaryDetails.map((list: any) => (
                                        <BookNowDataSummaryRow
                                            data={list}
                                        />
                                    ))
                                }
                            </Div>

                        </Div>

                        <CheckBox
                            containerClass='w-full py-4'
                            id='agreement'
                            name='agreement'
                            label={
                                <Text className='text-secondary-200 text-xs'>
                                    I  have read, understood and agree to<a className='m-1 text-red-400 text-xs underline' href='https://www.lbcexpress.com' rel="noreferrer" target='_blank'>LBC’s Terms of Service</a>and
                                    <a className='ml-1 text-red-400 text-xs underline' href='https://www.lbcexpress.com' rel="noreferrer" target='_blank'>Privacy Policy</a>
                                </Text>
                            }
                        />

                        <FlexRow className='w-full items-center justify-center pt-5 pb-20'>
                            <Button
                                className='w-32 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                onClick={() => setBookType('default')}
                            >
                                Back
                            </Button>
                            <Button
                                className='w-32 ml-2 h-10'
                                onClick={() => { }}
                            >
                                View Activity
                            </Button>
                        </FlexRow>

                    </FlexColumn>
                    :
                    <></>
            }
            {
                bookType === 'default' ?
                    <FlexColumn className='w-full h-4/5 desktop:h-full overflow-y-scroll scrollbar-hide'>
                        <Spacer className='h-5' />
                        <FlexRow className='items-center justify-between'>
                            <Text className='text-secondary-200 font-bold'>
                                BOOKING DETAILS
                            </Text>
                            <input className='w-48 block rounded-lg' type='date' value='2023-01-01' />
                        </FlexRow>
                        <Spacer className='h-5' />

                        <Div className='w-full overflow-x-scroll'>
                            <FlexRow className='items-center justify-between w-3000px'>
                                <ColumnHeader
                                    icon={false}
                                    title="Send via"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Sender"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Deliver via"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Receiver"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Item Name"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Item Name (Value)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Shipment Mode"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="COD Amount (PHP)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Actual Weight (kg)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Item Dimension L x W x H (cm)"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Packaging"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Special Instructions"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Freight Free"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="COP/COD Amount"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    icon={false}
                                    title="Action"
                                    onClick={() => { }}
                                    containerClass="w-200px px-4 py-2 phone:justify-center"
                                    titleClassName=""
                                />
                            </FlexRow>
                            <Divider className='text-grey-100 my-2 w-3000px' />

                            {
                                bookAdded ?
                                    <Div>
                                        <BookNowDataRow deliveryId='1' />
                                        <BookNowDataRow deliveryId='1' />
                                        <BookNowDataRow deliveryId='1' />
                                    </Div>
                                    :
                                    <></>
                            }

                        </Div>

                        <Div className='w-full h-3/4 desktop:h-4/5 p-2 overflow-y-scroll scrollbar-hide'>

                            <FlexRow className='justify-center w-full'>
                                <RawButton className='bg-grey-500 hover:bg-grey-400 rounded-lg p-2' onClick={() => setToastOpenA(true)}>
                                    <Text className='text-secondary-200 text-sm font-bold'>
                                        + Add Booking
                                    </Text>
                                </RawButton>
                            </FlexRow>

                            <Text className='text-secondary-200 text-center my-2'>
                                OR
                            </Text>

                            <FlexRow className='items-center justify-between w-full'>
                                <Spacer className='border-t-2 border-grey-400 w-2/5' />
                                <Text className='text-secondary-200 text-center font-semibold w-1/5'>
                                    UPLOAD EXCEL
                                </Text>
                                <Spacer className='border-t-2 border-grey-400 w-2/5' />
                            </FlexRow>

                            <FlexColumn className='items-center jusitfy-center w-96 m-5 p-5 mx-auto rounded-lg bg-grey-500 hover:bg-grey-400'>
                                <ImUpload3 className='text-grey-300 text-center' />
                                <FlexRow className='items-center jusitfy-center'>
                                    <Text className='text-secondary-200 text-sm my-2'>
                                        Drop xlsx or
                                    </Text>
                                    <RawButton>
                                        <Text className='text-blue-100 text-sm my-2 mx-1 hover:underline'>
                                            browse
                                        </Text>
                                    </RawButton>
                                </FlexRow>
                            </FlexColumn>

                            <Link to="/sample_lbc_book_now.xlsx" target="_blank" download className="text-blue-100 text-center text-sm mx-auto hover:underline block">Download a sample .xlsx template</Link>

                            <Spacer className='h-5' />

                            <Div className='bg-grey-300 py-2'>
                                <Div className='w-3/4 mx-auto'>
                                    <Text className='flex flex-row items-center jusitfy-center text-secondary-200 text-xs font-bold'>
                                        <ImInfo className='inline mr-2' />
                                        <Span>Helpful Tips</Span>
                                    </Text>
                                    <Div className='px-10'>
                                        <Text className='text-secondary-200 text-xs'>
                                            &#x2022; Make sure you fill out the correct Item Value for each order. This will be the basis of COD/COP Item Value collection
                                        </Text>
                                        <Text className='text-secondary-200 text-xs'>
                                            &#x2022; For Home Delivery, ensure that your area is serviceable. Check serviceable areas<a className='m-1 text-blue-100 text-xs underline' href='https://www.lbcexpress.com/branches' rel="noreferrer" target='_blank'>here.</a>For Branch Pick Ups, find branches
                                            <a className='ml-1 text-blue-100 text-xs underline' href='https://www.lbcexpress.com/branches' rel="noreferrer" target='_blank'>here.</a>
                                        </Text>
                                        <Text className='text-secondary-200 text-xs'>
                                            &#x2022; After booking your orders, check the <Link className='m-1 text-blue-100 text-xs underline' to='/'>Dashboard</Link> to view the Booking Reference Number list
                                        </Text>
                                    </Div>
                                </Div>
                            </Div>
                        </Div>
                    </FlexColumn>
                    :
                    <></>
            }
        </>
    );
};