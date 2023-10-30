import React from "react"

function CollegeForm() {

return (
        <div >
        <br/>
        <h2>Filter By:</h2>
          <h3>School Size</h3>
          <div className="field">
            <select name="type" id="type" aria-label="type">
             <option value="">All</option>
              <option value="small">Small</option>
              <option value="midsize">Midsize</option>
              <option value="large">Large</option>
            </select>
          </div>
          </div>
)
}

export default CollegeForm