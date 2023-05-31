import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Image } from '../../../core/Image';
import { Text } from '../../../core/Text';
import { ActivityDataRow, ActivityItemsDataRow, ColumnHeader } from '../../../components/Tables';
import { BookNowSummaryDetails, tempActivityData } from '../../../constants/TempData';
import { Pagination, PaginationCustom } from '../../../components/Tables/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { Images } from '../../../assets/images/images';
import { Button, RawButton, RawDropdown } from '../../../core/Buttons';
import { ImSpinner2 } from 'react-icons/im';

export const ActiveTab: FC<any> = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('active');

    const [loading, setLoading] = React.useState(true);
    const [isAscending, setAscending] = React.useState(true);
    const [sortList, setSortList] = React.useState<any>(tempActivityData);

    const [singleView, setSingleView] = React.useState('default');
    const [selected, setSelected] = React.useState('default');
    const [selectedList, setSelectedList] = React.useState<string[]>([]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newItems = sortList.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    React.useEffect(() => {
        if (actionQuery === 'single-view') {
            //
        }
    }, [actionQuery])

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    const onSelectItems = (id: string) => {
        if (selectedList.includes(id)) {
            const tempList = [...selectedList].filter((value: any) => value !== id);
            setSelectedList(tempList);
        } else {
            const tempList = [...selectedList];
            tempList.push(id);
            setSelectedList(tempList);
        }
    }

    const onSort = async (column: number) => {
        setLoading(true);
        if (isAscending) {
            if(column == 0){
                const tempList = await sortList.sort((a: any, b: any) => {
                    if (a.createdBy < b.createdBy) { return -1; }
                    if (a.createdBy > b.createdBy) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a: any, b: any) => {
                    if (a.bookType < b.bookType) { return -1; }
                    if (a.bookType > b.bookType) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                const tempList = await sortList.sort((a: any, b: any) => {
                    if (a.bookDate < b.bookDate) { return -1; }
                    if (a.bookDate > b.bookDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading(false);
                setAscending(!isAscending);
            }, 1000)
        } else {
            if(column == 0){
                const tempList = await sortList.sort((a: any, b: any) => {
                    if (a.createdBy > b.createdBy) { return -1; }
                    if (a.createdBy < b.createdBy) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 1){
                const tempList = await sortList.sort((a: any, b: any) => {
                    if (a.bookType > b.bookType) { return -1; }
                    if (a.bookType < b.bookType) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }else if(column == 2){
                const tempList = await sortList.sort((a: any, b: any) => {
                    if (a.bookDate > b.bookDate) { return -1; }
                    if (a.bookDate < b.bookDate) { return 1; }
                    return 0;
                });
                setSortList(tempList);
            }
            setTimeout(() => {
                setLoading(false);
                setAscending(!isAscending);
            }, 1000)
        }
    }

    return (
        <>
            {
                singleView === 'default' ?
                    <Div className='w-full '>
                        <Spacer className='w-full h-10' />
                        <Div className='w-full border border-grey-400 rounded-lg shadow-lg'>
                            <FlexRow className='items-center justify-between py-2 border border-grey-400'>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/6 px-4 py-2">
                                    Tracking No.
                                </Text>
                                <ColumnHeader
                                    title="Created by"
                                    onClick={() => onSort(0)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/6 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Book Type"
                                    onClick={() => onSort(1)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/6 px-4 py-2"
                                    titleClassName=""
                                />
                                <ColumnHeader
                                    title="Book Date"
                                    onClick={() => onSort(2)}
                                    containerClass="hover:bg-grey-400 rounded-full w-1/6 px-4 py-2"
                                    titleClassName=""
                                />
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/6 px-4 py-2">
                                    Status
                                </Text>
                                <Text className="text-secondary-100 text-xs text-center font-semibold w-1/6 px-4 py-2">
                                    Action
                                </Text>
                            </FlexRow>
                            {
                                loading ?
                                    <Text className='text-red-400 text-center flex flex-row justify-center items-center my-20'>
                                        <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                        Loading data ...
                                    </Text>
                                    :
                                    <Div className='w-full'>
                                        {
                                            newItems.map((item: any) => (
                                                <ActivityDataRow
                                                    tracking={item.tracking}
                                                    createdBy={item.createdBy}
                                                    bookType={item.bookType}
                                                    bookDate={item.bookDate}
                                                    status={item.status}
                                                    onSelect={setSingleView}
                                                />
                                            ))
                                        }
                                    </Div>
                            }
                        </Div>
                        <Spacer className='w-full h-10' />
                        <Div className='w-full'>
                            <Pagination
                                currentPage={currentPage}
                                itemsPerPage={articlesPerPage}
                                paginate={paginate}
                                totalItems={tempActivityData.length}
                            />
                        </Div>
                    </Div>
                    :
                    <Div className='w-full'>
                        <Spacer className='w-full h-10' />
                        <Div className='w-full rounded-sm shadow-sm border border-grey-400 p-10'>
                            <FlexRow className='w-full items-center justify-start'>
                                <Image className='h-14 w-14' alt='LBC logo' src={Images.LBClogo} />
                                <Div className='ml-10 mr-auto'>
                                    <Text className='text-sm text-secondary-200'>
                                        MULTIPLE BOOKING REFERENCE NO.
                                    </Text>
                                    <Text className='text-xl text-secondary-200 font-bold'>
                                        {singleView}
                                    </Text>
                                </Div>
                                <Div className='ml-auto'>
                                    <FlexRow>
                                        <RawDropdown
                                            icon={<div />}
                                            width='w-full'
                                            value={`${selectedList.length} Selected`}
                                            options={[]}
                                            onSelect={setSelected}
                                        />
                                        <Button
                                            className='w-72 ml-2 h-10'
                                            onClick={() => { }}
                                        >
                                            Print Air Waybill
                                        </Button>
                                    </FlexRow>
                                </Div>
                            </FlexRow>

                            <Spacer className='h-5' />

                            {
                                BookNowSummaryDetails.map((list: any) => (
                                    <ActivityItemsDataRow
                                        data={list}
                                        onSelect={onSelectItems}
                                    />
                                ))
                            }
                        </Div>

                        <Spacer className='w-full h-10' />
                        <Div className='w-full'>
                            <PaginationCustom
                                element2={
                                    <RawButton className='text-secondary-200 mx-4' onClick={() => setSingleView('default')}>
                                        Go Back
                                    </RawButton>
                                }
                                currentPage={currentPage}
                                itemsPerPage={articlesPerPage}
                                paginate={paginate}
                                totalItems={tempActivityData.length}
                            />
                        </Div>
                    </Div>
            }
        </>
    );
};