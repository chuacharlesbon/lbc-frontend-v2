import React, { FC } from 'react';
import { Div, Divider, FlexColumn, FlexRow, Spacer } from './../core/Containers';
import { Text } from './../core/Text';
import { NavbarMain } from './../components/Navigation/NavbarMain';
import { TopNavBar } from './../components/Navigation/TopNavBar';
import { tempNotificationData } from './../constants/TempData';
import { Pagination } from './../components/Tables/Pagination';
import { RawInput } from '../core/Forms';
import { ColumnHeaderSearch, ColumnHeaderDropdown } from '../components/Tables';
import { DataSort, DataSortStatus1 } from '../constants/Dropdowns';
import { useLocation } from 'react-router-dom';
import { NotificationsRow } from '../components/Tables/NotificationsRow';

export const Notifications: FC<any> = () => {

    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const actionQuery = query.get('sort');
    const dateQuery = query.get('date');
    const statusQuery = query.get('status');

    const [notifKeyword, setKeyword] = React.useState('');
    const [notifDate, setDate] = React.useState('Date');
    const [notifSubject, setSubject] = React.useState('');
    const [notifStatus, setStatus] = React.useState('Status');

    const [currentPage, setCurrentPage] = React.useState(1);
    const [articlesPerPage] = React.useState(5);
    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;

    const newPartners = tempNotificationData.slice(indexOfFirstArticle, indexOfLastArticle);

    const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

    const onSearch = (e: any) => {
        e.preventDefault();
        
    }

    const onSortDate = (type: string) => {
        setDate(type);
        if(type === 'ascending'){

        }else if(type === 'descending'){

        }
    }

    const onSortSubject = () => {
        //
    }

    const onSortStatus = (type: string) => {
        setStatus(type);
        if(type === 'read'){

        }else if(type === 'unread'){

        }
    }

    React.useEffect(() => {
        if(dateQuery === 'true'){
            onSortDate(actionQuery || '- -  - -');
        }else if(statusQuery === 'true'){
            onSortStatus(actionQuery || '- -  - -');
        }
    }, [actionQuery])

    return (
        <FlexRow className='w-full h-full items-center justify-between'>
            {/* Side Navigation */}
            <NavbarMain route='Home' />

            {/* Main Dashboard */}
            <FlexColumn className='w-11/12 h-full'>

                {/* Top Navigation */}
                <TopNavBar
                    showMenu={true}
                    showNotifBell={true}
                    showSearchBar={false}
                />

                {/* Body */}
                <Div className='w-full h-full overflow-y-scroll p-10 bg-white'>
                    <FlexColumn className='w-full h-full'>
                        {/* Header */}
                        <Text className='text-secondary-200 font-bold'>
                            Notifications
                        </Text>
                        <Spacer className='h-10' />

                        {/* Search Bar */}
                        <form className="" onSubmit={e => onSearch(e)}>
                            <RawInput
                                className='phone:border-grey-400'
                                containerClass=''
                                name='search'
                                placeholder=''
                                onChange={setKeyword}
                                type='search'
                                value={notifKeyword}
                            />
                            <button className="hidden" type='submit'>
                                Log In
                            </button>
                        </form>
                        
                        {/* Body */}
                        <Spacer className='h-10' />
                        <Div className='h-3/4 border border-grey-400 rounded-lg shadow-lg p-5'>
                            <FlexRow className='items-center justify-between w-full'>
                                <Div className='w-1/5 p-2'>
                                <ColumnHeaderDropdown
                                    containerClass=''
                                    containerButtonClass='border border-red-400'
                                    newRoute='/notifications'
                                    newParam='date=true&sort'
                                    options={DataSort}
                                    titleClassName='text-secondary-100'
                                    value='Date'
                                />
                                </Div>
                                <Div className='w-3/5 p-2'>
                                <ColumnHeaderSearch
                                    className='phone:border-red-400 p-2'
                                    containerClass=''
                                    name='search'
                                    placeholder='Subject'
                                    onChange={setSubject}
                                    onSubmit={onSortSubject}
                                    type='search'
                                    value={notifSubject}
                                />
                                </Div>
                                <Div className='w-1/5 p-2'>
                                <ColumnHeaderDropdown
                                    containerClass=''
                                    containerButtonClass='border border-red-400'
                                    newRoute='/notifications'
                                    newParam='status=true&sort'
                                    options={DataSortStatus1}
                                    titleClassName='text-secondary-100'
                                    value='Status'
                                />
                                </Div>
                            </FlexRow>

                            {
                                tempNotificationData.map((list: any) => (
                                    <NotificationsRow
                                        id={list.id}
                                        date={list.date}
                                        subject={list.subject}
                                        excerpt={list.excerpt}
                                        status={list.status}
                                    />
                                ))
                            }
                        </Div>

                        <Spacer className='h-10' />
                        <Div className=''>
                        <Pagination
                        currentPage={currentPage}
                        itemsPerPage={articlesPerPage}
                        paginate={paginate}
                        totalItems={tempNotificationData.length}
                        />
                        </Div>
                    </FlexColumn>
                </Div>

            </FlexColumn>
        </FlexRow>
    );
};