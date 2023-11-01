// import React, {useEffect, useState} from "react";
// import {useParams, useOutletContext} from "react-router-dom"
// import NavBar from "./NavBar";

// function CollegeProfile() {
//     const params= useParams();
//     const colleges = useOutletContext()
//     const collegeId = colleges.find(college => college.id === parseInt(params.id))

// useEffect(() => {
//     fetch(`http://localhost:3001/colleges/${collegeId}`)
//     .then(res => res.json())
//     .then(data => )

// }, [collegeId])

// return (
//     <>
//         <header className="App-header">
//             <NavBar />
//          </header>
//     </>
// )
// }

// export default CollegeProfile