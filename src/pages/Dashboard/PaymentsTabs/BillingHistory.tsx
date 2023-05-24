import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { tempBillingHistoryData } from '../../../constants/TempData';
import { Pagination } from '../../../components/Tables/Pagination';
import { ImSpinner2 } from 'react-icons/im';

export const BillingHistory: FC<any> = () => {

    const [loading, setLoading] = React.useState(true);

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

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
                <Spacer className='w-10 h-10' />
                <FlexRow className='w-full h-4/5 items-center justify-center border border-grey-400 rounded-lg shadow-lg'>
                    {
                        loading ?
                            <Text className='text-red-400 text-center flex flex-row justify-center items-center my-40'>
                                <ImSpinner2 className="animate-spin mr-2 text-2xl desktop:text-3xl" />
                                Loading data ...
                            </Text>
                            :
                            <Text className='text-secondary-200 text-sm text-center desktop:text-base'>
                                No data to be displayed
                            </Text>
                    }
                </FlexRow>
                <Spacer className='w-full h-10' />
                <Div className='w-full'>
                    <Pagination
                        currentPage={currentPage}
                        itemsPerPage={articlesPerPage}
                        paginate={paginate}
                        totalItems={tempBillingHistoryData.length}
                    />
                </Div>
            </Div>
        </>
    );
};