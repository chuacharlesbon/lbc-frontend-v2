import { FC } from 'react';
import { Div, FlexColumn, Spacer } from '../../core/Containers';
import { Text } from '../../core/Text';
import { Image } from '../../core/Image';
import { ImHome } from 'react-icons/im';
import { IoMdApps } from 'react-icons/io';
import { AiFillBook } from 'react-icons/ai';
import { CgCalendarDates } from 'react-icons/cg';
import { FaTruck, FaQuestionCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { BookNowOptions } from '../../constants/Dropdowns';
import { Images } from '../../assets/images/images';

interface NavigationProps {
	route: string;
}

export const NavbarMain: FC<NavigationProps> = ({route}) => {

return (
    <FlexColumn className='bg-red-400 h-full w-32 py-5 items-center justify-between'>
        <Div>
        <FlexColumn className='mx-auto justify-center items-center w-24'>
            <Image className='h-14 w-14' alt='LBC logo' src={Images.LBClogo}/>
            <Text className='text-white text-xs text-center'>
                BUSINESS
            </Text>
            <Text className='text-white text-xs text-center'>
                SOLUTIONS
            </Text>
        </FlexColumn>

        <Spacer className='border border-white bg-white my-2' />
        
        <Link to='/dashboard-home'>
        <FlexColumn className={`${route === 'Home' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
            <ImHome className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Home
            </Text>
        </FlexColumn>
        </Link>

        <Link to='/book-now'>
        <FlexColumn className={`${route === 'Book Now' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white parentToolTip`}>
            <AiFillBook className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Book Now
            </Text>

            <Div className='childTooltip left-full pl-5 z-10'>
                <Div className='w-48 p-5 rounded-lg shadow-lg bg-white border border-grey-400'>
                    {
                        BookNowOptions.map((link: any) => (
                            <Link className='block text-secondary-100 hover:text-red-100 hover:font-bold hover:bg-grey-400 p-2' to={link.url}>
                                {link.name}
                            </Link>
                        ))
                    }
                </Div>
            </Div>
        </FlexColumn>
        </Link>

        <Link to='/activity'>
        <FlexColumn className={`${route === 'Activity' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
            <CgCalendarDates className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Activity
            </Text>
        </FlexColumn>
        </Link>

        <Link to='/reports'>
        <FlexColumn className={`${route === 'Reports' ? 'text-white' : 'text-secondary-200'} mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
            <FaTruck className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Reports
            </Text>
        </FlexColumn>
        </Link>

        </Div>

        <Div>
        <FlexColumn className={`text-white mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
            <IoMdApps className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Tools
            </Text>
        </FlexColumn>
        <FlexColumn className={`text-white mx-auto py-5 justify-center items-center w-24 rounded-lg hover:bg-red-100 hover:bg-opacity-50 hover:text-white`}>
            <FaQuestionCircle className={`text-2xl`}/>
            <Text className={`text-xs text-center`}>
                Help
            </Text>
        </FlexColumn>
        </Div>
    </FlexColumn>
);
};