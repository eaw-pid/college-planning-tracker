import React, {useState, useEffect} from "react"
import Task from "./Task"

function TaskForm() {

const [tasks, setTasks] = useState([])
const [newTaskField, setNewTaskField] = useState("")

useEffect(()=> {
    fetch("http://localhost:3001/items")
    .then(res=>res.json())
    .then(data => setTasks(data))
}, [])

function handleSubmit(e) {
    e.preventDefault()
    const newTask = {
        task: newTaskField
        }

    fetch("http://localhost:3001/items", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newTask)
})
    .then(res=>res.json())
    .then(newItem => setTasks([...tasks, newItem]))
    setNewTaskField("")
} 

function handleDeleteTask(deletedTask) {
    //console.log(deletedTask)
    const updatedTasks = tasks.filter((task) => task.id !== deletedTask.id)
    setTasks(updatedTasks)
}

 return (
    <div className="TaskList">
        <div className="TaskForm">
            <h3>Add New Task</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Enter Task" 
                    value={newTaskField}
                    onChange={(e) => setNewTaskField(e.target.value)}>
                </input>
                <input 
                    type="submit" 
                    value="Submit">
                </input>
            </form>
        </div>
    <div>
        <h3>My Tasks</h3>
    </div>
    <div className="Items">
        {tasks.map((item) => (
            <Task key={item.id} item={item} onDeleteTask={handleDeleteTask}/>
        ))}
    </div>
    </div>

 )
}

export default TaskForm