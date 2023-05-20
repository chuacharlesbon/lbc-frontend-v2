import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiExclamationCircle, HiCheckCircle } from 'react-icons/hi';
import { FaTimesCircle } from 'react-icons/fa';

interface ButtonProps {
    title: string;
    onClose: any;
    description: string;
    isOpen: boolean;
    toastKind: string;
}

export const LBCModal: FC<ButtonProps> = ({
    title, description, onClose, isOpen, toastKind,
}) => {
    let color = 'border-white';
    if (toastKind === 'success') {
        color = 'border-green-100';
    } else if (toastKind === 'error') {
        color = 'border-red-100';
    } else if (toastKind === 'warning') {
        color = 'border-yellow-100';
    } else if (toastKind === 'info') {
        color = 'border-primary-100';
    }

    const getIcon = () => {
        if (toastKind === 'success') {
            return <HiCheckCircle className='text-green-100 text-4xl' />
        } else if (toastKind === 'error') {
            return <FaTimesCircle className='text-red-100 text-4xl' />
        } else if (toastKind === 'warning') {
            return <HiExclamationCircle className='text-yellow-100 text-4xl' />
        }
        return <HiExclamationCircle className='text-secondary-200 text-4xl' />
    }

    return (
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
                            className="h-full w-full overflow-hidden text-left z-20 p-5 align-middle transition-all transform flex flex-col items-center"
                        >
                            <div className='w-400px border border-grey-400 rounded-lg shadow-lg mt-48'>
                                <div
                                    className={`flex flex-col items-center justify-between p-4 w-full bg-white border-l-8 rounded-lg shadow-lg ${color}`}
                                    id="toast-success"
                                    role="alert"
                                >
                                    <div className='w-full flex flex-row items-center phone:justify-between tablet:justify-center'>
                                        <div className='w-1/5'>
                                            {getIcon()}
                                        </div>
                                        <div className='w-4/5'>
                                            <p className='font-bold italic text-2xl text-secondary-100 pb-2'>
                                                {title}
                                            </p>
                                            <p className='text-sm text-secondary-200 pt-2'>
                                                {description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    );
};