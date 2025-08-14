import React, { useRef } from 'react';

const Ex_useref1 = () => {
    const inputRef = useRef(null)
    const focusInput = () => {
        inputRef.current.focus()
    }
    return (
        <>
            <input type="text" ref={inputRef} placeholder='여기에 입력' />
            <button onClick={focusInput}>포커스 추가</button>
            <label onClick={focusInput}>ddd</label>
        </>
    );
};

export default Ex_useref1;