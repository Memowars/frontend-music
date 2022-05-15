import { Button } from '@mui/material';
import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import LoginScreen from '../components/views/LoginScreen';
import RouterAuth from './RouterAuth';
const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
          <Route path="/*" element={<RouterAuth />} />
          {/* <Route path="/*" element={<Navigate to="/login" replace />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;

{
  /* <Route path="/*" element={<Navigate to="/" replace />} /> */
}
