import React, { useMemo, useState } from 'react';

function heavyCalculator(num) {
    console.log("무거운거실행")
    let total = 0
    for (let i = 0 ; i < 1e7; i++) {
        total += num
    }
    return total
}

const Ex_memo2 = () => {
    const [num, setNum] = useState(0)
    const [theme, setTheme] = useState(false)
const total = useMemo(() => {heavyCalculator(num)},[num])

    return (
        <div style = {{
            background: theme ? "#222" : "#ce1515ff",
            color: theme ? "#3fff" :"#03eb6bff"
        }}>
            <input type="number" 
            value={num} onChange={(e)=>setNum(e.target.value)} />
            <p>결과{total}</p>
            <button  onClick={()=>setTheme((t)=> !t)}>테마변경</button>
            
        </div>
    );
};

export default Ex_memo2;