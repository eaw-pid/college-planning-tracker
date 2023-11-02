import React, {useState} from "react"

function CollegeForm({setSelected}) {

  

function handleChange(e) {
  setSelected(e.target.value)
}


return (
        <div >
        <br/>
        <h3>Filter By School Size</h3>
        
          <div className="field">
            <select name="type" id="type" aria-label="type" onChange={handleChange}>
             <option value="all">All</option>
              <option value="small">Small</option>
              <option value="midsize">Midsize</option>
              <option value="large">Large</option>
            </select>
          </div><br/><br/>
          </div>
)
}

export default CollegeForm