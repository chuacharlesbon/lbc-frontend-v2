import React, { FC } from 'react';
import validator from 'validator';
import { Link, useNavigate } from 'react-router-dom';
import { FlexRow, FlexColumn, Spacer, Div } from '../../core/Containers';
import { Text, Span } from '../../core/Text';
import { Image } from '../../core/Image';
import { RawInput } from '../../core/Forms';
import { LBCModal } from '../../components/Modals/LBCModal';
import { Loading } from '../Window/Loading';
import { Images } from '../../assets/images/images';

export const ForgotPassword: FC<any> = () => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    const [isToastOpen, setToastOpen] = React.useState(false);
    const [toastKind, setToastKind] = React.useState('');
    const [toastTitle, setToastTitle] = React.useState('Account Created');
    const [toastDesc, setToastDesc] = React.useState('Redirecting to onboarding.');

    const onSubmit = (e: any) => {
        e.preventDefault();
        setLoading(true);

        const isEmail = validator.isEmail(email);
        
        if(isEmail){
            setToastKind('success');
            setToastTitle('Email sent!');
            setToastDesc('A confirmation email has been sent for verification.');
            
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setLoading(false);
                navigate(`/`);
            }, 3000);
        }else{
            setToastKind('error');
            setToastTitle('Email is invalid!');
            setToastDesc('Please enter a correct email.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setToastOpen(false);
            }, 3000);
        }
    }

return (
    <>
    {
        loading ?
        <Loading />
        :
        <></>
    }
    <LBCModal
        description={toastDesc}
        isOpen={isToastOpen}
        onClose={() => setToastOpen(false)}
        title={toastTitle}
        toastKind={toastKind}
    />
    <FlexRow className='justify-center items-center h-full w-full'>
        <FlexColumn className='justify-center items-center w-500px h-500px rounded-lg shadow-xl border border-grey-400'>

            <Image className='h-32 w-32' alt='LBC logo' src={Images.LBClogo}/>

            <Spacer className='h-2' />
            
            <Text className='text-secondary-100 text-sm font-bold text-center'>
                BUSINESS
            </Text>
            <Text className='text-secondary-100 text-sm font-bold text-center'>
                SOLUTIONS
            </Text>

            <Spacer className='h-5' />
            
            <Text className='text-secondary-200 text-xl font-bold text-center'>
                Forgot Password
            </Text>

            <Spacer className='h-10' />

            <form className="" onSubmit={e => onSubmit(e)}>
                <RawInput
                    className='phone:border-grey-400'
                    containerClass='w-300px'
                    name='email'
                    placeholder='Email or Username'
                    onChange={setEmail}
                    type='email'
                    value={email}
                />
                <button className="hidden" type='submit'>
                    Log In
                </button>
            </form>

            <Spacer className='h-10' />

            <Link className='text-red-400 text-sm font-bold text-center' to='/'>
                Already have an account?
            </Link>
            <Text className=' text-xs italic text-center'>
                <Span className='text-secondary-200 italic mr-2'>
                    Issuses in logging in?
                </Span>
                <Link className='text-red-400 font-bold' to='/'>
                    Support Center
                </Link>
            </Text>

        </FlexColumn>
    </FlexRow>
    </>
);
};