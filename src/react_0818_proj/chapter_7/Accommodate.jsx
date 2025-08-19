import { useEffect, useState } from "react"
import useCounter from "./useCounter"

const MAX_CAPACITY = 10

function Accommodate() {
    const [isFull, setIsFull] = useState(false)
    const [count, increaseCount, decreaseCount] = useCounter(0)

    const [logs, setLogs] = useState([])
    
    useEffect(()=> {
        setIsFull(count >= MAX_CAPACITY)
       
    }, [count])

     useEffect(()=> {
        console.log("=================")
       console.log("useEffect() is called.")
      console.log(`isFull: ${isFull}`)

    }, [isFull])

    const addLog = (message) => {
        setLogs((prevLogs)=> [...prevLogs, message])
    }

    const handleEnter = () => {
        if (isFull) {
            addLog(`입장실패:정원(${MAX_CAPACITY}) 초과`)
        } else {
            increaseCount()
            addLog(`입장> 현재 인원: ${count+1}명`)
        }
    }

    const handleLeave = () => {
        if (count <= 0) {
            addLog("퇴장 실패: 현재 0명")
        } else {
            decreaseCount()
            addLog(`퇴장 > 현재 인원: ${count-1}명`)
        }
    }

    return (
        <div style={{padding:16}}>
            <h3>chapter_7</h3>
            <p>총 <b>{count}</b>명 수용했습니다.</p>

            <button onClick={handleEnter} disabled={isFull}>입장</button>

            <button onClick={handleLeave}>퇴장</button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다.</p> }
            <hr />
            <h3>로그출력</h3>
            <div style={{textAlign: "left"}}>
                {logs.map((log,idx)=> (
                    <p key={idx}>{log}</p>
                ))}

            </div>

        </div>
    )
}

export default Accommodate