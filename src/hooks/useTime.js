import { useEffect } from 'react';
import useTimeStore from '../store/timeStore';

export function useTime(interval = 30000) {
    const { currentTime, updateTime } = useTimeStore();

    useEffect(() => {
        const timer = setInterval(() => {
            updateTime(new Date());
        }, interval);

        return () => clearInterval(timer);
    }, [interval, updateTime]);

    return currentTime;
}
