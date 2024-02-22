import { WeatherType } from './weatherType';

export interface AppContextType {
  weatherData: WeatherType;
  currentDate: string;
  currentTime: string;
  youTubeLink: string;
  changeYouTubeLink: (_link: string) => void;
}
