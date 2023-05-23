import React, { FC } from 'react';
import { Div, FlexRow, Spacer } from '../../../core/Containers';
import { Text } from '../../../core/Text';
import { tempBillingHistoryData } from '../../../constants/TempData';
import { Pagination } from '../../../components/Tables/Pagination';

export const BillingHistory: FC<any> = () => {

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(10);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    return (
        <>
            <Div className='w-full h-full'>
                <Spacer className='w-10 h-10' />
                <FlexRow className='w-full h-4/5 items-center justify-center border border-grey-400 rounded-lg shadow-lg'>
                    <Text className='text-secondary-200 text-sm text-center'>
                        No data to be displayed
                    </Text>
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