import React from 'react';
import { decrement, increment, incrementByAmount } from '../js/store_redux_slice';
import { useDispatch, useSelector } from 'react-redux';

const Ex_redux_4 = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
    return (
        <>
            <h2>리덕스</h2>
            <p></p>
            <h1>카운터: {count}</h1>
            <button onClick={()=>dispatch(increment())}>+1</button>
            <button onClick={()=>dispatch(decrement())}>-1</button>
       <button onClick={()=>dispatch(incrementByAmount(5))}>+5</button><hr />
        </>
    );
};

export default Ex_redux_4;