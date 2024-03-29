import React, {useState} from "react"
import { Form } from "semantic-ui-react"


function CollegeForm({onAddCollege}) {

    const [name, setName] = useState("")
    const [enrollment, setEnrollment] = useState("")
    const [collegeState, setCollegeState] = useState("")
    const [collegeUrl, setCollegeUrl] = useState("")
    const [collegeImg, setCollegeImg] = useState("")

function handleSubmit(e) {
    e.preventDefault()

    const newCollege = {
        name: name,
        enrollment: enrollment,
        state: collegeState,
        website: collegeUrl,
        image: collegeImg
    }
    fetch("http://localhost:3001/colleges", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newCollege)
    })
    .then(res=> res.json())
    .then(data => onAddCollege(data))
    
    //reset form fields
    setName("")
    setEnrollment("")
    setCollegeState("")
    setCollegeUrl("")
    setCollegeImg("")

}

 return (
<div className="collegeForm">
      <h3>Add a College!</h3>
      <Form 
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="College Name" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
          <Form.Input fluid label="Enrollment" placeholder="College Enrollment" name="enrollment" value={enrollment} onChange={(e) => setEnrollment(e.target.value)}/>
          <Form.Input
            fluid
            label="State"
            placeholder="State"
            name="State"
            value={collegeState}
            onChange={(e) => setCollegeState(e.target.value)}
          />
          <Form.Input
            fluid
            label=" Website"
            placeholder="url"
            name="collegeUrl"
            value={collegeUrl}
            onChange={(e) => setCollegeUrl(e.target.value)}
          />
          <Form.Input
            fluid
            label=" Image"
            placeholder="image"
            name="collegeImg"
            value={collegeImg}
            onChange={(e) => setCollegeImg(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>




 )
}

export default CollegeForm

//old form
//    <div className="CollegeForm">
//     <div >
//         <h3>Add New College</h3><br/>
//     </div>
//         <div>
    
//             <form onSubmit={handleSubmit}>
//                 <label>College Name:  </label>
//                 <input 
//                     type="text"
//                     placeholder="Enter College Name" 
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}>
//                 </input>
//                 <label>College Enrollment:  </label>
//                 <input 
//                     type="text"
//                     placeholder="Enter College Enrollment" 
//                     value={enrollment}
//                     onChange={(e) => setEnrollment(e.target.value)}>
//                 </input>
//                 <label>College State: </label>
//                 <input 
//                     type="text"
//                     placeholder="Enter State" 
//                     value={collegeState}
//                     onChange={(e) => setCollegeState(e.target.value)}>
//                 </input><br/>
//                 <label>College Website: </label>
//                 <input 
//                     type="text"
//                     placeholder="Enter College URL"
//                     value={collegeUrl} 
//                     onChange={(e) => setCollegeUrl(e.target.value)}>
//                 </input>
//                 <label>College Image: </label>
//                 <input 
//                     type="text"
//                     placeholder="Enter Image" 
//                     value={collegeImg}
//                     onChange={(e) => setCollegeImg(e.target.value)}>
//                 </input><br/>
//                 <input 
//                     type="submit" 
//                     value="Submit">
//                 </input>
//             </form>
//         </div>
//    </div>