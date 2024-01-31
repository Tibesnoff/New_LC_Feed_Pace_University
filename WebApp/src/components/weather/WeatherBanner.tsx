import Text from '../../stylizedComponents/Text';
import { AppContextType } from '../../types/AppContextType';
import context from '../../context/context';
import React from 'react';
import { Period } from '../../types/weatherType';

const WeatherBanner = () => {
  const { weatherData } = React.useContext(context) as AppContextType;

  function getHighLow(description: string) {
    const tempMatches = description.match(/\b\d+\b(?!\s*mph)/g);

    if (!tempMatches) {
      return { highTemp: null, lowTemp: null };
    }

    const temps = tempMatches.map(Number);
    const highTemp = Math.max(...temps);
    const lowTemp = Math.min(...temps);

    return { highTemp, lowTemp };
  }

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
    const highLow = getHighLow(period.detailedForecast);
    return (
      <div
        key={index}
        className={`h-full w-2/6 ml-2 mr-2 flex flex-col items-center rounded-md ${index % 2 === 0 ? 'bg-blue-600' : 'bg-blue-500'}`}
      >
        <Text classNameProps='font-bold text-sm' content={period.name} />
        <Text classNameProps='text-sm line-clamp-1' content={period.shortForecast} />
        <div className='flex flex-row space-x-3'>
          <Text classNameProps='text-sm' content={`H: ${highLow.highTemp}°`} />
          <Text classNameProps='text-sm' content={`L: ${highLow.lowTemp}°`} />
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
          <Text classNameProps='font-bold text-xl' content='Current Weather in Pleasentville' />
        </div>
        <div className='h-fit w-3/4 text-center'>
          <Text classNameProps='font-bold text-xl' content='Weekly Weather' />
        </div>
      </div>
    );
  };

  return (
    <div className='h-30 m-2 flex flex-col bg-blue-900 p-2 pt-0 items-center rounded-md'>
      {titles()}
      {weatherData.periods && forcast()}
    </div>
  );
};

export default WeatherBanner;
