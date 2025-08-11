import { useState } from 'react';
import './Check.css';

function Check(props) {

    const [isChecked, setIsChecked] = useState(false);
    const handleClick = () => !isChecked && setIsChecked(true);
    return (
        <div id="check" className={isChecked ? 'checked-box' : ''}>
            
        <h2 className={isChecked ? 'colored' : ''}><b>{props.num}</b> 학생의 이름은 <b>{props.name}</b> 입니다.</h2><button id="btn" onClick={handleClick}>출석</button>
        </div>
    )
}

export default Check