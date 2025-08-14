import React, { useCallback, useState, memo } from 'react';

const Child = memo(({onClick}) =>{
    console.log("자식 랜더링")
    return <button onClick={onClick}>자식에서 카운트 증가</button>
})

const Ex_callback2 = () => {
    const [count, setCount] = useState(0)
    const increment = useCallback(()=> {
        setCount((prev)=>prev+1)
    },[])
    return (
        <>
            <p>Count: {count}</p>
            <Child onClick={increment}/>
        </>
    );
};

export default Ex_callback2;