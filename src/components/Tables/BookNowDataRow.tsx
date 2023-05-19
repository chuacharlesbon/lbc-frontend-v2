import React, {FC} from 'react';
import { FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

interface DataProps {
	deliveryId: string;
}

export const BookNowDataRow: FC<DataProps> = ({
	deliveryId,
}) => (
<>
	<FlexRow className='items-center justify-between w-3000px py-2 hover:bg-grey-400'>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <FlexRow className='items-center justify-center w-200px'>
            <RiDeleteBin6Line className='text-red-100 text-xl mr-2' />
            <FaRegEdit className='text-red-100 text-xl ml-2' />
        </FlexRow>
	</FlexRow>
</>
)