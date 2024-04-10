import { useCallback, useEffect, useState } from 'react';

const useDate = () => {
    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');

    const updateCurrentTime = useCallback(() => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        setCurrentTime(
            `${+hours <= 12 ? hours : (+hours - 12).toString().padStart(2, '0')}:${minutes}:${seconds} ${+hours < 12 ? 'AM' : 'PM'}`,
        );

        // so it updates the date every day without having to refresh the page
        const formattedDate = now.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });
        setCurrentDate(formattedDate);
    }, []);

    useEffect(() => {
        const today = new Date();

        const formattedDate = today.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
        });

        setCurrentDate(formattedDate);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(updateCurrentTime, 500);

        return () => clearInterval(intervalId);
    }, [updateCurrentTime]);

    return { currentDate, currentTime };
};

export default useDate;
