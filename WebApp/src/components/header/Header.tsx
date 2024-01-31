import React from 'react';
import WeatherBanner from '../weather/WeatherBanner';
import Text from '../../stylizedComponents/Text';

const Header = () => {
    
    return (
        <div className="h-fit border-2 border-stone-950">
            <Text classNameProps="font-bold text-2xl text-center text-black" content="Welcome to the Pace University Learning Commons"/>
            {WeatherBanner()}
        </div>
    )
}

export default Header;