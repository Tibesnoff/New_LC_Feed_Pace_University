import React from 'react';
import GlobalState from './context/GlobalState';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <GlobalState>
      <Router>
        <Routes>
          <Route path='/' element={Home()} />
          <Route path='*' element={<div>404 Page Not Found</div>} />
        </Routes>
      </Router>
    </GlobalState>
  );
}

export default App;
