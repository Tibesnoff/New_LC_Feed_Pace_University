import Text from '../../stylizedComponents/Text';
import { AppContextType } from '../../types/AppContextType';
import context from '../../context/context';
import React, { useEffect, useState } from 'react';
import { Period, WeatherType, highLowPeriod } from '../../types/weatherType';
import { titleProps } from '../../types/props';
import { lc_coordinates, lc_locations } from '../../consts/consts';

const WeatherBanner = ({ location = lc_locations.plv, coordinates = lc_coordinates.plv }: titleProps) => {
  const { fetchWeatherLink } = React.useContext(context) as AppContextType;
  const [weatherData, setWeatherData] = useState({} as WeatherType);
  const [highLow, setHighLow] = useState([] as highLowPeriod[]);

  useEffect(() => {
    const fetchWeather = async () => {
      await fetchWeatherLink(coordinates).then((d) => {
        if (d && highLow.length < 7) {
          const periods = d.periods;

          const newHighLow = periods.reduce(
            (acc, period, index) => {
              const isEvenIndex = index % 2 === 0;
              if (isEvenIndex) {
                return [
                  ...acc,
                  {
                    id: period.id,
                    high: 0,
                    low: period.temperature
                  }
                ];
              } else {
                return acc.map((item, itemIndex) => (itemIndex === acc.length - 1 ? { ...item, high: period.temperature } : item));
              }
            },
            [...highLow]
          );

          setHighLow(newHighLow);

          setWeatherData({
            updateTime: d.updateTime,
            periods: d.periods.filter((period: Period) => !period.name.includes('Night') && !period.name.includes('Tonight'))
          });
        }
      });
    };

    weatherData.periods == undefined && fetchWeather();
  });

  const currentForcast = () => {
    const period = weatherData.periods[0];
    return (
      <div className='h-full w-1/4 flex flex-col items-center rounded-md'>
        {period.detailedForecast
          .split('. ')
          .map(
            (sentence: string, index: number) =>
              index < 3 && <Text key={index} classNameProps='text-sm line-clamp-2 text-center' content={sentence} />
          )}
      </div>
    );
  };

  const dayForcast = (period: Period, index: number) => {
    return (
      <div
        key={index}
        className={`h-full w-2/6 ml-2 mr-2 text-center p-1 flex flex-col items-center rounded-md ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'}`}
      >
        <Text classNameProps='font-bold text-sm' content={period.name} />
        <Text classNameProps='text-sm line-clamp-1' content={period.shortForecast} />
        <div className='flex flex-row space-x-3'>
          <Text classNameProps='text-sm' content={`H: ${highLow[index].high}°`} />
          <Text classNameProps='text-sm' content={`L: ${highLow[index].low}°`} />
        </div>
      </div>
    );
  };

  const weekForcast = () => {
    return (
      <div className='h-full w-3/4 pl-4 pr-4 flex flex-row justify-start'>
        {weatherData.periods.map((period: Period, index: number) => index !== 0 && dayForcast(period, index))}
      </div>
    );
  };

  const forcast = () => {
    return (
      <div className='h-fit w-full pl-4 pr-4 flex flex-row justify-center items-center bg-blue-700 rounded-md'>
        {currentForcast()}
        {weekForcast()}
      </div>
    );
  };

  const titles = () => {
    return (
      <div className='h-fit w-full flex-row flex pl-2 pr-2 mb-2'>
        <div className='h-fit w-1/4 text-center'>
          <Text classNameProps='font-bold text-xl' content={`Current Weather in ${location}`} />
        </div>
        <div className='h-fit w-3/4 text-center'>
          <Text classNameProps='font-bold text-xl' content='Weekly Weather' />
        </div>
      </div>
    );
  };

  return (
    <div className='h-30 mt-2 flex flex-col bg-blue-900 p-2 pt-0 items-center rounded-md'>
      {titles()}
      {weatherData.periods && forcast()}
    </div>
  );
};

export default WeatherBanner;
