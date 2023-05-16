import React, {FC} from 'react';
import { Div, Divider, FlexRow } from '../../core/Containers';
import { Text } from '../../core/Text';

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

export const RecentBookingSummary: FC<DataProps> = ({
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
	<FlexRow className='items-start justify-between w-full'>
        <Div className='w-1/2 px-2'>
            <Text className='text-red-100 text-xs font-semibold'>
                {deliveryId}
            </Text>
            <Text className='text-secondary-100 text-xs'>
                Booked By {clientNameFrom}
            </Text>
            <Text className='text-secondary-200 text-xs'>
                {clientNameTo}
            </Text>
        </Div>
        <Div className='w-1/2 px-2'>
            <Text className='text-yellow-100 text-xs text-right font-semibold'>
                {logisticsType.toUpperCase()}
            </Text>
            <Text className='text-yellow-100 text-xs text-right'>
                {transactionDate}
            </Text>
        </Div>
	</FlexRow>
	<Divider className="text-grey-400 my-5" />
</>
)