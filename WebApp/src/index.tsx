import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalState from './context/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalState>
      <div className='bg-blue-100 h-auto border-b-2 border-black'>
        <App />
      </div>
    </GlobalState>
  </React.StrictMode>
);
