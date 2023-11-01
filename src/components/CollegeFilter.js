import React, {useState} from "react"

function CollegeForm() {

  const [selected, setSelected] = useState("All")

function handleChange() {
  setSelected()
}

return (
        <div >
        <br/>
        <h2>Filter By:</h2>
          <h3>School Size</h3>
          <div className="field">
            <select name="type" id="type" aria-label="type" onChange={handleChange}>
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