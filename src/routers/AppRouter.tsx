import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { MdPlaylistAdd } from 'react-icons/md';
import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import logo from '../assets/logo2.png';
import Albums from '../components/views/Albums';
import { Artistas } from '../components/views/Artistas';
import Buscar from '../components/views/Buscar';
import Home from '../components/views/Home';
import { Playlist } from '../components/views/Playlist';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout relative">
          <nav>
            <a href="/" className="flex justify-center pb-3">
              <img src={logo} alt="imagen" className="logo"></img>
            </a>
            <hr />
            <ul className="nav-ul pt-3">
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
                  to="/buscar"
                  className={({ isActive }) =>
                    isActive ? 'underline rounded-md' : ''
                  }
                >
                  <IoMdSearch color="white" />
                  Buscar
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/artistas"
                  className={({ isActive }) => (isActive ? 'underline ' : '')}
                >
                  <BsMusicNoteList color="white" />
                  Fonoteca
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
            <div className="flex justify-center">
              <hr className="w-20 text-white" />
            </div>
          </nav>
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="buscar" element={<Buscar />} />
            <Route path="artistas" element={<Artistas />} />
            <Route path="albums" element={<Albums />} />
            <Route path="playlist" element={<Playlist />} />
            <Route path="/*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
