import YouTubePlayer from './YouTubePlayer';
import Text from '../../stylizedComponents/Text';
import useDate from '../../hooks/use-date';
import useYoutube from '../../hooks/use-youtube';

const Body = () => {
    const { currentDate, currentTime } = useDate();
    const { youTubeLink } = useYoutube();

    return (
        <div className="flex flex-row place-content-center h-2/4 w-full">
            <div className="h-full w-1/2 bg-blue-900 flex flex-col justify-center text-center rounded-l-md">
                <Text
                    classNameProps="text-4xl font-bold"
                    content={currentDate}
                />
                <Text
                    classNameProps="text-4xl font-bold"
                    content={currentTime}
                />
            </div>
            <div className="h-full w-1/2 bg-blue-900">
                <YouTubePlayer videoId={youTubeLink} />
            </div>
        </div>
    );
};

export default Body;
