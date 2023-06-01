import React, { FC, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { GrClose } from 'react-icons/gr';
import { FaRegWindowMinimize, FaPlus } from 'react-icons/fa';
import { Button, RawButton } from '../../core/Buttons';
import { Div, Divider, FlexRow, Spacer } from '../../core/Containers';
import { Image } from '../../core/Image';
import { Text } from '../../core/Text';
import { Images } from '../../assets/images/images';
import { RawInput } from '../../core/Forms';

interface DataProps {
    onClose: any;
    isOpen: boolean;
}

export const ChatBotUI: FC<DataProps> = ({
    onClose, isOpen,
}) => {

    const [isMinimize, setMinimize] = React.useState(false);

    const newDate = new Date().toString().substring(0, 15);

    const [chat, setChat] = React.useState('');
    const [messages, setMessages] = React.useState([
        {
            sender: 'system',
            content: 'Hi! How may I help you?',
            date: newDate
        }
    ]);

    const onScroll = (indexId: number) => {
        const tagId = indexId;
        const element = document.getElementById(`MSG${tagId}`);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }

    const onReply = (newMessages: any) => {

        const tempDate2 = new Date().toString().substring(0, 15);
        const tempList2 = [...newMessages];
        const currentRes = {
            sender: 'system',
            content: "We've received your concern regarding this matter. Thank you for communicatin to us!",
            date: tempDate2
        }
        tempList2.push(currentRes);
        setMessages(tempList2);
        setChat('')

        setTimeout(() => {
            onScroll(tempList2.length);
        }, 750)
    }

    const onSend = async (e: any) => {
        e.preventDefault();

        const tempDate = new Date().toString().substring(0, 15);
        const tempList = [...messages];
        const currentMsg = {
            sender: 'user',
            content: chat,
            date: tempDate
        }
        tempList.push(currentMsg);
        setMessages(tempList);
        setChat('');

        setTimeout(() => {
            onScroll(tempList.length);
        }, 750)

        setTimeout(() => {
            onReply(tempList);
        }, 1250)
    }

    return (
        <Transition appear as={Fragment} show={isOpen}>
            <div className={`fixed bottom-0 right-24 z-50 rounded-t-xl w-350px ${isMinimize ? 'h-14' : 'h-400px'}`}>
                <Transition.Child
                    as={Fragment}
                    enter="transition ease duration-700 transform"
                    enterFrom="opacity-0 translate-y-full"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease duration-1000 transform"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-full"
                >
                    <div
                        className="h-full w-full border border-grey-400 bg-white rounded-t-xl"
                    >
                        <FlexRow className='w-full p-2 bg-grey-400 items-center justify-between rounded-t-xl'>
                            <Div className='relative'>
                                <Image
                                    alt='LBC'
                                    className='w-10 h-10 rounded-full bg-red-400 p-1'
                                    src={Images.LBClogo}
                                />
                                <Spacer className='absolute bottom-1 right-1 w-2 h-2 rounded-full bg-green-200 border border-green-100 shadow-lg' />
                            </Div>
                            <Div className='ml-2 mr-auto'>
                                <Text className='text-red-400 text-sm font-bold'>
                                    LBC Customer Care
                                </Text>
                                <Text className='text-secondary-200 text-xs'>
                                    Available from 8:00 AM to 5:00 PM
                                </Text>
                            </Div>
                            <FlexRow>
                                <RawButton
                                    className='m-1 p-1 rounded text-grey-200 hover:text-secondary-100'
                                    onClick={() => setMinimize(!isMinimize)}
                                >
                                    <FaRegWindowMinimize className='text-sm' />
                                </RawButton>
                                <RawButton
                                    className='m-1 p-1 rounded text-grey-200 hover:text-secondary-100'
                                    onClick={() => onClose()}
                                >
                                    <GrClose className='text-sm' />
                                </RawButton>
                            </FlexRow>
                        </FlexRow>

                        {
                            isMinimize ?
                                <></>
                                :
                                <>
                                    <Div className='w-full h-3/4 overflow-y-scroll'>
                                        <Spacer className='w-5 h-5' />
                                        {
                                            messages.map((msg: any, index: number) => (
                                                <FlexRow className='w-full p-1 items-start'>
                                                    {
                                                        msg.sender === 'system' ?
                                                            <Image
                                                                alt='LBC'
                                                                className='w-10 h-10 rounded-full bg-red-400 p-1'
                                                                src={Images.LBClogo}
                                                            />
                                                            :
                                                            <></>
                                                    }
                                                    {
                                                        msg.sender === 'system' ?
                                                            <Div className='w-250pxml-2 mr-auto'>
                                                                <Text className='text-secondary-200 text-left text-xs bg-grey-400 rounded-xl p-2 ml-2 break-words'>
                                                                    {msg.content}
                                                                </Text>
                                                                <Text className={`text-secondary-200 text-left text-xs p-1 ${index + 1 === messages.length ? '' : 'hidden'}`}>
                                                                    {msg.date}
                                                                </Text>
                                                                <div id={`MSG${index + 1}`} />
                                                            </Div>
                                                            :
                                                            <Div className='w-250px ml-auto'>
                                                                <Text className='text-secondary-200 text-left text-xs bg-grey-400 rounded-xl p-2 break-words'>
                                                                    {msg.content}
                                                                </Text>
                                                                <Text className={`text-secondary-200 text-right text-xs p-1 ${index + 1 === messages.length ? '' : 'hidden'}`}>
                                                                    {msg.date}
                                                                </Text>
                                                                <div id={`MSG${index + 1}`} />
                                                            </Div>
                                                    }
                                                </FlexRow>
                                            ))
                                        }
                                    </Div>
                                    <Divider className='text-grey-400' />
                                    <FlexRow className='w-full h-10 px-2 items-center justify-between'>
                                        <Div className='w-250px h-8 rounded-full bg-grey-400 px-5 py-1'>
                                            <form onSubmit={e => onSend(e)}>
                                                <RawInput
                                                    containerClass='bg-transparent'
                                                    className='text-sm bg-transparent border-0 ring-0 outline-0 h-6'
                                                    onChange={setChat}
                                                    type='text'
                                                    placeholder='Type your message'
                                                    value={chat}
                                                />
                                                <button className="hidden" type='submit'>
                                                    Send
                                                </button>
                                            </form>
                                        </Div>
                                        <FaPlus className='text-red-400' />
                                    </FlexRow>
                                </>
                        }
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    );
};