import React from 'react';
import YouTubePlayer from './YouTubePlayer';
import Text from '../../stylizedComponents/Text';
import context from '../../context/context';
import { AppContextType } from '../../types/AppContextType';

const Body = () => {
  const { currentDate, currentTime } = React.useContext(context) as AppContextType;

  const url = process.env.REACT_APP_YOUTUBE_LINK;

  return (
    <div className='flex flex-row place-content-center h-2/4 w-full'>
      <div className='h-full w-1/2 bg-blue-900 flex flex-col justify-center text-center rounded-l-md'>
        <Text classNameProps='text-4xl font-bold' content={currentDate} />
        <Text classNameProps='text-4xl font-bold' content={currentTime} />
      </div>
      <div className='h-full w-1/2 bg-blue-900'>
        <YouTubePlayer videoId={url ? url : 'DHUnz4dyb54'} />
      </div>
    </div>
  );
};

export default Body;
