import React from "react"
import NavBar from "./NavBar"
import TaskForm from "../components/TaskForm"

function TaskList() {
 return (
 <div className="App">
    <header >
      <NavBar />
        <h1>Task List</h1>
    </header>
  
     <TaskForm />

  </div> 
 )
}

export default TaskList