import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/middle/Body';
import Ticker from '../components/stockticker/Ticker';
import { lc_coordinates, lc_locations } from '../consts/consts';

const Home_nyc = () => {
  return (
    <div className='h-screen bg-sky-300 p-2'>
      <Header location={lc_locations.nyc} coordinates={lc_coordinates.nyc} />
      <Body />
      <Ticker />
    </div>
  );
};

export default Home_nyc;
