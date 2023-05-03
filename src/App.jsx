
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import TotalAmount from "./amount/Amount";
import Modal from "./modal/Modal";
import "./App.css";
import Select from "./select/Select";





function App() {
  const [dataState, setStateData] = useState(data);
  const [activTran, setActiveTran] = useState('')
  // const [editForm, setEditForm] = useState(false);
  const category = [
    {name: "Filter by category"},
    { name: "education" },
    { name: "selfcare" },
    { name: "salary" },
    { name: "travel" },
    { name: "transport"},
    { name: "entertainment" },
    { name: "products" },
    { name: "restaurant" },
    { name: "other" },
  ];
 

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
    
  }



  function getIdForm(idActiveForm) {
    setActiveTran(idActiveForm)

  }

  
  function editForm(form) {
    form.id = activTran;

    let newList = [...dataState]


    newList = newList.map(item => {
      if (item.id === form.id) {
        return form;
      }
      return item;
    })
    setStateData(newList)

  }
  function categoryHandler(name){
    

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
      <div className="max-w-7xl flex flex-wrap justify-end   ">
      
      <div className="">
        <Tabs data={tabsContent} deleteHandler={deleteTransaction} editHandler={editForm} searchId={getIdForm} />
        <TotalAmount getAmount={getAmount}  />
        <div className="mt-4 ml-5 flex place-content-center space-x-8 z-30 text-left">
        <Modal isEditForm={false} addNewTransaction={addTransaction} />
        <Select isFullWidth={true} items={category} handleCategory={categoryHandler} />
        </div>
        </div>
      </div>
    </div>
    )
}

export default App;
