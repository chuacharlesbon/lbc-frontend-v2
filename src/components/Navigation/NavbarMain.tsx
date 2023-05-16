import { FC } from 'react';
import { Div, FlexColumn } from '../../core/Containers';
import { Text } from '../../core/Text';
import { Image } from '../../core/Image';
import { ImHome } from 'react-icons/im';
import { IoMdApps } from 'react-icons/io';
import { AiFillBook } from 'react-icons/ai';
import { CgCalendarDates } from 'react-icons/cg';
import { FaTruck, FaQuestionCircle } from 'react-icons/fa';

interface NavigationProps {
	route: string;
}

export const NavbarMain: FC<NavigationProps> = ({route}) => {

return (
    <FlexColumn className='bg-red-100 h-full w-32 py-5 items-center justify-between'>
        <Div>
        <FlexColumn className='mx-auto py-5 justify-center items-center w-24'>
            <Image
                alt='LBC'
                className='border border-grey-400 bg-white hover:bg-grey-400 rounded-lg h-10 w-10'
                src='N/A'
            />
            <Text className='text-white text-xs text-center'>
                BUSINESS
            </Text>
            <Text className='text-white text-xs text-center'>
                SOLUTIONS
            </Text>
        </FlexColumn>
        <FlexColumn className={`${route === 'Home' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-400 hover:bg-opacity-50 hover:text-white`}>
            <ImHome className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Home
            </Text>
        </FlexColumn>
        <FlexColumn className={`${route === 'Book Now' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-400 hover:bg-opacity-50 hover:text-white`}>
            <AiFillBook className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Book Now
            </Text>
        </FlexColumn>
        <FlexColumn className={`${route === 'Activity' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-400 hover:bg-opacity-50 hover:text-white`}>
            <CgCalendarDates className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Activity
            </Text>
        </FlexColumn>
        <FlexColumn className={`${route === 'Reports' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-400 hover:bg-opacity-50 hover:text-white`}>
            <FaTruck className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Reports
            </Text>
        </FlexColumn>
        </Div>

        <Div>
        <FlexColumn className={`text-white mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-400 hover:bg-opacity-50 hover:text-white`}>
            <IoMdApps className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Tools
            </Text>
        </FlexColumn>
        <FlexColumn className={`text-white mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-400 hover:bg-opacity-50 hover:text-white`}>
            <FaQuestionCircle className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Help
            </Text>
        </FlexColumn>
        </Div>
    </FlexColumn>
);
};