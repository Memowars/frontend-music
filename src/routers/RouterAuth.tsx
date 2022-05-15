import { Button } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../components/UI/NavBar';
import Albums from '../components/views/Albums';
import { Artistas } from '../components/views/Artistas';
import Buscar from '../components/views/Buscar';
import Home from '../components/views/Home';
import { Playlist } from '../components/views/Playlist';
const RouterAuth = () => {
  return (
    <>
      <div className="main-layout">
        <NavBar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="buscar" element={<Buscar />} />
          <Route path="artistas" element={<Artistas />} />
          <Route path="albums" element={<Albums />} />
          <Route path="playlist" element={<Playlist />} />
          <Route path="/" element={<Home />} />
          {/*  <Route path="/*" element={<Navigate to="/home" replace />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default RouterAuth;
