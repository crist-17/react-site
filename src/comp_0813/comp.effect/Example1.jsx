import React, { useEffect } from 'react';

const Example1 = () => {
      useEffect(() => {
        console.log("컴포넌트가 마운트됨")
      },[])
    return (
        <div>
            <h2>예제1: 마운트시 콘솔출력</h2>
        </div>
    );
};

export default Example1;