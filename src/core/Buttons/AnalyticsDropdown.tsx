import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { Div, Spacer } from '../Containers';
import { Text } from '../Text';
import { FaFilter, FaChevronDown, FaCaretRight } from 'react-icons/fa';
import { AnalyticsDeliveryDrawers } from '../../constants/Dropdowns';

export const AnalyticsDropdown: FC<any> = () => {

  const deliveryStatus = [
    'default-delivery-status'
  ];

  const remittanceStatus = [
    'default-remittance'
  ];

  return(
  <Div className={`w-64 text-right`}>
    <Menu as="div" className="w-64 relative inline-block text-left">
      <div>
        <Menu.Button
          className={`flex flex-row items-center justify-center w-full px-5 py-4 font-poppins text-base font-normal rounded-md hover:bg-opacity-20`}
        >
          <FaFilter className='text-red-100 mr-4'/>
          <Div className="flex flex-col">
            <Text className="mr-auto truncate text-ellipsis text-left text-red-100 w-40">
              Delivery Status
            </Text>
          </Div>
          <FaChevronDown className="text-xl text-red-100" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
          <Menu.Items
            className={`absolute right-0 mt-1 origin-top-right font-poppins border border-grey-400
            bg-white divide-y w-64 divide-secondary-300 
            rounded-md shadow-lg`}
          >
            {AnalyticsDeliveryDrawers.map((value: any) => (
              <div className="px-1 py-1 " key={value.name}>
                {value.links.map((link: any) => (
                  <Menu.Item key={link.name}>
                    {({ active }) => (
                      <Link
                        className={`hover:bg-grey-400 hover:text-secondary-100 text-secondary-200
                          group flex flex-row rounded-md items-center justify-between w-full px-4 py-3 text-base parentToolTip`}
                        to={link.url}
                      >
                        <Text>
                            {link.name}
                        </Text>
                        <FaCaretRight className={`hover:text-secondary-100 text-secondary-200`}/>
                        <Div className='childTooltip left-full w-64 bg-white border border-grey-400'>
                        {link.filter.map((childLink: any) => (
                          <Menu.Item key={childLink.name}>
                            {({ active }) => (
                              <Div
                                className={`hover:bg-grey-400 hover:text-secondary-100 text-secondary-200
                                  group flex flex-row rounded-md items-center justify-start w-full px-4 py-3 text-base`}
                              >
                                <Spacer className={`${link.name === 'Delivery Status' ? `${deliveryStatus.includes(childLink.url) ? 'bg-red-400' : 'bg-grey-200'}` : `${remittanceStatus.includes(childLink.url) ? 'bg-red-400' : 'bg-grey-200'}`} mr-4 w-4 h-4 rounded`} />
                                <Text>
                                    {childLink.name}
                                </Text>
                              </Div>
                            )}
                          </Menu.Item>
                        ))}
                        </Div>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </div>
            ))}
          </Menu.Items>
      </Transition>
    </Menu>
  </Div>
)};