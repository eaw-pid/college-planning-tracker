import React, {useState, useEffect} from "react"
import Task from "./Task"

function TaskForm() {

const [tasks, setTasks] = useState([])

useEffect(()=> {
    fetch("http://localhost:3001/items")
    .then(res=>res.json())
    .then(data => setTasks(data))
}, [])

//console.log(tasks)
 return (
    <div className="TaskList">
        <div className="TaskForm">
            <h2>Add New Task</h2>
            <form>
                <input type="text" placeholder="Enter Task"></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    <div>
        <h2>My Tasks</h2>
    </div>
    <ul className="Items">
        {tasks.map((item) => (
            <Task key={item.id} item={item}/>
        ))}
    </ul>
    </div>

 )
}

export default TaskForm