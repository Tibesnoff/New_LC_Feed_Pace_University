import Header from '../components/header/Header';
import Body from '../components/middle/Body';
import Ticker from '../components/stockticker/Ticker';
import { lc_coordinates, lc_locations } from '../consts/consts';

const Home_plv = () => {
    return (
        <div className="h-screen bg-sky-300 p-2">
            <Header
                location={lc_locations.plv}
                coordinates={lc_coordinates.plv}
            />
            <Body />
            <Ticker />
        </div>
    );
};

export default Home_plv;
