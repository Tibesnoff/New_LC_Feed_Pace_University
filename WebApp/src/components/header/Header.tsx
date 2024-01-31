import React from 'react';
import WeatherBanner from '../weather/WeatherBanner';
import Text from '../../stylizedComponents/Text';

const Header = () => {
    
    return (
        <div className="h-fit flex flex-col justify-center">
            <div className='h-fit mx-auto p-2 rounded-b-md bg-blue-900'>
                <Text classNameProps="font-bold text-4xl text-center" content="Welcome to the Pace University Learning Commons"/>
            </div>
            {WeatherBanner()}
        </div>
    )
}

export default Header;