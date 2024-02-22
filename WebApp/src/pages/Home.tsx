import React from 'react';
import Header from '../components/header/Header';
import Body from '../components/middle/Body';
import Ticker from '../components/stockticker/Ticker';

const Home = () => {
  return (
    <div className='h-screen bg-sky-300 p-2'>
      <Header />
      <Body />
      <Ticker />
    </div>
  );
};

export default Home;
