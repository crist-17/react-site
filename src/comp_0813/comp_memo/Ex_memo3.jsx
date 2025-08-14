import React, { useMemo, useState } from 'react';

const users = [
     { id: 0, name: "비활성목록", active:false},
    { id: 1, name: "lee", active:false},
    { id: 2, name: "활성목록", active:true},
    { id: 3, name: "kim", active:true},
    { id: 4, name: "park", active:true},
]

const Ex_memo3 = () => {
    const [showActive, setShowActive] = useState(true)

    const filteredUsers = useMemo(() => {
            console.log ("사용자 필터링 실행")

            return users.filter(user => user.active=== showActive)
    },[showActive])
    return (
        <div>
            <button onClick={()=> setShowActive(a => !a)}>
                {showActive ? "비활성사용자" : "활성사용자"}
            </button>
            <ul>
               
                    {filteredUsers.map(u=>(
                        <li key={u.id}>{u.name}님은 {String(u.active)}  </li>
                    ))}
               
            </ul>
        </div>
    );
};

export default Ex_memo3;