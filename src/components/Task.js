import React from "react"

function Task({item, onDeleteTask}) {

function handleDelete() {
    fetch(`http://localhost:3001/items/${item.id}`, {
        method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onDeleteTask(item))
}

return (

    <div className="ui centered card" onClick={handleDelete}>
        <div className="content">
            <div className="header">{item.task}</div>
            <div className="extra content">
                <i className="check icon"></i>
            </div>
        </div>
    </div>
        // {/* <span>{item.task}</span>
        // <button>✅</button> */} 
)
}

export default Task