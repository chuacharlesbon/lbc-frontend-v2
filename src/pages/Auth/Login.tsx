import React, { FC } from 'react';
import { FlexRow, FlexColumn, Spacer, Div } from '../../core/Containers';
import { Text, Span } from '../../core/Text';
import { Image } from '../../core/Image';
import { Link, useNavigate } from 'react-router-dom';
import { RawInput } from '../../core/Forms';
import { ImSpinner2 } from 'react-icons/im';
import { LBCModal } from '../../components/Modals/LBCModal';
import { Loading } from '../Window/Loading';

export const Login: FC<any> = () => {

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

        if(email !== 'charlessbonnchua@gmail.com'){
            setToastKind('error');
            setToastTitle('Login Failed!');
            setToastDesc('Please enter your correct email.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setToastOpen(false);
            }, 3000);
        }else if(password !== '1111'){
            setToastKind('error');
            setToastTitle('Login Failed!');
            setToastDesc('Please enter your correct password.');
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setToastOpen(false);
            }, 3000);
        }else if(email == 'charlessbonnchua@gmail.com' && password == '1111'){
            setToastKind('success');
            setToastTitle('Logging in');
            setToastDesc('Redirecting...');
            
            setTimeout(() => {
                setLoading(false);
            }, 1000);
            setTimeout(() => {
                setToastOpen(true);
            }, 1500);
            setTimeout(() => {
                setLoading(false);
                navigate(`/dashboard-home`);
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

            <Image className='h-14 w-14 rounded-lg shadow-lg border border-grey-400' alt='LBC' src="N/A"/>
            <Spacer className='h-10' />
            
            <Text className='text-secondary-100 text-sm font-bold text-center'>
                BUSINESS
            </Text>
            <Text className='text-secondary-100 text-sm font-bold text-center'>
                SOLUTIONS
            </Text>

            <Spacer className='h-10' />
            
            <Text className='text-secondary-200 text-xl font-bold text-center'>
                Sign in
            </Text>
            <Text className='text-secondary-200 text-sm text-center'>
                with your LBC Express Account
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
                <Spacer className='h-4' />
                <RawInput
                    className='phone:border-grey-400'
                    containerClass='w-300px'
                    name='password'
                    placeholder='Password'
                    onChange={setPassword}
                    type='password'
                    value={password}
                />
                <button className="hidden" type='submit'>
                    Log In
                </button>
            </form>

            <Spacer className='h-10' />

            <Text className='text-red-400 text-sm font-bold text-center'>
                Forgot Password?
            </Text>
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