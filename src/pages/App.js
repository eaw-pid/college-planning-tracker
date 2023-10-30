

import React, {useEffect, useState} from "react"
import NavBar from "./NavBar"
import CollegeContainer from "./CollegeContainer"
import CollegeForm from "../components/CollegeFilter"

function App() {

const [colleges, setColleges] = useState([])

 useEffect(()=> {
  fetch("http://localhost:3001/colleges")
  .then(res=>res.json())
  .then(data => setColleges(data))
 }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <h1>College Planner</h1>
        <h2>Picking a college is hard work. Use this tracker to stay organized!</h2>
      </header>
    <div>
      <CollegeForm />
    </div>
    <div>
      {colleges.map((college) => (

        < CollegeContainer key={college.id} college={college}/>
      ))

      }
    </div>
    </div>
  );
}

export default App;
