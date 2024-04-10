import { useCallback, useEffect, useState } from 'react';
import { Period, WeatherType, highLowPeriod } from '../types/weatherType';

const useWeatherLink = (coordinates: string) => {
    const [link, setLink] = useState<string>('');

    const fetchWeatherLink = useCallback(async () => {
        try {
            const response = await fetch(
                `https://api.weather.gov/points/${coordinates.replace(/\s/g, '')}`,
            );
            if (!response.ok) {
                throw new Error('Error fetching data');
            }
            const data = await response.json();
            const forecastGridData = data?.properties?.forecastGridData;
            if (!forecastGridData) {
                throw new Error('No grid data');
            }
            setLink(forecastGridData + '/forecast');
        } catch (error) {
            console.error(error);
        }
    }, [coordinates]);

    useEffect(() => {
        fetchWeatherLink();
    }, [fetchWeatherLink]);

    return { link };
};

const useWeatherData = (coordinates: string) => {
    const { link } = useWeatherLink(coordinates);
    const [weatherData, setWeatherData] = useState<WeatherType>({
        updateTime: '',
        periods: [],
    });
    const [highLow, setHighLow] = useState<highLowPeriod[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchWeatherData = useCallback(async () => {
        try {
            await fetch(link).then(async (r) => {
                if (!r.ok) throw new Error('Error fetching data');
                const { properties } = await r.json();
                setHighLow((prevHighLow) => {
                    const newHighLow = properties.periods.reduce(
                        (acc: Period[], period: Period, index: number) => {
                            const isEvenIndex = index % 2 === 0;
                            if (isEvenIndex) {
                                return [
                                    ...acc,
                                    {
                                        number: period.number,
                                        high: period.temperature,
                                        low: 0,
                                    },
                                ];
                            } else {
                                return acc.map((item, itemIndex) =>
                                    itemIndex === acc.length - 1 ?
                                        { ...item, low: period.temperature }
                                    :   item,
                                );
                            }
                        },
                        [...prevHighLow],
                    );
                    return newHighLow;
                });
                setWeatherData({
                    updateTime: properties.updateTime,
                    periods: properties.periods
                        .map((period: Period) => ({
                            number: period.number,
                            name: period.name,
                            startTime: period.startTime,
                            detailedForecast: period.detailedForecast,
                            temperature: period.temperature,
                            shortForecast: period.shortForecast,
                        }))
                        .filter((period: Period) => period.number % 2 !== 0),
                });
            });
        } catch (error) {
            console.error(error);
        }
    }, [link]); // Removed highLow from the dependency array

    useEffect(() => {
        if (link !== '') fetchWeatherData();
    }, [fetchWeatherData, link]);

    useEffect(() => {
        if (weatherData.periods.length > 0 && highLow.length > 0) {
            setLoading(false);
        }
    }, [weatherData, highLow]);

    return { weatherData, highLow, loading };
};

export default useWeatherData;
