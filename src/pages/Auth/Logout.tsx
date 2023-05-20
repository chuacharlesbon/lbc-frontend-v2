import React, { FC } from 'react';
import { Div } from '../../core/Containers';
import { Image } from '../../core/Image';
import { Images } from '../../assets/images/images';
import { Text } from '../../core/Text';
import { ImSpinner2 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

export const Logout: FC<any> = () => {

    const navigate = useNavigate();
    
    React.useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    }, [navigate])

    return (
        <Div className='fixed top-0 left-0 right-0 bottom-0 z-20 h-screen w-screen flex flex-col justify-center items-center'>
            <Image className='h-32 w-32' alt='LBC logo' src={Images.LBClogo}/>
            <Text className='text-secondary-200 text-sm text-center flex flex-row justify-center items-center my-4'>
                <ImSpinner2 className="animate-spin mr-2" />
                Logging out
            </Text>
        </Div>
    );
};