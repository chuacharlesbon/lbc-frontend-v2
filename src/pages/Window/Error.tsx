import React, { FC } from 'react';
import { Div } from '../../core/Containers';
import { Image } from '../../core/Image';
import { Images } from '../../assets/images/images';
import { Text } from '../../core/Text';
import { ImWarning } from 'react-icons/im';
import { Link } from 'react-router-dom';

export const Error: FC<any> = () => {

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex flex-col justify-center items-center'>
            <Link to='/'>
                <Image className='h-32 w-32' alt='LBC logo' src={Images.LBClogo} />
            </Link>
            <Text className='text-secondary-200 text-2xl text-center font-bold flex flex-row justify-center items-center my-4'>
                <ImWarning className="text-red-400 mr-2" />
                404 Not Found
            </Text>
            <Text className='text-secondary-200 text-sm text-center flex flex-row justify-center items-center my-4 w-300px'>
                The page you're looking for might non-existing, on different URL, or no permission to view.
            </Text>
        </Div>
    );
};

export const Incompatible: FC<any> = () => {

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex flex-col justify-center items-center'>
            <Link to='/'>
                <Image className='h-32 w-32' alt='LBC logo' src={Images.LBClogo} />
            </Link>
            <Text className='text-secondary-200 text-2xl text-center font-bold flex flex-row justify-center items-center my-4'>
                <ImWarning className="text-red-400 mr-2" />
                Oops!
            </Text>
            <Text className='text-secondary-200 text-sm text-center flex flex-row justify-center items-center my-4 w-300px'>
                This device is temporarily incompatible
            </Text>
        </Div>
    );
};