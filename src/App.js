
import './App.css';
import React, {useEffect} from "react"

function App() {

 useEffect(()=> {
  fetch("http://localhost:3001/colleges")
  .then(res=>res.json())
  .then(data => console.log(data))
 }, [])
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
