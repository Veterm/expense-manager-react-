import { useState } from "react";
import Card from "./Card/Card";
import data from "./data/ModelData";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    
         data.map((data) => <Card sum = {data.sum} valyt={data.valyt} category ={data.category}  day = {data.day}/>)
      
   
  );
}

export default App;
