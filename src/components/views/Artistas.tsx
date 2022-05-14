import React, { useState } from 'react';
import CardAlbum from '../UI/CardAlbum';
export const Artistas = () => {
  return (
    <div className="w-full h-screen  overflow-auto bg-black ">
      <div className="">
        <div className="w-full h-96 rounded-md hellga">
          <div className="flex flex-col align-bottom gap-4 p-4 pl-8 pt-8 bg-gradient-to-r from-black to-transparent">
            <h1 className="text-6xl font-bold">Pink Floyd</h1>
            <p className="text-sm font-bold">15,243,903 oyentes mensuales</p>
          </div>
        </div>
        <div className="component-layout">
          <h1>Albums</h1>
          <div className="grid grid-cols-2 col-span-1 justify-center gap-4">
            <CardAlbum />
            <CardAlbum />
            <CardAlbum />
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-full h-96 rounded-md hellga">
          <div className="flex flex-col align-bottom gap-4 p-4 pl-8 pt-8 bg-gradient-to-r from-black to-transparent">
            <h1 className="text-6xl font-bold">Pink Floyd</h1>
            <p className="text-sm font-bold">15,243,903 oyentes mensuales</p>
          </div>
        </div>
        <div className="component-layout">
          <h1>Albums</h1>
          <div className="grid grid-cols-2 col-span-1 justify-center gap-4">
            <CardAlbum />
            <CardAlbum />
            <CardAlbum />
          </div>
        </div>
      </div>
    </div>
  );
};
