import React, { useMemo, useState } from 'react';

function Child({config}) {
    console.log("Child 랜더린")
    return <div>name: {config.theme}</div>
}

const Ex_memo4 = () => {

    const [theme, setTheme] = useState("light")
    const [count, setCount] = useState(0)

    const config = useMemo(() => ({theme}),[theme])

    return (
        <>
            <Child config={config}/>
            <button onClick={()=> setTheme(t=> (t=== "light" ? "dark" : "light"))}>
                테마변경
            </button>
            <button onClick={()=>setCount(c=>c+1)}>Count:{count}</button>
        </>
    );
};

export default Ex_memo4;