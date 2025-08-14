import React, { useEffect, useRef, useState } from 'react';

const Ex_useref4 = () => {
    const [value, setValue] = useState("")
    const prevValue = useRef("")

    useEffect(() => {
        prevValue.current = value
    },[value])
    return (
        <>
            <input value={value} onChange={(e)=>setValue(e.target.value)} />   
            <p>현재 값: {value}</p>        
            <p>이전 값: {prevValue.current}</p>
        </>
    );
};

export default Ex_useref4;