import React, {FC} from 'react';
import { Div, Divider, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';
import { RawInput } from '../../core/Forms';
import { ImUpload3 } from 'react-icons/im';
import { FaRegEdit } from 'react-icons/fa';

interface DataProps {
	deliveryId: string;
    deliverySize: string;
    logisticsType: string;
    deliveryDate: string;
    transactionDate: string;
	clientNameFrom: string;
    clientAddressFrom: string;
    clientNameTo: string;
    clientAddressTo: string;
}

export const DeliveryDataRow: FC<DataProps> = ({
	deliveryId,
    deliverySize,
    logisticsType,
    deliveryDate,
    transactionDate,
	clientNameFrom,
    clientAddressFrom,
    clientNameTo,
    clientAddressTo,
}) => (
<>
	<FlexRow className='items-center justify-between w-2400px py-2 hover:bg-grey-400'>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {deliveryId}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {deliverySize}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {logisticsType}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {deliveryDate}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {transactionDate}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientNameFrom}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientAddressFrom}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientNameTo}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            {clientAddressTo}
        </Text>
        <Text className='text-secondary-100 text-sm w-200px px-4'>
            Test
        </Text>
        <RawInput
            className='phone:border-grey-400'
            containerClass='w-200px'
            name='disposition'
            placeholder=''
            onChange={() => {}}
            type='disposition'
            value=''
        />
        <FlexRow className='items-center justify-center w-200px'>
            <ImUpload3 className='text-red-100 text-xl mr-2' />
            <FaRegEdit className='text-red-100 text-xl ml-2' />
        </FlexRow>
	</FlexRow>
</>
)