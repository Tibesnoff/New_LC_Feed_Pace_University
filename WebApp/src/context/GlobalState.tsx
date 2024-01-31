import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import context from './context';
import { Period, WeatherType } from '../types/weatherType';

const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
  const [weatherData, setWeatherData] = useState({} as WeatherType);

  const fetchWeatherData = useCallback(async (gridDataLink: string) => {
    await fetch(gridDataLink).then(async (r) => {
      try {
        if (r.ok) {
          const json = await r.json();
          const properties = json.properties;
          setWeatherData({
            updateTime: properties.updateTime,
            periods: properties.periods
              .map(
                (period: {
                  number: number;
                  name: string;
                  startTime: string;
                  detailedForecast: string;
                  temperature: string;
                  shortForecast: string;
                }) => {
                  return {
                    id: period.number,
                    name: period.name,
                    startTime: period.startTime,
                    detailedForecast: period.detailedForecast,
                    temperature: period.temperature,
                    shortForecast: period.shortForecast
                  };
                }
              )
              .filter((period: Period) => !period.name.includes('Night') && !period.name.includes('Tonight'))
          });
        } else {
          throw new Error('Error fetching data');
        }
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  const fetchWeatherLink = useCallback(async () => {
    let gridDataLink = null;
    await fetch('https://api.weather.gov/points/41.12091997761644,-73.81694739810774').then(async (r) => {
      try {
        if (r.ok) {
          const json = await r.json();
          gridDataLink = json.properties.forecastGridData;
          if (gridDataLink === null) {
            throw new Error('No grid data');
          } else {
            await fetchWeatherData(`${gridDataLink}/forecast`);
          }
        } else {
          throw new Error('Error fetching data');
        }
      } catch (e) {
        console.log(e);
      }
    });
  }, [fetchWeatherData]);

  useEffect(() => {
    fetchWeatherLink();
  }, [fetchWeatherLink]);

  return <context.Provider value={{ weatherData: weatherData }}>{children}</context.Provider>;
};

export default GlobalState;
