import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Path from 'routes/Path';
import Admin from 'pages/admin/Admin';
import Register from 'pages/register/Register';
import Landing from 'pages/landing/Landing';
import NotFound from 'pages/NotFound';

export default function Routing() {
  return (
    <Routes>
      <Route path={Path.LandingPage} element={<Landing />} />
      <Route path={Path.Register} element={<Register />} />
      <Route path={Path.Admin} element={<Admin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
