
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import TotalAmount from "./amount/Amount";
import Modal from "./modal/Modal";
import Statistics from "./statistics/Statistics";
import Datepick from "./datepicker/Datepicker";
import "./App.css";
import Select from "./select/Select";





function App() {
  const [dataState, setStateData] = useState(data);
  const [activTran, setActiveTran] = useState('');
  const [filterCategory, setCategory] = useState('');
  const [useFilter, setUseFilter] = useState(false)
  
  // const [editForm, setEditForm] = useState(false);
  const category = [
    {name: "All categories"},
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
 

  function addTransaction(obj) {
    let copyList = [...dataState]
    copyList.push(obj)
    obj.id = copyList.length;

    setStateData(copyList)
  }

  function deleteTransaction(id) {
    let newList = [...dataState]
    newList = newList.filter(item => item.id != id)

    setStateData(newList)

  }
  function getIdForm(idActiveForm) {
    setActiveTran(idActiveForm)

  }

console.log(useFilter)

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
  function categoryHandler(name) {
    if(name != undefined && name != "All categories" ){
      setUseFilter(true)
      setCategory(name)
    }else{
      setUseFilter(false)
    }
    // let llist = [...dataState]
    // llist = llist.filter(item => item.category === name)
    console.log(name)
    
    // console.log(llist)
  }

  // function filterCategoryHandler(name) {
  //   console.log(`lolik ${name}`)
    
  // }
  // function filterUse(name){
  //   if(name != undefined){
  //     setUseFilter(true)
  //   }
  // }

  function getAmount() {
    let amount = 0;
    for (let i = 0; i < dataState.length; i++) {
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
    <div className="mx-6">
      <h1 className="flex text-zinc-300 text-lg justify-end mr-6  my-1" >Recent Transaction</h1>
      <div className=" flex flex-wrap justify-end    ">
      
      <div className="bg-white rounded-lg py-4 ">
        <Tabs data={tabsContent} deleteHandler={deleteTransaction} useFilter={useFilter} filterCategory={filterCategory} editHandler={editForm} searchId={getIdForm} />
        <TotalAmount getAmount={getAmount}  />
        
        <div className="mt-4 ml-5 pr-2 flex place-content-center space-x-8 z-10 text-left">
        <Modal isEditForm={false} addNewTransaction={addTransaction} />
        <Select isFullWidth={true} items={category}  handleCategory={categoryHandler} />
        </div>
        
        </div>
        
      </div>
      <Statistics/>
    </div>
    )
}

export default App;
