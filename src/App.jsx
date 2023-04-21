
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import Card from "./Card/Card";
import Modal from "./modal/Modal";
import "./App.css";





function App() {
  const [dataState, setStateData] = useState(data);

 

  function addTransaction(obj){
    let copyList = [...dataState]
    copyList.push(obj)
    setStateData(copyList)
    
  }
  
 
  
  let tabsContent = [
    {
      name: "All",
      content: getTransactionsFor(),
    },
    {
      name: "Revenue",
      content: getTransactionsFor("income"),
    },
    {
      name: "Expenses",
      content: getTransactionsFor("expense"),
    },
  ];

  function getTransactionsFor(type) {
    return dataState.filter(x => type ? x.type == type : true);
  }

  return (
    <div>
      <Tabs data={tabsContent} />
      <Modal addNewTransaction={addTransaction}  />
    </div>
    )
}

export default App;
