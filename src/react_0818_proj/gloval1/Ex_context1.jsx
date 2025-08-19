import React from 'react';
import { useGloval } from './Ex_cont';
 // 커스텀 훅 import 필요!

const Ex_context1 = () => {
  // 객체 구조분해로 받아야 함
  const { count, setCount } = useGloval(0);

  return (
    <>
    <h3>훅 사용</h3>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1 증가</button><hr />
    </>
  );
};

export default Ex_context1;