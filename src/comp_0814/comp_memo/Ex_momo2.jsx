import React, { useMemo, useState } from 'react';

function heavyCalculator(num) {
    console.log ("~~무거운계산실행중")
    let total = 0
    for (let i = 0; i < 1e7; i++)
        total += num

    return total
}

const Ex_momo2 = () => {
    const [num, setNum] = useState(1)
    const[theme, setTheme] = useState(false)

    const total = useMemo(()=> heavyCalculator(num),[num])
    return (
        <div style={{background: theme ? "#222" : "#dac50dff",
            color: theme ? "#fff" : "#000"
        }}>
            <input type="number"
            value={num}
            onChange={e => setNum(Number(e.target.value))} />
            <p>결과:{total}</p>
            <button onClick={()=>setTheme(t=>!t)}>테마변경</button>
        </div>
    );
};

export default Ex_momo2;