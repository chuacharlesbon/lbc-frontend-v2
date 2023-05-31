import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { BookNow, Reports, Payments, DashboardHome, Activity } from './pages/Dashboard/';
import { UserProfile } from './pages/Profile/UserProfile';
import { Error, Incompatible } from './pages/Window/Error';
import { NoAuth } from './pages/Window/NoAuth';
import { Loading } from './pages/Window/Loading';
import { Text } from './core/Text';
import { FlexRow } from './core/Containers';
import { BsFillChatRightDotsFill } from 'react-icons/bs';
import { DashboardDeliveryTableData } from './pages/Dashboard/DashboardHome/DeliveryReports';
import { SummaryRemittanceReportsPage } from './pages/Dashboard/DashboardHome/SummaryRemittanceReportsPage';
import { RemittanceReportsPage } from './pages/Dashboard/DashboardHome/RemittanceReportsPage';
import { Notifications } from './pages/Notifications';
import { Logout } from './pages/Auth/Logout';
import { getCookie, useCookie, useWindowSize } from './hooks';

function App() {

  const token = getCookie('token');
  const dimension = useWindowSize();
  const navigate = useNavigate();
  const location = useLocation();

  const [cookie, updateCookie] = useCookie('location', '/');

  React.useEffect(() => {
    if (dimension.width < 1024) {
      //navigate('/incompatible');
    } else if (location.pathname === '/incompatible') {
      //navigate(cookie);
    } else {
      updateCookie(location.pathname, 0.5);
    }
  }, [dimension])

  React.useEffect(() => {
    if (token !== '' && (location.pathname === '/' || location.pathname === '/forgot-password')) {
      navigate('/dashboard-home');
    } else if (token !== '' && location.pathname === '*') {
      navigate('/dashboard-home');
    } else if (token === '' && location.pathname !== '/' && location.pathname != '/forgot-password') {
      navigate('/');
    } else {
      //
    }
  }, [location])

  return (
    //<div className="phone:h-780px phone:w-1440px tabletWide:h-full tabletWide:w-full relative">
    <div className="h-full w-full relative">

      <Routes>

        {/* Authentication Pages */}
        <Route element={<Login />} path="/" />
        <Route element={<ForgotPassword />} path="/forgot-password" />

        {/* Dashboard Pages */}
        <Route element={<DashboardHome />} path="/dashboard-home" />
        <Route element={<DashboardDeliveryTableData />} path="/dashboard-home/delivery-table-data" />
        <Route element={<SummaryRemittanceReportsPage />} path="/dashboard-home/summary-remittance-table-data" />
        <Route element={<RemittanceReportsPage />} path="/dashboard-home/remittance-table-data" />

        {/* Book Now Pages */}
        <Route element={<BookNow />} path="/book-now" />

        {/* Reports Pages */}
        <Route element={<Reports />} path="/reports" />

        {/* Activity Pages */}
        <Route element={<Activity />} path="/activity" />

        {/* Payment Pages */}
        <Route element={<Payments />} path="/payments" />

        {/* Profile */}
        <Route element={<UserProfile />} path="/profile" />
        <Route element={<Notifications />} path="/notifications" />

        {/* Window States */}
        <Route element={<Error />} path="*" />
        <Route element={<Loading />} path="/load" />
        <Route element={<NoAuth />} path="/no-auth" />
        <Route element={<Logout />} path="/logout" />
        <Route element={<Incompatible />} path="/incompatible" />

      </Routes>

      {
        location.pathname === '/' ||
          location.pathname === '/forgot-password' ||
          location.pathname === '/incompatible' ||
          location.pathname === '/load' ||
          location.pathname === '/*' ||
          location.pathname === '/no-auth' ||
          location.pathname === '/logout' ?
          <></>
          :
          <div className='absolute z-10 bottom-0 right-24 h-12 w-36 bg-white rounded-tr-xl rounded-tl-xl'>
            <FlexRow className='items-center justify-center h-full w-full bg-grey-200 hover:bg-grey-300 rounded-tr-xl rounded-tl-xl cursor-pointer'>
              <BsFillChatRightDotsFill className='text-red-400 mr-2' />
              <Text className='text-red-400 font-semibold'>
                Chat with us!
              </Text>
            </FlexRow>
          </div>
      }

    </div>
  );
}

export default App;
