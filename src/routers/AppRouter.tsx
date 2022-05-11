import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { Albums } from '../components/views/Albums';
import { Artistas } from '../components/views/Artistas';
import { IoMdAlbums, IoMdHome, IoMdPerson } from 'react-icons/io';
import { MdPlaylistAdd } from 'react-icons/md';

import logo from '../assets/logo2.png';
import Home from '../components/views/Home';
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="main-layout relative">
          <nav>
            <a href="/">
              <img src={logo} alt="imagen" className="logo"></img>
            </a>
            <hr className="" />
            <ul className="nav-ul">
              <li>
                <NavLink
                  to="/home"
                  className={({ isActive }) => (isActive ? 'underline  ' : '')}
                >
                  <IoMdHome color="white" />
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/artistas"
                  className={({ isActive }) => (isActive ? 'underline ' : '')}
                >
                  <IoMdPerson color="white" />
                  Artistas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/albums"
                  className={({ isActive }) => (isActive ? 'underline ' : '')}
                >
                  <IoMdAlbums color="white" />
                  Albums
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/playlist"
                  className={({ isActive }) =>
                    isActive ? 'underline rounded-md' : ''
                  }
                >
                  <MdPlaylistAdd color="white" />
                  Crear playlist
                </NavLink>
              </li>
            </ul>
            <hr style={{ color: 'white', width: '80px' }} />
          </nav>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="artistas" element={<Artistas />} />
            <Route path="albums" element={<Albums />} />
            <Route path="playlist" element={<Albums />} />
            <Route path="/*" element={<Navigate to="/artistas" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
