
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import TotalAmount from "./amount/Amount";
import Modal from "./modal/Modal";
import "./App.css";





function App() {
  const [dataState, setStateData] = useState(data);

 

  function addTransaction(obj){
    let copyList = [...dataState]
    copyList.push(obj)
    setStateData(copyList)
  }
  function deleteTransaction(index){
    // let newList = [...dataState]
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
    <div >
       <Modal addNewTransaction={addTransaction}  />
    <div className=" justify-end h-100 overflow-auto">
      <Tabs data={tabsContent}  />
      <TotalAmount getAmount={getAmount} deleteTransaction={deleteTransaction} />
     
    </div>
    </div>
    )
}

export default App;
