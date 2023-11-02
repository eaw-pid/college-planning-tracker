

import React, {useEffect, useState} from "react"
import {Outlet} from "react-router-dom"
import NavBar from "./NavBar"


//TO DO:
//have to find a way to not include NavBar on each page

function App() {


  return (
    <>
      <header className="App">
          <NavBar />
      </header>
          <Outlet />
    </>
  );
}

export default App;
