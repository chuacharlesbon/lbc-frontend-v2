import React, { FC } from 'react';
import { FlexRow, FlexColumn, Spacer } from '../../core/Containers';
import { Text, Span } from '../../core/Text';
import { Image } from '../../core/Image';
import { Link, useNavigate } from 'react-router-dom';
import { RawInput } from '../../core/Forms';

export const Login: FC<any> = () => {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        setTimeout(() => {
            navigate(`/dashboard-home`);
        }, 2000);
    }

return (
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
);
};