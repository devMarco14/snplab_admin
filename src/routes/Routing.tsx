import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Path from 'routes/Path';
import Admin from 'pages/admin/Admin';
import Register from 'pages/register/Register';
import Landing from 'pages/landing/Landing';
import NotFound from 'pages/NotFound';
import AdminAuthContext from 'context/AdminAuth';

export default function Routing() {
  const { isLoggedin: isAdminLoggedin } = React.useContext(AdminAuthContext);
  return (
    <Routes>
      <Route path={Path.LandingPage} element={<Landing />} />
      <Route path={Path.Register} element={<Register />} />
      {isAdminLoggedin && <Route path={Path.Admin} element={<Admin />} />}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
