import React, { FC } from 'react';
import { CSVLink } from 'react-csv';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { ColumnHeader } from '../../../components/Tables';
import { tempProofDeliveryData } from '../../../constants/TempData';
import { Pagination } from '../../../components/Tables/Pagination';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, RawDropdown } from '../../../core/Buttons';
import { ProofOfDeliveryDataRow } from '../../../components/Tables/ReportsDataRow';
import { AiOutlineDownload } from 'react-icons/ai';
import { ImSpinner2 } from 'react-icons/im';

export const ProofOfDelivery: FC<any> = () => {

    const navigate = useNavigate();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('active');

    const [loading, setLoading] = React.useState(true);

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

    // CSV Variables
    const newDate = new Date();
    const fileName = newDate.getTime();

    const headers: any = [
        { label: "Booking Reference", key: "tracking" },
        { label: "Booking Date", key: "bookDate" },
        { label: "Tracking Number", key: "tracking" },
        { label: "Sender", key: "sender" },
        { label: "Receiver", key: "receiver" },
        { label: "Delivery Date", key: "bookDate" },
    ];

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
                    <CSVLink data={tempProofDeliveryData} filename={`LBC-${fileName}.csv`} headers={headers}>
                        <Div className={`text-white text-center font-semibold bg-red-400 hover:bg-opacity-80 rounded-lg p-2 inline-flex justify-center items-center w-40 ml-2 h-10 ${selectedList.length > 0 ? '' : 'phone:bg-grey-400 cursor-not-allowed'}`}>
                            <AiOutlineDownload className='mr-4 text-white text-xl' />
                            Download
                        </Div>
                    </CSVLink>
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
                    {
                        loading ?
                            <Text className='text-red-400 text-center flex flex-row justify-center items-center my-40'>
                                <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                Loading data ...
                            </Text>
                            :
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
                    }
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