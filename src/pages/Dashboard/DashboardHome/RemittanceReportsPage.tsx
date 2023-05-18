import React, { FC } from 'react';
import { Div, Divider, FlexColumn, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { NavbarMain } from '../../../components/Navigation/NavbarMain';
import { TopNavBar } from '../../../components/Navigation/TopNavBar';
import { ColumnHeader } from '../../../components/Tables/ColumnHeader';
import { DeliveryDataRow } from '../../../components/Tables/DeliveryDataRow';
import { tempPerformanceDataRow, tempDispostionData } from '../../../constants/TempData';
import { Pagination } from '../../../components/Tables/Pagination';

export const RemittanceReportsPage: FC<any> = () => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(5);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newPartners = tempPerformanceDataRow.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    return (
        <FlexRow className='w-full h-full items-center justify-between'>
            {/* Side Navigation */}
            <NavbarMain route='Home' />

            {/* Main Dashboard */}
            <FlexColumn className='w-11/12 h-full'>

                {/* Top Navigation */}
                <TopNavBar
                    showMenu={true}
                    showNotifBell={true}
                    showSearchBar={true}
                />

                {/* Body */}
                <Div className='w-full h-full overflow-y-scroll p-10 bg-white'>
                    <FlexRow className='justify-between w-full'>
                        <Div className='shadow-lg rounded-lg border border-grey-400 p-5 w-3/5 h-48'>
                            <Text className='text-secondary-100 text-xs font-bold'>
                            Remittance History as of
                            </Text>
                        </Div>
                        <FlexColumn className='justify-between shadow-lg rounded-lg border border-grey-400 p-5 w-1/3 h-48'>
                            <Text className='text-secondary-100 text-xs font-bold'>
                                Summary per Reason as of Mar 2023
                            </Text>
                            <Div className='overflow-scroll w-full h-28'>
                            {
                                tempDispostionData.map((list: any) => (
                                    <DeliveryDataRow
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
                        </FlexColumn>
                    </FlexRow>
                    <Spacer className='h-10' />
                    <FlexColumn className='w-full h-3/5'>
                        <Div className='h-full w-full overflow-x-scroll border border-grey-400 rounded-lg shadow-lg p-5'>
                            <FlexRow className='items-center justify-between w-2400px'>
                                <ColumnHeader
                                    title="Tracking No."
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Encoded Date"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Delivery Requirement"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Consignee Name"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Consignee Mobile"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Consignee Address"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Consignee Mobile No."
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Acceptance Date"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Last Status"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Reason"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Disposition"
                                    onClick={() => { }}
                                    containerClass="hover:bg-grey-400 rounded-full w-200px px-4 py-2"
                                    titleClassName=""
                                />
                                <Text className="text-secondary-100 text-xs text-center font-bold w-200px px-4 py-2">
                                    Action
                                </Text>
                            </FlexRow>
                            <Divider className='text-grey-100 my-2 w-2400px' />

                            {
                                tempPerformanceDataRow.map((list: any) => (
                                    <DeliveryDataRow
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
                        <Text className='text-red-400 text-xs font-bold my-2'>
                            {`Disclaimer: Coverage is Twelve (12) months from encoded date.`}
                        </Text>
                        <Div className='w-full'>
                        <Pagination
                        currentPage={currentPage}
                        itemsPerPage={articlesPerPage}
                        paginate={paginate}
                        totalItems={tempPerformanceDataRow.length}
                        />
                        </Div>
                    </FlexColumn>
                </Div>

            </FlexColumn>
        </FlexRow>
    );
};