import React from "react";
import {Card, Icon, Image} from "semantic-ui-react"

function CollegeCard({college}) {

    return (
        <div className="ui eight wide column">
        <div className="ui card" > 
                <div className="content">
                    <a className="header">{college.name}</a>
                </div>
                <div className="image">
                    <img src={college.image} alt={college.image}/>
                </div>
                <div class="meta">
                    <span class="date">Enrollment: {college.enrollment}</span>
                </div>
                <div class="description">
                     Location: {college.state}
                 </div>
                 <div class="extra content">
                     <a href={college.website}>Website</a>
                </div>
                <div class="extra content">
                    <button class="ui button">Add to My Colleges</button>
                </div>
            </div>
       
        </div>
    )
}

export default CollegeCard