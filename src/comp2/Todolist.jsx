import { useState } from "react"

export default function Todolist() {
const [todo, setTodo] = useState("")
const [todos,setTodos] = useState([])

const addTodo = () => {
    if(todo.trim()) {
        setTodos([...todos, todo])
        setTodo("")
    }
}
    return (
        <>
        <h2>할일목록</h2>
        <input type="text" 
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="할일 입력" />
        <button onClick={addTodo}>추가</button>
        <ul>
            {
                todos.map((item, index) => (

                <li key={index}>{item}</li>))
            }
        </ul>
        </>
    )
}