import React from 'react';
import Header from './components/header/Header';
import GlobalState from './context/GlobalState';
import Body from './components/middle/Body';

function App() {
  return (
    <GlobalState>
      <div className='h-screen bg-sky-300 p-2'>
        <Header />
        <Body />
      </div>
    </GlobalState>
  );
}

export default App;
