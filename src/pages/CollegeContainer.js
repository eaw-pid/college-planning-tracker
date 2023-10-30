import React from "react"
import CollegeCard from "../components/CollegeCard"

function CollegeContainer({college}) {

return (
    <div className="ui grid container">
        <CollegeCard college={college} />
       
    </div>
)
}

export default CollegeContainer