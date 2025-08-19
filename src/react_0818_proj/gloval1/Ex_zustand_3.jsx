import React from 'react';
import { store_zustand } from '../js/store_zustand';

 const Ex_zustand_3 = () => {
    const {count, increment, decrement } = store_zustand()
    
    return (
        <>
        <h3>주스탠드</h3>
            <p>카운트: {count}</p>
            <button onClick={increment}>+1 증가</button>
             <button onClick={decrement}>-1 감소</button><hr />

        </>
    );
};

export default Ex_zustand_3;