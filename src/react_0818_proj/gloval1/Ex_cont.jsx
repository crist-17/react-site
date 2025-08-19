import { createContext, useContext, useState } from 'react';

// Context 생성
const GlobalContext = createContext();

// Provider 생성
const Ex_cont = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <GlobalContext.Provider value={{ count, setCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Ex_cont;

// 커스텀 훅
export const useGloval = () => useContext(GlobalContext);