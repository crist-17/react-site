import React from "react"

const students = [
    {
        id: 1,
        name: "InJe",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "jeff",
    },
]

function AttendanceBook(props) {
    return (
        <div>
            <h3>Chapter_10</h3>
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>
            })}
        </ul>
        </div>
    )
}

export default AttendanceBook