import React from "react"

function Task({item}) {
console.log(item)

return (
    <>
    <li>
        <span>{item.task}</span>
        <input type="checkbox" id="todo" name="todo" value="todo"></input>
    </li>
    </>
)
}

export default Task