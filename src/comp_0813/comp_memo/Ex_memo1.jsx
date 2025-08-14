import React, { useMemo, useState } from 'react';

const Ex_memo1 = () => {
    const [count,setCount] = useState(0)

    const double = useMemo(() => {
        console.log("double 값 계산중")

        return(count*2)
    },[count])
    return (
        <div>
            <h1>count:{count}</h1>
            <h2>double:{double}</h2>
            <button onClick={() => setCount(c=>c+1)}>++1</button>
        </div>
    );
};

export default Ex_memo1;