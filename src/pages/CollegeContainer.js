import React from "react"
import CollegeCard from "../components/CollegeCard"

function CollegeContainer({college, onDelete}) {

return (
    <div>
    <div className="ui grid container">
        
        <CollegeCard college={college} onDelete={onDelete} />
       
    </div>
    </div>
)
}

export default CollegeContainer