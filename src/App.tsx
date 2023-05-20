import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { BookNow, Reports, Payments, DashboardHome, Activity } from './pages/Dashboard/';
import { UserProfile } from './pages/Profile/UserProfile';
import { Error } from './pages/Window/Error';
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

function App() {
  return (
    <div className="h-full w-full relative">
      <BrowserRouter>
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

        </Routes>
      </BrowserRouter>

      <FlexRow className='absolute items-center justify-end w-full z-10 bottom-0'>
        <div className=' h-12 w-36 bg-white mr-20 rounded-tr-xl rounded-tl-xl'>
          <FlexRow className='items-center justify-center h-full w-full bg-grey-200 rounded-tr-xl rounded-tl-xl'>
              <BsFillChatRightDotsFill className='text-red-400 mr-2'/>
              <Text className='text-red-400 font-semibold'>
                Chat with us!
              </Text>
          </FlexRow>
        </div>
      </FlexRow>
    </div>
  );
}

export default App;
