import React, { FC, Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { FaCaretDown } from 'react-icons/fa';
import { Div } from '../../core/Containers';
import { Text } from '../../core/Text';
import { Link } from 'react-router-dom';

interface DataProps {
  options: any;
  value: string;
  containerClass: string;
  containerButtonClass: string;
  titleClassName: string;
  newRoute: string;
  newParam: string;
}

export const ColumnHeaderDropdown: FC<DataProps> = ({
    options,
    value,
    containerClass,
    containerButtonClass,
    titleClassName,
    newRoute,
    newParam
}) => {

  return(
  <Div className='w-full'>
    <Menu as="div" className={`w-full relative inline-block text-left ${containerClass}`}>
      <div>
        <Menu.Button
          className={`flex flex-row items-center justify-between w-full p-2 rounded-lg hover:shadow-xl hover:bg-opacity-20 ${containerButtonClass}`}
        >
          <Text className={`w-5/6 mr-auto truncate text-ellipsis text-left ${titleClassName}`}>
            {value}
          </Text>
          <FaCaretDown className={`w-1/6 ${titleClassName}`} />
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
            className={`absolute right-0 mt-1 origin-top-right bg-white divide-y w-full divide-secondary-300 
            rounded-lg shadow-lg border border-grey-400`}
          >
            {options.map((value: any) => (
              <div className="px-1 py-1 " key={value.name}>
                {value.list.map((item: any) => (
                  <Menu.Item key={item.name}>
                  {({ active }) => (
                    <Link
                      className={`${
                        active ? 'bg-red-100 text-white' : 'text-secondary-100'
                      }  group flex rounded-lg items-center w-full px-2 py-3 text-base`}
                      to={`${newRoute}?${newParam}=${item.link}`}
                    >
                      {item.name}
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