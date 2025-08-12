import { useState } from "react"

export default function Inputmir() {
    const [text,setText] = useState("")
    return (
        <>
        <input type="text"
        onChange={(e) => setText(e.target.value)}
         value={text} placeholder="입력 ㄱ" />
         <p>입력된값: {text}</p>
        </>
        
    )
}