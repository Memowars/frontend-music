import React, { useState } from 'react';
import { MdOutlineArrowDropDownCircle } from 'react-icons/md';
import { SiCashapp } from 'react-icons/si';
import { AiFillPlayCircle } from 'react-icons/ai';
import albumImg from '../../assets/the-wall.png';
import Albums from '../views/Albums';

const CardAlbum = () => {
  const [toggle, setToggle] = useState(true);
  const cambio = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="relative h-80 w-auto bg-gray-700 bg-opacity-30 rounded-md hover:bg-gray-800">
        <div onClick={cambio} className="cursor-pointer">
          <MdOutlineArrowDropDownCircle
            color="white"
            className="absolute top-1 right-1 text-xl z-40"
          />
        </div>
        {toggle ? (
          <div className="p-2 animate__animated animate__fadeIn">
            <div className="relative w-52 ">
              <img src={albumImg} alt="album-img" className="w-52 rounded-md" />
              <span
                className="absolute top-2 right-2 z-50 cursor-pointer "
                onClick={cambio}
              >
                <AiFillPlayCircle className="text-6xl bg-gray-400 hover:bg-black rounded-full" />
              </span>
            </div>
            <div className="pt-2">
              <h1>The Wall</h1>
              <h4>1979 - Rock Psicodelico</h4>
            </div>
            <span className="absolute bottom-1 right-1">
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <p>Comprar album</p>
                <SiCashapp />
              </div>
            </span>
          </div>
        ) : (
          <Albums />
        )}
      </div>
    </>
  );
};

export default CardAlbum;
