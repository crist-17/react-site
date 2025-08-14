import React, { useEffect, useState } from 'react';

 
const Example2 = () => {
       const [count, setCount] = useState(0)
       useEffect(()=>{
        console.log(`count값이 변경됨:${count}`)
    },[count])  

    return (
        <div>
            <h2>예제2:상태변경감지</h2>           
            <p>카운트 : {count}</p>
            <button onClick={() => setCount(count+1)}>증가</button>
        </div>
    );
};

export default Example2;