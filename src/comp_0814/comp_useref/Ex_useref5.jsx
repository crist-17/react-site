import React, { useRef } from 'react';

const Ex_useref5 = () => {
    const itemsRef = useRef([])

    const addItem = () => {
        //"Item 1", "Item 2", "Item 3" ...생성
        const newItem = `Item ${itemsRef.current.length+1}`

        //배열에 직접 추가 (setState X)
        itemsRef.current = [...itemsRef.current, newItem]

        //콘솔에서 배열확인
        console.log(itemsRef.current)
    }
    return (
        <>
            
            <button onClick={addItem}>Add item 콘솔확인</button>
            <ul>
                {
                 itemsRef.current.map((item,index)=>(<li key={index}>
                    {item}</li>
                 ))}
                 </ul>
            </>
        
    );
};

export default Ex_useref5;