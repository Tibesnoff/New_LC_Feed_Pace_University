import { WeatherType } from './weatherType';

export interface AppContextType {
  currentDate: string;
  currentTime: string;
  youTubeLink: string;
  changeYouTubeLink: (_link: string) => void;
  fetchWeatherLink: (_coordinate: string) => Promise<WeatherType | undefined>;
}
