import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  const [count,setCount]=React.useState(0)
  console.log("Componets rendered");

  React.useEffect(function(){
    console.log("Effect ran")
  },[count])

  return (
    <div className="App">
      <h1>Hello</h1>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
    </div>
  );
}

export default App;
