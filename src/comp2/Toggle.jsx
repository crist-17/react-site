import { useState } from "react"

export default function Toggle() {
    const [ison, setIson] = useState(false)
    return (
        <>
        <button onClick={() => setIson(!ison)}>{ison?'on':'off'}버튼</button>
        
    </>
    )
}