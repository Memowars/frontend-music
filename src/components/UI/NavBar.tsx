import { Button } from '@mui/material';
import React from 'react';
import { BsMusicNoteList } from 'react-icons/bs';
import { IoMdHome, IoMdSearch } from 'react-icons/io';
import { MdPlaylistAdd } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo2.png';
const NavBar = () => {
  const navigation = useNavigate();

  const handleLogout = () => {
    navigation('/login');
  };
  return (
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
      <Button onClick={handleLogout} className="">
        Logout
      </Button>
    </nav>
  );
};

export default NavBar;
