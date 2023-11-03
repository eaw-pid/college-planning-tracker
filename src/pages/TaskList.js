import React from "react"
import NavBar from "./NavBar"
import TaskForm from "../components/TaskForm"

function TaskList() {
 return (
 <div className="App">
        <h1 className="home-header">Task List</h1>
        <TaskForm />
  </div> 
 )
}

export default TaskList