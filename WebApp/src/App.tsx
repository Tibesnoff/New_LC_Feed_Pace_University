import React from 'react';
import Header from './components/header/Header';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className='h-screen bg-sky-300'>
        <Header />
      </div>
    </GlobalState>
  );
}

export default App;
