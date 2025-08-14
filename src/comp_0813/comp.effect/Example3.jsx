import React, { useEffect, useState } from 'react';

const Example3 = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)

        return () => {
            clearInterval(timer)
            console.log('타이머종료')
        }
    }, [])


    return (
        <div>
            <p>{seconds}초 경과</p>
        </div>
    );
};

export default Example3;