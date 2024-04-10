import YoutubePlayer from 'react-player/youtube';
import useYoutube from '../../hooks/use-youtube';

const VideoPlayer: React.FC = () => {
    const { youTubeLink } = useYoutube();

    return (
        <div className="w-full h-full">
            <YoutubePlayer
                width="100%"
                height="100%"
                url={`https://www.youtube.com/watch?v=${youTubeLink}`}
            />
        </div>
    );
};

export default VideoPlayer;
