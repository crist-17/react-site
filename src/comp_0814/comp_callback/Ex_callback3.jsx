import React, { useCallback, useState } from 'react';

const Ex_callback3 = () => {

    const [count, setCount] = useState(0)
    const[step, setStep] = useState(1)

    const increment = useCallback(()=>{
        setCount((prev)=> prev+1)
        console.log(count)
    },[count])
    return (
        <>
            <p>Count: {count}</p>
                <input type="unber" value={step}
                 onChange={(e)=>setStep(Number(e.target.value))} />
                 <button onClick={increment}>증가</button>
        </>
    );
};

export default Ex_callback3;