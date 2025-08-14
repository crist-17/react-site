import React, { useMemo, useState } from 'react';

const Ex_memo1 = () => {
    const [count, setCount] = useState(0)
    const double = useMemo(() => {
        console.log("값 계산중")
        return count *2
    },[count])
    return (
        <>
            <h1>count: {count}</h1>
            <h2>double: {double}</h2>
            <button onClick={()=> setCount(c=>c+1)}>+1</button>
        </>
    );
};

export default Ex_memo1;