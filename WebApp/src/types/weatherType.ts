export interface WeatherType {
    periods: Period[];
    updateTime: string;
}

export interface Period {
    number: number;
    detailedForecast: string;
    name: string;
    startTime: string;
    shortForecast: string;
    temperature: number;
}

export interface highLowPeriod {
    id: number;
    high: number;
    low: number;
}
