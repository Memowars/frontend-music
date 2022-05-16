import React from 'react';

import Banner from '../UI/Banner';
import CardArtis from '../UI/CardArtist';
const Home = () => {
  return (
    <div className="component-layout w-full h-screen overflow-auto">
      <Banner />
      <h1 className="font-bold text-3xl">Artistas recomendados para ti</h1>
      <div className="grid grid-cols-4 col-span-1 gap-8 justify-center w-full pt-5">
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
        <CardArtis />
      </div>
    </div>
  );
};

export default Home;
