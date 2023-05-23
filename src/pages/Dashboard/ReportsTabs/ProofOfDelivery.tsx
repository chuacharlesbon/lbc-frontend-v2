import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { ColumnHeader } from '../../../components/Tables';
import { tempProofDeliveryData } from '../../../constants/TempData';
import { Pagination } from '../../../components/Tables/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, RawDropdown } from '../../../core/Buttons';
import { ProofOfDeliveryDataRow } from '../../../components/Tables/ReportsDataRow';
import { AiOutlineDownload } from 'react-icons/ai';

export const ProofOfDelivery: FC<any> = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('active');

    const [singleView, setSingleView] = React.useState('default');

    const [selected, setSelected] = React.useState('default');
    const [selectedList, setSelectedList] = React.useState<string[]>([]);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newList = tempProofDeliveryData.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    React.useEffect(() => {
        if (actionQuery === 'single-view') {
            //
        }
    }, [actionQuery])

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

    return (
        <>
            <Div className='w-full h-full'>
                <FlexRow className='w-full items-center justify-end py-5'>
                    <Div className='w-48'>
                        <RawDropdown
                            icon={<div />}
                            width='w-full'
                            value={`${selectedList.length} Selected`}
                            options={[]}
                            onSelect={setSelected}
                        />
                    </Div>
                    <Button
                        className={`w-40 ml-2 h-10 ${selectedList.length > 0 ? '' : 'phone:bg-grey-400'}`}
                        onClick={() => { }}
                    >
                        <AiOutlineDownload className='mr-4 text-white text-xl' />
                        Download
                    </Button>
                </FlexRow>
                <Div className='w-full border border-grey-400 rounded-lg shadow-lg overflow-y-scroll scrollbar-hide'>
                    <FlexRow className='w-full items-center justify-between py-2 border border-grey-400'>
                        <Spacer />
                        <ColumnHeader
                            title="Booking Ref No."
                            onClick={() => { }}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Booking Date"
                            onClick={() => { }}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Tracking No."
                            onClick={() => { }}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Sender"
                            onClick={() => { }}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Receiver"
                            onClick={() => { }}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                        <ColumnHeader
                            title="Delivery Date"
                            onClick={() => { }}
                            containerClass="hover:bg-grey-400 rounded-full w-15p px-4 py-2"
                            titleClassName=""
                        />
                    </FlexRow>
                    <Div className='w-full'>
                        {
                            newList.map((item: any) => (
                                <ProofOfDeliveryDataRow
                                    data={item}
                                    list={selectedList}
                                    onSelect={onSelectItems}
                                />
                            ))
                        }
                    </Div>
                </Div>
                <Spacer className='w-full h-10' />
                <Div className='w-full'>
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={articlesPerPage}
                        paginate={paginate}
                        totalItems={tempProofDeliveryData.length}
                    />
                </Div>
            </Div>
        </>
    );
};