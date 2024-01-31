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
                {period.detailedForecast.split('. ').map((sentence:string, index:number) => (
                index < 3 && <Text key={index} classNameProps="text-sm line-clamp-2 text-center" content={sentence}/>
            ))}
            </div>
        )
    }

    const dayForcast = (period: Period, index: number) => {
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

    const forcast = () =>{
        return (
            <div className="h-full w-full pl-4 pr-4 flex flex-row justify-center bg-blue-700">
                {weatherData.periods && currentForcast()}
                {weekForcast()}
            </div>
        )
    }

    const titles = () => {
        return (
            <div className="h-fit w-full flex-row flex pl-2 pr-2"> 
                <div className="h-fit w-1/4 text-center">
                    <Text classNameProps="font-bold text-xl" content="Current Weather in Pleasentville"/>
                </div>
                <div className="h-fit w-3/4 text-center">
                    <Text classNameProps="font-bold text-xl" content="Weekly Weather"/>
                </div>
            </div>
        )
    }

    return (
        <div className="h-28 m-2 flex flex-col bg-blue-900 p-2 pt-0 items-center">
            {titles()}
            {forcast()}
        </div>
    )
}

export default WeatherBanner;
