import { useState } from "react";

function ConfurmButton() {
    const [isConfirmed, setIsConfirmed] = useState(false)

    const handlConfirm = () => {
        setIsConfirmed((prevIsConfirmed)=> !prevIsConfirmed)
    }

    return (
        <div>
            <h3>Chapter_8</h3>
            <p>- 눌러서 확인 -</p>
        <button onClick={handlConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
        </div>
    )
}

export default ConfurmButton