import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import context from './context';

const GlobalState: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  const [youTubeLink, setYouTubeLink] = useState('DHUnz4dyb54');

  const changeYouTubeLink = (link: string) => {
    const regex = /(?:v=)([^&]+)/;
    const match = link.match(regex);
    if (match) {
      const videoId = match[1];
      setYouTubeLink(videoId);
    }
  };

  const fetchWeatherData = useCallback(async (gridDataLink: string) => {
    return await fetch(gridDataLink).then(async (r) => {
      try {
        if (r.ok) {
          const json = await r.json();
          const properties = json.properties;

          return {
            updateTime: properties.updateTime,
            periods: properties.periods.map(
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
          };
        } else {
          throw new Error('Error fetching data');
        }
      } catch (e) {
        console.log(e);
      }
    });
  }, []);

  const fetchWeatherLink = useCallback(async (coordinates: string) => {
    let gridDataLink = null;
    coordinates = coordinates.replace(/\s/g, '');
    const data = await fetch(`https://api.weather.gov/points/${coordinates}`).then(async (r) => {
      try {
        if (r.ok) {
          const json = await r.json();
          gridDataLink = json.properties.forecastGridData;
          if (gridDataLink === null) {
            throw new Error('No grid data');
          } else {
            return await fetchWeatherData(`${gridDataLink}/forecast`);
          }
        } else {
          throw new Error('Error fetching data');
        }
      } catch (e) {
        console.log(e);
      }
    });

    return data;
  }, []);

  useEffect(() => {
    const today = new Date();

    const formattedDate = today.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');

      setCurrentTime(
        `${+hours <= 12 ? hours : (+hours - 12).toString().padStart(2, '0')}:${minutes}:${seconds} ${+hours < 12 ? 'AM' : 'PM'}`
      );

      // so it updates the date every day without having to refresh the page
      const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
      setCurrentDate(formattedDate);
    };

    const intervalId = setInterval(updateCurrentTime, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <context.Provider
      value={{
        currentDate: currentDate,
        currentTime: currentTime,
        youTubeLink,
        changeYouTubeLink,
        fetchWeatherLink
      }}
    >
      {children}
    </context.Provider>
  );
};

export default GlobalState;
