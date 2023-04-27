
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import TotalAmount from "./amount/Amount";
import Modal from "./modal/Modal";
import "./App.css";
import Card from "./Card/Card";





function App() {
  const [dataState, setStateData] = useState(data);
  const [name, setName] = useState('');

 

  function addTransaction(obj){
    let copyList = [...dataState] 
    copyList.push(obj)
    obj.id = copyList.length;
    
    setStateData(copyList)
  }
  function deleteTransaction(id){
    let newList = [...dataState]
    newList = newList.filter(item=> item.id != id)
    setStateData(newList)
    // newList.pop()
    // setStateData([...dataState.slice(0, index), ...dataState.slice(index+1) ])
  }

  
  
   function getAmount(){
    let amount = 0;
    for(let i = 0; i <dataState.length; i++){
      amount += Number(dataState[i].sum)
    }
    return amount;
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
    <div className="max-w-7xl flex flex-wrap justify-center">
      <Modal addNewTransaction={addTransaction} />
      <div className="">
        <Tabs data={tabsContent} deleteHandler={deleteTransaction}/>
        
        <TotalAmount getAmount={getAmount}  />
      </div>
    </div>
    )
}

export default App;
