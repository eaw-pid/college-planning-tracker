import React from "react";
import {Card, Icon, Image} from "semantic-ui-react"

function CollegeCard({college}) {

    return (
        <div className="ui eight wide column">
        <Card>
        <Image src={college.image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{college.name}</Card.Header>
          <Card.Meta>
            <span className='enrollment'>Enrollment: {college.enrollment}</span>
          </Card.Meta>
          <Card.Description>
           Location: {college.state}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a href={college.website}>Website</a>
        </Card.Content>
      </Card>
       
        </div>
    )
}

export default CollegeCard