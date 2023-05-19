import React, {FC} from 'react';
import { Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { FaCaretDown } from 'react-icons/fa';
import { RawButton } from '../../core/Buttons';

interface DataProps {
	title: string;
    onClick?: any;
    containerClass: string;
    titleClassName: string;
    icon?: boolean;
}

export const ColumnHeader: FC<DataProps> = ({
	title,
    onClick,
    containerClass,
    titleClassName,
    icon
}) => (
<>
    <RawButton className={`flex flex-row items-center justify-between ${containerClass}`} onClick={onClick}>
        <Text className={`text-secondary-100 text-xs font-semibold ${titleClassName}`}>
            {title}
        </Text>
        <Spacer className={`${icon ?? true ? 'w-4' : 'hidden'}`} />
        <FaCaretDown className={`text-secondary-100 font-bold ${icon ?? true ? '' : 'hidden'} ${titleClassName}`} />
	</RawButton>
</>
)