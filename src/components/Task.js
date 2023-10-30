import React from "react"

function Task({item}) {
console.log(item)

return (
    <>
    <li>
        <span>{item.task}</span>
        <button>✅</button>
    </li>
    </>
)
}

export default Task