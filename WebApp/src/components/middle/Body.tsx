import Text from '../../stylizedComponents/Text';
import useDate from '../../hooks/use-date';
import VideoPlayer from './VideoPlayer';

const Body = () => {
    const { currentDate, currentTime } = useDate();

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
                <VideoPlayer />
            </div>
        </div>
    );
};

export default Body;
