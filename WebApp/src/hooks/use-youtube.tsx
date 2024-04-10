import { useEffect, useState } from 'react';

const useYoutube = () => {
    const url = process.env.REACT_APP_YOUTUBE_LINK;
    const [youTubeLink, setYouTubeLink] = useState('DHUnz4dyb54');

    const changeYouTubeLink = (link: string) => {
        const regex = /(?:v=)([^&]+)/;
        const match = link.match(regex);
        if (match) {
            const videoId = match[1];
            setYouTubeLink(videoId);
        }
    };

    useEffect(() => {
        if (url) {
            changeYouTubeLink(url);
        }
    }, [url]);

    return { youTubeLink };
};

export default useYoutube;
