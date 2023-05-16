import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { BookNow } from './pages/Dashboard/BookNow';
import { Reports } from './pages/Dashboard/Reports';
import { Payments } from './pages/Dashboard/Payments';
import { DashboardHome } from './pages/Dashboard/DashboardHome';
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

function App() {
  return (
    <div className="h-full w-full relative">
      <BrowserRouter>
        <Routes>

          {/* Authentication Pages */}
          <Route element={<Login />} path="/" />
          <Route element={<ForgotPassword />} path="/forgot-password" />

          {/* Main Pages */}
          <Route element={<DashboardHome />} path="/dashboard-home" />
          <Route element={<BookNow />} path="/book-now" />
          <Route element={<Reports />} path="/reports" />
          <Route element={<Payments />} path="/payments" />

          {/* Sub Pages */}
          <Route element={<DashboardDeliveryTableData />} path="/dashboard-home/delivery-table-data" />
          <Route element={<SummaryRemittanceReportsPage />} path="/dashboard-home/summary-remittance-table-data" />
          <Route element={<RemittanceReportsPage />} path="/dashboard-home/remittance-table-data" />

          {/* Profile */}
          <Route element={<UserProfile />} path="/profile" />

          {/* Window States */}
          <Route element={<Error />} path="*" />
          <Route element={<Loading />} path="/load" />
          <Route element={<NoAuth />} path="/no-auth" />

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
