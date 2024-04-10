import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home_landingpage';
import Home_nyc from './pages/Home_nyc';
import Home_plv from './pages/Home_plv';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={Home()} />
                <Route path="/nyc" element={Home_nyc()} />
                <Route path="/plv" element={Home_plv()} />
                <Route path="*" element={<div>404 Page Not Found</div>} />
            </Routes>
        </Router>
    );
}

export default App;
