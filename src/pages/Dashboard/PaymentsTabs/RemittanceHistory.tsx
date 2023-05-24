import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { tempRemittanceHistoryData } from '../../../constants/TempData';
import { Pagination } from '../../../components/Tables/Pagination';
import { RemittanceHistoryDataRow } from '../../../components/Tables/ReportsDataRow';
import { RemittanceHistoryColumns } from '../../../constants/ConstantsData';
import { ImSpinner2 } from 'react-icons/im';

export const RemittanceHistory: FC<any> = () => {

    const [loading, setLoading] = React.useState(true);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newList = tempRemittanceHistoryData.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    React.useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <>
            <Div className='w-full h-full'>
                <FlexRow className='items-center justify-between py-5'>
                    <Spacer />
                    <input className='w-48 block rounded-lg' type='date' value='2023-01-01' />
                </FlexRow>
                <Div className='w-full border border-grey-400 rounded-lg shadow-lg overflow-y-scroll scrollbar-hide'>
                    <FlexRow className='w-full items-center justify-between py-2 border border-grey-400'>
                        {
                            RemittanceHistoryColumns.map((column) => (
                                <Text className={`text-secondary-100 text-sm text-center font-semibold px-4 py-2 ${column === 'Payment Status' ? 'w-1/4' : 'w-1/8'}`}>
                                    {column}
                                </Text>
                            ))
                        }
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
                                        <RemittanceHistoryDataRow
                                            data={item}
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
                        totalItems={tempRemittanceHistoryData.length}
                    />
                </Div>
            </Div>
        </>
    );
};