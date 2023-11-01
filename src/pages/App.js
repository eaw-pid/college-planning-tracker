

import React, {useEffect, useState} from "react"
import {Outlet} from "react-router-dom"
import NavBar from "./NavBar"
import CollegeContainer from "./CollegeContainer"
import CollegeFilter from "../components/CollegeFilter"
import CollegeForm from "../components/CollegeForm"

function App() {

const [colleges, setColleges] = useState([])

 useEffect(()=> {
  fetch("http://localhost:3001/colleges")
  .then(res=>res.json())
  .then(data => setColleges(data))
 }, [])

 function handleDeleteCollege(deletedCollege) {
  const updatedColleges = colleges.filter((college) => college.id !== deletedCollege.id)
  setColleges(updatedColleges)
 }

 function handleAddCollege(newCollege) {
  setColleges([...colleges, newCollege])
 }
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>College Planner</h1>
        <h2>Picking a college is hard work. Use this tracker to stay organized!</h2>
      </header>
    <div>
      <CollegeForm onAddCollege={handleAddCollege} />
    </div>
    <div>
      <CollegeFilter />
    </div>
    <div>
      <h2>My Colleges</h2>
        <Outlet />
      {colleges.map((college) => (
        < CollegeContainer key={college.id} college={college} onDelete={handleDeleteCollege}/>
       
      ))

      }
    </div>
    </div>
  );
}

export default App;
