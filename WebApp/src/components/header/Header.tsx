import React from 'react';
import WeatherBanner from '../weather/WeatherBanner';

const Header = () => {
    
    return (
        <div className="h-1/5 border-2 border-stone-950">{WeatherBanner()}</div>
    )
}

export default Header;