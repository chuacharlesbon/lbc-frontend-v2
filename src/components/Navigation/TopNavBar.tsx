import React, { FC } from 'react';
import { FlexRow, Spacer } from '../../core/Containers';
import { RawInput } from '../../core/Forms';
import { BiBell, BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { Dropdown } from '../../core/Buttons/Dropdown';

export const TopNavBar: FC<any> = () => {

    const navigate = useNavigate();
    const [packageId, setPackage] = React.useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        setTimeout(() => {
            navigate(`/dashboard-home?package=${packageId}`);
        }, 2000);
    }

return (
    <FlexRow className='h-32 w-full p-10 items-center justify-between'>
        <FlexRow className='items-center border border-grey-400 rounded-lg shadow-lg p-2'>
            <BiSearchAlt2 className='text-red-100 text-2xl mr-4'/>
            <form className='' onSubmit={e => onSubmit(e)}>
            <RawInput
                className='phone:border-none p-2'
                containerClass='w-300px'
                name='packageId'
                placeholder='Track Package'
                onChange={setPackage}
                type='packageId'
                value={packageId}
            />
            <button className="hidden" type='submit'>
                Search
            </button>
            </form>
        </FlexRow>

        <FlexRow className='items-center'>
            <BiBell className='text-red-100 text-2xl'/>
            <Spacer className='w-5' />
            <Dropdown />
        </FlexRow>
        
    </FlexRow>
);
};