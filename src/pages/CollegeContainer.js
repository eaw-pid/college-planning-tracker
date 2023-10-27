import React from "react"
import CollegeCard from "./CollegeCard"

function CollegeContainer({college}) {
console.log(college)

return (
    <div className="ui grid container">
        <CollegeCard college={college} />
       
    </div>
)
}

export default CollegeContainer