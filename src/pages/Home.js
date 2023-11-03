import React, {useState, useEffect} from "react"
import CollegeFilter from "../components/CollegeFilter"
import CollegeForm from "../components/CollegeForm"
import CollegeCard from "../components/CollegeCard"

function Home() {

    const [colleges, setColleges] = useState([])
    const [selected, setSelected] = useState("all")

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

   const filteredColleges = colleges.filter((college) => {
         if (selected === "all") {
            return true
         } else if (selected === "small") {
            return college.enrollment <=5000
         } else if (selected === "midsize") {
            return college.enrollment >= 5001 && college.enrollment <= 15000
         } else if (selected === "large"){
            return college.enrollment >=15001
         }
    
   })
  
    return (
        <div className="App">
          <h1 className="home-header">College Planner</h1>
          <p>Picking a college is hard work. Use this tracker to stay organized as you decide where you want to go!</p>
        <div>
            <CollegeForm onAddCollege={handleAddCollege} />
        </div>
        <div>
            <CollegeFilter setSelected={setSelected}/>
         </div>
         <div>
      <h2>My Colleges</h2>
      <div className="ui grid container" id="college-container">
        {filteredColleges.map((college) => (
          <div key={college.id} className="ui four wide column">
            <CollegeCard college={college} onDelete={handleDeleteCollege} />
          </div>
        ))}
      </div>
    </div>
      </div>
    )
    }

    export default Home

    // CollegeContainer key={college.id} college={college} onDelete={handleDeleteCollege}/>