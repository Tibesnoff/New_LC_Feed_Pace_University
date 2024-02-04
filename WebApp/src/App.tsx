import React from 'react';
import Header from './components/header/Header';
import GlobalState from './context/GlobalState';
import Body from './components/middle/Body';
import Ticker from './components/stockticker/Ticker';

function App() {
  return (
    <GlobalState>
      <div className='h-screen bg-sky-300 p-2'>
        <Header />
        <Body />
        <Ticker />
      </div>
    </GlobalState>
  );
}

export default App;
