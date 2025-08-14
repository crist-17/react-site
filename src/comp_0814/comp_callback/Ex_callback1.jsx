import React, { useCallback, useState } from 'react';

const Ex_callback1 = () => {

    const [count, setCount] = useState(0)
    const handleIncrement = useCallback(()=> {
        setCount((prev) => prev+1)
    },[])

console.log("컴포넌트렌더링")
    return (
        <>
            <p>Count: {count}</p>     
            <button onClick={handleIncrement}>+1 증가 </button>
        </>
    );
};

export default Ex_callback1;