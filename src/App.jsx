
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
  const [activeTab, setActiveTab] = useState(0);
  const [filterCategory, setCategory] = useState('');
  const [useFilter, setUseFilter] = useState(false);
  const [useDataFilter, setDataFilter]= useState(false);
  const [nameDate, setNameDate] = useState('');
  
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
  function getIndexActivaTab(index){
    setActiveTab(index)
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
  function categoryHandler(name) {
    if(name != undefined && name != "All categories" ){
      setUseFilter(true)
      setCategory(name)
    }else{
      setUseFilter(false)
    }
  }

 

  function filterDate(date){
    if(date != ''){
     setDataFilter(true)
     setNameDate(date)
    } 
  }

  function closeDateFilter(bool){
    
    if(bool == true){
      setDataFilter(false)
    }
    
  }

 
 
  function amount(arr){
    let amount = 0;
    for (let i = 0; i < arr.length; i++) {
      amount += Number(arr[i].sum)
    } return amount;
  }
  
  function getAmount() {
    if (!useFilter && !useDataFilter) {

      if (activeTab === 0) {
        return amount(dataState)
      } if (activeTab == 1) {
        let newArr = dataState.filter(item => item.type == "income")
        return amount(newArr)
      } if (activeTab == 2) {
        let newArr = dataState.filter(item => item.type == "expense")
        return amount(newArr)
      }
    } if (useFilter && !useDataFilter ) {
      if (dataState.length > 0) {
        let newArr = dataState.filter(item => item.category == filterCategory)
        return amount(newArr)
      } else {
        return 0;
      }
    } if (useDataFilter && !useFilter) {
      if (dataState.length > 0) {
        let newArr = dataState.filter(item => item.day == nameDate)
        return amount(newArr)
      } else {
        return 0;
      }
    }


  }

  console.log(activeTab)

  let tabsContent = [
    {
      name: "All",
      content: getTransactionsFor(),
      length: getTransactionsFor().length,
    },
    {
      name: "Revenue",
      content: getTransactionsFor("income"),
      length: getTransactionsFor("income").length,
    },
    {
      name: "Expenses",
      content: getTransactionsFor("expense"),
      length: getTransactionsFor("expense").length,
    },
  ];
  
  function getTransactionsFor(type) {
    
   return dataState.filter(x => type ? x.type == type : true);
   
  }

  return (
    <div className="mx-6">
      <div className="flex justify-end">
      <Datepick dateFilter={filterDate} closeHandler={closeDateFilter}/>
      <h1 className=" text-zinc-300 text-lg justify-end mr-6 ml-28 pl-1  my-1" >Recent Transaction</h1>
      </div>
      <div className=" flex flex-wrap justify-end    ">
      
      <div className="bg-white rounded-lg py-4 ">
        <Tabs data={tabsContent} deleteHandler={deleteTransaction} useFilter={useFilter} filterCategory={filterCategory} useDate={useDataFilter} nameDate={nameDate} editHandler={editForm} searchId={getIdForm} searchIndexTab={getIndexActivaTab} />
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
