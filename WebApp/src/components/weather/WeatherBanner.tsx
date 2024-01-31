import Text from "../../stylizedComponents/Text";
import { AppContextType } from "../../types/AppContextType";
import context from "../../context/context";
import React from "react";
import { Period } from "../../types/weatherType";

const WeatherBanner = () => {
    const {weatherData} = React.useContext(context) as AppContextType;

    const currentForcast = () => {
        const period = weatherData.periods[0];
        return (
            <div className="h-full w-1/4 flex flex-col items-center">
                <Text classNameProps="font-bold text-sm line-clamp-1" content="Current Weather in Pleasentville"/>
                <Text classNameProps="text-sm line-clamp-1" content={period.shortForecast}/>
                <Text classNameProps="text-sm" content={period.temperature + "°"}/>
            </div>
        )
    }

    const dayForcast = (period: Period, index: number) => {
        console.log(period.id);
        return (
            <div className={`h-full w-2/6 ml-2 mr-2 flex flex-col items-center ${index % 2 === 0?"bg-blue-600":"bg-blue-500"}`}>
                <Text classNameProps="font-bold text-sm" content={period.name}/>
                <Text classNameProps="text-sm line-clamp-1" content={period.shortForecast}/>
                <Text classNameProps="text-sm" content={period.temperature + "°"}/>
            </div>
        )
    }

    const weekForcast = () => {
        return (
            <div className="h-full w-3/4 pl-4 pr-4 flex flex-row justify-end">
                {
                    weatherData.periods && weatherData.periods.map((period: Period, index: number) => index !== 0 && dayForcast(period, index))
                }
            </div>
        )
    }

    return (
        <div className="h-28 border-4 flex flex-col bg-blue-900 p-2 pt-0 items-center">
            <Text classNameProps="font-bold text-xl" content="Weather"/>
            <div className="h-full w-full pl-4 pr-4 flex flex-row justify-center bg-blue-700">
                {weatherData.periods && currentForcast()}
                {weekForcast()}
            </div>
        </div>
    )
}

export default WeatherBanner;
