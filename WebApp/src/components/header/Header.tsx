import WeatherBanner from '../weather/WeatherBanner';
import Text from '../../stylizedComponents/Text';
import { titleProps } from '../../types/props';

const Header = ({
    location,
    coordinates,
    weather_banner = true,
}: titleProps) => {
    return (
        <div className="h-fit flex flex-col justify-center mb-2">
            <div className="h-fit mx-auto p-2 rounded-md bg-blue-900">
                <Text
                    classNameProps="font-bold text-4xl text-center"
                    content="Welcome to the Pace University Learning Commons"
                />
            </div>
            {weather_banner &&
                location &&
                WeatherBanner({ location, coordinates })}
        </div>
    );
};

export default Header;
