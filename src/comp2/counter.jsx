import { useState } from "react"

export default function Counter() {
    const [ count, setCount ] = useState(0)
    return (
        <>
            <h2>카운터 {count}</h2>
            <button onClick={() => setCount(count + 1)}>++1중가</button>
            <button onClick={() => setCount(count - 1)}>--1감소</button>
        </>
    )
}