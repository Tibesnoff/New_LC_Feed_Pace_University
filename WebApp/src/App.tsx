import React from 'react';
import Header from './components/header/Header';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className='h-screen'>{Header()}</div>
    </GlobalState>
  );
}

export default App;
