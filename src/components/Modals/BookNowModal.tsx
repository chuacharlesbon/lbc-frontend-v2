import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Div, FlexColumn, FlexRow, Spacer } from '../../core/Containers';
import { Span, Text } from '../../core/Text';
import { FaTimes } from 'react-icons/fa';
import { Button, RawButton, ScheduleDropdown } from '../../core/Buttons';
import { RecurrenceOptions } from '../../constants/Dropdowns';
import { CheckBox, RawInput } from '../../core/Forms';
import { useNavigate } from 'react-router-dom';
import { LBCModalTwoFunc } from './LBCModal';
import { BookNowStage, ToastData } from '../../constants/ConstantsData';
import { StageUI } from '../Feature';
import { FormLabel } from '../../core/Forms/FormLabel';

interface DataProps {
    onClose: any;
    isOpen: boolean;
    data?: any;
}

export const BookNowModal: FC<DataProps> = ({
    onClose, isOpen, data
}) => {

    const navigate = useNavigate();

    const [loading, setLoading] = React.useState(false);
    const [currentStage, setStage] = React.useState(1);
    const [isToastOpen, setToastOpen] = React.useState(false);

    const [contactName, setContactName] = React.useState('');
    const [contactNum, setContactNum] = React.useState('');

    const onSaveLater = () => {
        setLoading(true);
        if (currentStage > 0) {
            setTimeout(() => {
                setToastOpen(false);
                setLoading(false);
            }, 2000);
            setTimeout(() => {
                onClose();
            }, 3000);
        }
    }

    const onChangeStage = (stage: number, type: string) => {
        if (type === 'next') {
            setStage(stage + 1)
        } else if (type === 'prev') {
            setStage(stage - 1)
        }
    }

    return (
        <>
            <LBCModalTwoFunc
                description={
                    <>
                        <Span>You can go back anytime to finish your booking by clicking</Span>
                        <Span className='mx-1 font-bold'>Activity {`>`} Draft</Span>
                        <Span>in the menu.</Span>
                    </>
                }
                isOpen={isToastOpen}
                onClose={() => setToastOpen(false)}
                title='Save for later?'
                toastKind='info'
                buttonTextFirst='Cancel'
                buttonTextSecond='Save for later'
                onClickSecond={onSaveLater}
                loading={loading}
            />
            <Transition appear as={Fragment} show={isOpen}>
                <Dialog
                    as="div"
                    className='fixed inset-0 z-50 overflow-hide'
                    onClose={onClose}
                >
                    <div className="h-full w-full text-center flex justify-end">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease duration-300 transform"
                            enterFrom="opacity-0 -translate-y-full"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease duration-300 transform"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 -translate-y-full"
                        >
                            <div
                                className="h-full w-full overflow-hidden z-20 p-5 align-middle transition-all transform flex flex-col items-center justify-center bg-secondary-200"
                            >

                                {/* ---------- Modal Body ---------- */}

                                <FlexColumn className='justify-between bg-white border border-grey-400 h-3/4 w-700px px-10 py-5 rounded-lg shadow-lg'>
                                    <FlexRow className='w-full items-center justify-start'>
                                        {
                                            BookNowStage.map((item: any) => (
                                                <StageUI
                                                    label={item.name}
                                                    count={item.stage}
                                                    currentIndex={currentStage}
                                                    onStage={currentStage === item.stage || currentStage > item.stage}
                                                />
                                            ))
                                        }
                                    </FlexRow>

                                    <Div className='w-full h-3/4 my-2 p-5 overflow-y-scroll'>
                                        {
                                            currentStage === 1 ?
                                                <Div className='w-full'>
                                                    <Text className='text-secondary-200 text-left'>
                                                        How do you want to send your package?
                                                    </Text>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                                            CONTACT PERSON:
                                                        </Text>
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name='contactName'
                                                            placeholder='Name'
                                                            onChange={setContactName}
                                                            type='text'
                                                            value={contactName}
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass=' w-1/3 pl-2'
                                                            name='contactNum'
                                                            placeholder='Number'
                                                            onChange={setContactNum}
                                                            type='text'
                                                            value={contactNum}
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                                            PICK UP ADDRESS:
                                                        </Text>
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Unit'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass=' w-1/3 pl-2'
                                                            name=''
                                                            placeholder='Street'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Region'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass=' w-1/3 pl-2'
                                                            name=''
                                                            placeholder='City'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Barangay'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Landmark'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <CheckBox
                                                            containerClass='w-2/3'
                                                            id='save-address'
                                                            name='save-address'
                                                            label={
                                                                <Text className='text-secondary-200 text-sm'>
                                                                    Save Contact to Address Book
                                                                </Text>
                                                            }
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                                            PICK UP SCHEDULE:
                                                        </Text>
                                                        <input className='w-48 text-secondary-200 block rounded-lg' type='date' />
                                                        <Spacer className='w-1/3' />
                                                    </FlexRow>
                                                </Div>
                                                :
                                                <></>
                                        }
                                        {
                                            currentStage === 2 ?
                                                <Div className='w-full'>
                                                    <Text className='text-secondary-200 text-left'>
                                                        How do you want to your package received?
                                                    </Text>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                                            CONTACT PERSON:
                                                        </Text>
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name='contactName'
                                                            placeholder='Name'
                                                            onChange={setContactName}
                                                            type='text'
                                                            value={contactName}
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass=' w-1/3 pl-2'
                                                            name='contactNum'
                                                            placeholder='Number'
                                                            onChange={setContactNum}
                                                            type='text'
                                                            value={contactNum}
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Text className='text-secondary-200 text-sm text-left w-1/3'>
                                                            DELIVERY ADDRESS:
                                                        </Text>
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Unit'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass=' w-1/3 pl-2'
                                                            name=''
                                                            placeholder='Street'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Region'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass=' w-1/3 pl-2'
                                                            name=''
                                                            placeholder='City'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Barangay'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                        <RawInput
                                                            className='phone:border-grey-400 text-secondary-200 text-sm'
                                                            containerClass='w-1/3 pr-2'
                                                            name=''
                                                            placeholder='Landmark'
                                                            onChange={() => { }}
                                                            type='text'
                                                        //value=''
                                                        />
                                                    </FlexRow>
                                                    <FlexRow className='w-full items-center justify-between py-2'>
                                                        <Spacer className='w-1/3' />
                                                        <CheckBox
                                                            containerClass='w-2/3'
                                                            id='save-address'
                                                            name='save-address'
                                                            label={
                                                                <Text className='text-secondary-200 text-sm'>
                                                                    Save Contact to Address Book
                                                                </Text>
                                                            }
                                                        />
                                                    </FlexRow>
                                                </Div>
                                                :
                                                <></>
                                        }
                                        {
                                            currentStage === 3 ?
                                                <Div className='w-full'>
                                                    <FlexRow>
                                                        <Div className='w-1/4'>
                                                            <FormLabel isRequired>
                                                                Item name
                                                            </FormLabel>
                                                            <RawInput
                                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                containerClass='my-2'
                                                                name=''
                                                                placeholder=''
                                                                onChange={() => { }}
                                                                type='text'
                                                            //value=''
                                                            />
                                                        </Div>
                                                        <Div className='w-1/4'>
                                                            <FormLabel isRequired>
                                                                Item Value
                                                            </FormLabel>
                                                            <RawInput
                                                                className='phone:border-grey-400 text-secondary-200 text-sm'
                                                                containerClass='my-2'
                                                                name=''
                                                                placeholder=''
                                                                onChange={() => { }}
                                                                type='text'
                                                            //value=''
                                                            />
                                                        </Div>
                                                        <Div className='w-1/2'>
                                                            <FormLabel isRequired>
                                                                Shipment Type
                                                            </FormLabel>
                                                        </Div>
                                                    </FlexRow>
                                                </Div>
                                                :
                                                <></>
                                        }
                                    </Div>

                                    <FlexRow className='w-full items-center justify-center py-2'>
                                        <RawButton className='w-1/4' onClick={() => setToastOpen(true)}>
                                            <Text className='text-red-400 font-bold'>
                                                Save for later
                                            </Text>
                                        </RawButton>
                                        <Spacer className='w-1/4' />
                                        <Button
                                            className='w-1/4 mr-2 phone:bg-white phone:text-secondary-200 hover:bg-grey-500 phone:border phone:border-grey-400 h-10'
                                            onClick={currentStage === 1
                                                ? onClose
                                                : () => onChangeStage(currentStage, 'prev')
                                            }
                                        >
                                            {currentStage === 1 ? "Cancel" : 'Back'}
                                        </Button>
                                        <Button
                                            className='w-1/4 ml-2 h-10'
                                            onClick={() => onChangeStage(currentStage, 'next')}
                                            isLoading={loading}
                                        >
                                            Next
                                        </Button>
                                    </FlexRow>
                                </FlexColumn>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};