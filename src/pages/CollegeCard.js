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
            <span className='enrollment'>{college.enrollment}</span>
          </Card.Meta>
          <Card.Description>
           <a href={college.website}>Website</a>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
       
        </div>
    )
}

export default CollegeCard