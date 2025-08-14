import React, { useCallback, useEffect, useState } from 'react';

const Ex_callback5 = () => {
    const [count, setCount] = useState(0)
    const handlekeypress = useCallback((e) => {
        if (e.key === "ArrowUp") {
            setCount((prev) => prev + 1)
        } else if (e.key === "ArrowDown") {
            setCount((prev) => prev - 1)
        }
    }, [])

    useEffect(() => {
        window.addEventListener("keydown", handlekeypress)
        return () => {
            window.removeEventListener("keydown", handlekeypress)
        }
    }, [handlekeypress])

    return (
        <>
            <p>ArrowUp 키를 눌러 제어</p>
            <p>Count : {count}</p>

        </>
    );
};

export default Ex_callback5;