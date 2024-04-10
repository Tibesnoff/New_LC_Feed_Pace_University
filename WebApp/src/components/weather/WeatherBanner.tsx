import Text from '../../stylizedComponents/Text';
import { Period } from '../../types/weatherType';
import { titleProps } from '../../types/props';
import { lc_coordinates, lc_locations } from '../../consts/consts';
import useWeatherData from '../../hooks/use-weather';

const WeatherBanner = ({
    location = lc_locations.plv,
    coordinates = lc_coordinates.plv,
}: titleProps) => {
    const { weatherData, highLow, loading } = useWeatherData(coordinates);

    const currentForcast = () => {
        const period = weatherData.periods[0];
        return (
            <div className="h-full w-1/4 flex flex-col items-center rounded-md">
                {period.detailedForecast
                    .split('. ')
                    .map(
                        (sentence: string, index: number) =>
                            index < 3 && (
                                <Text
                                    key={index}
                                    classNameProps="text-sm line-clamp-2 text-center"
                                    content={sentence}
                                />
                            ),
                    )}
            </div>
        );
    };

    const dayForcast = (period: Period, index: number) => {
        return (
            <div
                key={index}
                className={`h-full w-2/6 ml-2 mr-2 flex flex-col items-center rounded-md ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'}`}
            >
                <Text
                    classNameProps="font-bold text-sm"
                    content={period.name}
                />
                <div className="w-full h-full p-1 text-center">
                    <Text
                        classNameProps="text-sm line-clamp-1"
                        content={period.shortForecast}
                    />
                </div>
                <div className="flex flex-row space-x-3">
                    <Text
                        classNameProps="text-sm"
                        content={`H: ${highLow[index].high}°`}
                    />
                    <Text
                        classNameProps="text-sm"
                        content={`L: ${highLow[index].low}°`}
                    />
                </div>
            </div>
        );
    };

    const weekForcast = () => {
        return (
            <div className="h-full w-3/4 pl-4 pr-4 flex flex-row justify-start">
                {weatherData.periods.map(
                    (period: Period, index: number) =>
                        index !== 0 && dayForcast(period, index),
                )}
            </div>
        );
    };

    const forcast = () => {
        return (
            <div className="h-fit w-full pl-4 pr-4 flex flex-row justify-center items-center bg-blue-700 rounded-md">
                {currentForcast()}
                {weekForcast()}
            </div>
        );
    };

    const titles = () => {
        return (
            <div className="h-fit w-full flex-row flex pl-2 pr-2 mb-2">
                <div className="h-fit w-1/4 text-center">
                    <Text
                        classNameProps="font-bold text-xl"
                        content={`Current Weather in ${location}`}
                    />
                </div>
                <div className="h-fit w-3/4 text-center">
                    <Text
                        classNameProps="font-bold text-xl"
                        content="Weekly Weather"
                    />
                </div>
            </div>
        );
    };

    return (
        <div className="h-30 mt-2 flex flex-col bg-blue-900 p-2 pt-0 items-center rounded-md">
            {titles()}
            {loading ?
                <Text
                    classNameProps="text-2xl text-center"
                    content="Loading Weather Data..."
                />
            :   forcast()}
        </div>
    );
};

export default WeatherBanner;
