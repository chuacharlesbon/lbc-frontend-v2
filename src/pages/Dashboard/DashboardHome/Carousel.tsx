import React, { FC } from 'react';
import { Div, FlexRow } from '../../../core/Containers';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { RawButton } from '../../../core/Buttons';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { Transition } from '@headlessui/react';

export const LBCCarouselSlider: FC<any> = () => {

    return (
        <Div className='w-full'>
            <FlexRow className='items-center justify-between w-full'>
                <RawButton className='m-2 hidden'>
                    <BsChevronLeft className='text-red-400 text-2xl font-bold' />
                </RawButton>
                <Transition
                    appear
                    className="w-full h-auto"
                    enter="transition-opacity duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    show
                >
                    <Div className='w-full h-200px'>
                        <Carousel
                            className='h-200px'
                            autoPlay={true}
                            interval={2000}
                            infiniteLoop={true}
                            showThumbs={false}
                        >
                            <div>
                                <img alt='LBC 1' className='w-full h-200px object-fit rounded-3xl' src="https://remitusa.lbcexpress.com/images/default-source/carouselindex/carouselindexoct2021/02-lbc_online-remittanceresize_more-peso_539x272px.jpg" />
                                <p className="legend hidden">Legend 1</p>
                            </div>
                            <div>
                                <img alt='LBC 2' className='w-full h-200px object-fit rounded-3xl' src="https://remitusa.lbcexpress.com/images/default-source/carouselindex/carouselindexoct2021/01-lbconlineremittance539x272px2fa.jpg" />
                                <p className="legend hidden">Legend 2</p>
                            </div>
                            <div>
                                <img alt='LBC 3' className='w-full h-200px object-fit rounded-3xl' src="https://digitalpinas.com/wp-content/uploads/2020/01/6.png" />
                                <p className="legend hidden">Legend 3</p>
                            </div>
                        </Carousel>
                    </Div>
                </Transition>
                <Div className='w-full hidden'>
                    <Carousel
                        autoPlay={true}
                        interval={2000}
                        infiniteLoop={true}
                        showThumbs={false}
                    >
                        <div className='w-full rounded-lg shadow-lg'>
                            <img alt='LBC 1' className='w-full h-full object-contain rounded-3xl' src="https://remitusa.lbcexpress.com/images/default-source/carouselindex/carouselindexoct2021/02-lbc_online-remittanceresize_more-peso_539x272px.jpg" />
                            <p className="legend hidden">Legend 1</p>
                        </div>
                        <div>
                            <img alt='LBC 2' className='w-full h-full object-contain rounded-3xl' src="https://remitusa.lbcexpress.com/images/default-source/carouselindex/carouselindexoct2021/01-lbconlineremittance539x272px2fa.jpg" />
                            <p className="legend hidden">Legend 2</p>
                        </div>
                        <div>
                            <img alt='LBC 3' className='w-full h-full object-contain rounded-3xl' src="https://digitalpinas.com/wp-content/uploads/2020/01/6.png" />
                            <p className="legend hidden">Legend 3</p>
                        </div>
                    </Carousel>
                </Div>
                <RawButton className='m-2 hidden'>
                    <BsChevronRight className='text-red-400 text-2xl font-bold' />
                </RawButton>
            </FlexRow>
        </Div>
    );
};
