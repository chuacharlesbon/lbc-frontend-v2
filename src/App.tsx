import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/Auth/Login';
import { ForgotPassword } from './pages/Auth/ForgotPassword';
import { BookNow } from './pages/Dashboard/BookNow';
import { Reports } from './pages/Dashboard/Reports';
import { Payments } from './pages/Dashboard/Payments';
import { DashboardHome } from './pages/Dashboard/Home';
import { UserProfile } from './pages/Profile/UserProfile';
import { Error } from './pages/Window/Error';
import { NoAuth } from './pages/Window/NoAuth';
import { Loading } from './pages/Window/Loading';

function App() {
  return (
    <div className="h-full w-full">
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

          {/* Profile */}
          <Route element={<UserProfile />} path="/profile" />

          {/* Window States */}
          <Route element={<Error />} path="*" />
          <Route element={<Loading />} path="/load" />
          <Route element={<NoAuth />} path="/no-auth" />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
