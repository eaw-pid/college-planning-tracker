import React from "react";
import {Card, Icon, Image} from "semantic-ui-react"

function CollegeCard({college, onDelete}) {

function handleDelete() {
    console.log(college.id)
    fetch(`http://localhost:3001/colleges/${college.id}`, {
    method: "DELETE"
  })
  .then(res => res.json())
  .then(() => onDelete(college))

}

    return (
        <div className="ui four wide column">
        <div className="ui card" > 
                <div className="content">
                    <a className="header">{college.name}</a>
                </div>
                <div className="image">
                    <img src={college.image} alt={college.image}/>
                </div>
                <div className="meta">
                    <span className="date">Enrollment: {college.enrollment}</span>
                </div>
                <div className="description">
                     Location: {college.state}
                 </div>
                 <div className="extra content">
                     <a href={college.website}>Website</a>
                </div>
                <div className="extra content">
                    <button className="ui button" onClick={handleDelete}>Remove</button>
                </div>
            </div>
       
        </div>
    )
}

export default CollegeCard