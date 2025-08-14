import React, { useRef, useState } from 'react';

const Ex_useref2 = () => {
    const renderCount =useRef(0)
    const [text, setText] = useState("")

    renderCount.current += 1
    return (
        <>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <p>랜더링 횟수:{renderCount.current}</p>
        </>
    );
};

export default Ex_useref2;