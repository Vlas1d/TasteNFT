import React, { useState, useEffect } from 'react';

import style from './timer.module.scss';

interface TimerProps {
    targetTime: Date;
}

const Timer = (props: TimerProps) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerInterval);
    }, []);

    const timeDifference = Math.max(props.targetTime.getTime() - time.getTime(), 0);
    const hours = Math.floor(timeDifference / 3600000).toString().padStart(2, '0');
    const minutes = Math.floor((timeDifference % 3600000) / 60000).toString().padStart(2, '0');
    const seconds = Math.floor((timeDifference % 60000) / 1000).toString().padStart(2, '0');

    return (
        <div className={style.timer}>
            {hours}h {minutes}m {seconds}s
        </div>
    );
}

export default Timer;