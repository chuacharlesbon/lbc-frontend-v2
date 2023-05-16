import React, {FC} from 'react';
import { Div, Divider, FlexRow, Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { FaCaretDown } from 'react-icons/fa';

interface DataProps {
	title: string;
    onClick?: any;
    containerClass: string;
    titleClassName: string;
}

export const ColumnHeader: FC<DataProps> = ({
	title,
    onClick,
    containerClass,
    titleClassName,
}) => (
<>
	<FlexRow className={`items-center justify-between ${containerClass}`}>
        <Text className={`text-secondary-100 text-xs font-semibold ${titleClassName}`}>
            {title}
        </Text>
        <Spacer className='w-4' />
        <FaCaretDown className={`text-secondary-100 font-bold ${titleClassName}`} />
	</FlexRow>
</>
)