import React, {FC} from 'react';
import { Div, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FaRegEdit } from 'react-icons/fa';

interface DataProps {
	data: any;
}

export const BookNowDataSummaryRow: FC<DataProps> = ({
	data,
}) => (
<>
	<FlexRow className='items-start justify-between w-full py-2 hover:bg-grey-400'>

        <Div className='w-1/5'>
        <Text className='text-secondary-100 text-sm'>
            {data.package}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            Item
        </Text>
        </Div>
        
        <Div className='w-1/5'>
        <Text className='text-secondary-100 text-sm'>
            {data.sender.name}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.sender.contac}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.sender.address}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.sender.type}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.sender.pickUpDate}
        </Text>
        </Div>

        <Div className='w-1/5'>
        <Text className='text-secondary-100 text-sm'>
            {data.receiver.name}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.receiver.contac}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.receiver.address}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            {data.receiver.type}
        </Text>
        </Div>

        <Div className='w-1/5'>
        <Text className='text-secondary-100 text-sm'>
            PHP {data.amount.value}
        </Text>
        <Text className='text-secondary-100 text-sm'>
            View Breakdown
        </Text>
        </Div>

        <Div className='w-1/5'>
        <Text className='text-secondary-100 text-sm'>
            {data.disbursal.type}
        </Text>
        </Div>
	</FlexRow>
</>
)