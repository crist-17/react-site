import React, { useState } from 'react';
import { store_public } from '../js//store_public';

const Ex_js_2 = () => {
    //useState(외부js에 있는 count를 사용)
    const [count, setCount] = useState(store_public.count)

    const handleClick = () => {
        //외부 js에 있는 메소드(increment)
        store_public.increment()
        //강제로 랜더링
        setCount(store_public.count)
    }

    const handleClick2 = () => {
        //외부 js에 있는 메소드(increment)
        store_public.decrement()
        //강제로 랜더링
        setCount(store_public.count)
    }

    const handleClick3 = () => {
        //외부 js에 있는 메소드(increment)
        store_public.reset()
        //강제로 랜더링
        setCount(store_public.count)
    }



    return (
        <div>
            <h3>외부js사용</h3>
            <p>카운트: {count}</p>
            <button onClick={handleClick}>++1 증가</button>
            <button onClick={handleClick2}>--1 증가</button>
            <button onClick={handleClick3}>리셋</button><hr />

        </div>
    );
};

export default Ex_js_2;