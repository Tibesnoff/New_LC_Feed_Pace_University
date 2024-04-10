import Header from '../components/header/Header';
import Text from '../stylizedComponents/Text';
import Pace_NYC from '../images/Pace_NYC.jpg';
import Pace_PLV from '../images/Pace_PLV.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="h-screen bg-sky-300 p-2">
            <Header weather_banner={false} />
            <div className="rounded-md bg-blue-900 p-2 flex flex-col justify-center h-2/3 text-center">
                <div className="h-1/6 w-full">
                    <Text
                        content={'Please Select LC Location'}
                        classNameProps={' text-4xl text-center'}
                    />
                </div>
                <div className="h-5/6 w-full flex flex-row justify-center">
                    <Link to="/nyc" className="h-full w-1/2">
                        <img
                            alt="Pace NYC Campus"
                            src={Pace_NYC}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                            className="w-full h-full"
                        />
                    </Link>
                    <Link to="/plv" className="h-full w-1/2">
                        <img
                            alt='Pace PLV Campus'
                            src={Pace_PLV}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
