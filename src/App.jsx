
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import data from "./data/ModelData";
import TotalAmount from "./amount/Amount";
import Modal from "./modal/Modal";
import Statistics from "./statistics/Statistics";
import Datepick from "./datepicker/Datepicker";
import "./App.css";
import Select from "./select/Select";
import Convert from "./convert/Convert";
import {useLocalStorage} from "./hooks/useLocalStorage"
import CurrencyService from "./services/CurrencyServisce";





function App() {
  
  const [lol, setLol] = useState();
  const [activTran, setActiveTran] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  const [filterCategory, setCategory] = useState('');
  const [useFilter, setUseFilter] = useState(false);
  const [useDataFilter, setDataFilter]= useState(false);
  const [nameDate, setNameDate] = useState('');
  const [course, setCourse] = useState({ USD: null, EUR: null, PLN: null})
  const [selectValyt, setSelectValyt] = useState('PLN')
  const [transactions, satTransaction]= useLocalStorage([], 'transaction');
  const [dataState, setStateData] = useState(transactions);
  const [statistics, setStatistics] = useState({
    labels: arrForStatisticsExpensSumm(transactions).map(item => item.category),

    datasets: [{
      label: 'PLN',
      data: arrForStatisticsExpensSumm(transactions).map(item => item.sum),
      backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
    }],
  })
  const [statisticRevenue, setStatisticRevenue] = useState({
    labels:arrForStatisticsRevenue(transactions).map(item => item.day),

    datasets: [{
      label: 'PLN',
      data: arrForStatisticsRevenue(transactions).map((data) => data.sum),
      backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
    }],
  })
  const [comparsion, setComparsion] = useState({
    labels: arrForStatisticsCompare(transactions)[2],

    datasets: [{
      label: 'expense',
      data: arrForStatisticsCompare(transactions)[0].map(item => item.sum),
      backgroundColor: ['#831843'],
    },{
      label: 'revenue',
      data: arrForStatisticsCompare(transactions)[1].map(item => item.sum),
      backgroundColor: ['	#a3a3a3'],
    }
  ],
  })
 
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

  
  
  useEffect(()=>{
    setComparsion({
      labels: arrForStatisticsCompare(transactions)[2],

    datasets: [{
      label: 'expense',
      data: arrForStatisticsCompare(transactions)[0].map(item => item.sum),
      backgroundColor: ['#831843'],
    },{
      label: 'revenue',
      data: arrForStatisticsCompare(transactions)[1].map(item => item.sum),
      backgroundColor: ['	#a3a3a3'],
    }
  ],
    });
  },[transactions])

  useEffect(()=>{
    satTransaction(dataState);
  },[dataState])

  useEffect(()=>{
    setStatistics({
      labels: arrForStatisticsExpensSumm(transactions).map(item => item.category),
  
      datasets: [{
        label: 'PLN',
        data: arrForStatisticsExpensSumm(transactions).map(item => item.sum),
        backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
      }],
    });
  },[transactions])

  const currencyService = new CurrencyService();
    useEffect(()=> {
      currencyService.getCours().then(res => setCourse({USD: res.data.USD, PLN: res.data.PLN, EUR: res.data.EUR} ))
    }, [])

   
    useEffect(()=>{
      setStatisticRevenue({labels:arrForStatisticsRevenue(transactions).map(item => item.day),

        datasets: [{
          label: 'PLN',
          data: arrForStatisticsRevenue(transactions).map((data) => data.sum),
          backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
        }],});
    },[transactions])

    function arrForStatisticsRevenue(arr){
      let mass =  arr.filter(item => item.type == 'income')
      let day = [...new Set(mass.map(x => x.day))]
      let values = []
      let val1= []
      for(let i = 0; i < mass.length; i++){ 
        val1.push({ day: mass[i].day, sum: mass[i].sum, valyt: mass[i].valyt}) 
      }
      for(let i = 0; i < val1.length; i++){
        if(val1[i].valyt == 'EUR'){
          val1[i].sum = String(Math.round(val1[i].sum * course.PLN))
        }if(val1[i].valyt == 'USD'){
          val1[i].sum = String(Math.round(val1[i].sum  * course.PLN))
        }
      }

      for(let i = 0; i < day.length; i++){
        
        let val = val1.filter(x => x.day === day[i]).map(x => +x.sum).reduce((partialSum, a) => partialSum + a, 0)
        let curr = val1.filter(x => x.day === day[i]).map(x => x.valyt).reduce((a) => a.length > 1 ? a : a)
        values.push({ day: day[i], sum: val.toString(), valyt: curr.toString()}) 
      }


      
      return values
    }
    
   function arrForStatisticsCompare(arr){
 

    let massIn =  arr.filter(item => item.type == 'income')
    let massEx =  arr.filter(item => item.type == 'expense')
    let day = [...new Set(arr.map(x => x.day))]
    let values = []
    let val1=[]
    let valuesEx =[]
    let valuesIn =[]
    
    for(let i = 0; i < massIn.length; i++){ 
      
      val1.push({ day: massIn[i].day, sum: massIn[i].sum, valyt: massIn[i].valyt}) 
    }
    for(let i = 0; i < val1.length; i++){
      if(val1[i].valyt == 'EUR'){
        val1[i].sum = String(Math.round(val1[i].sum * course.PLN))
      }if(val1[i].valyt == 'USD'){
        val1[i].sum = String(Math.round(val1[i].sum  * course.PLN))
      }
    }

    for(let i = 0; i < day.length; i++){
        
      let val = val1.filter(x => x.day === day[i]).map(x => +x.sum).reduce((partialSum, a) => partialSum + a, 0)
      valuesIn.push({ day: day[i], sum: val.toString()}) 
      
    }
    

  
    
    
    for(let i = 0; i < massEx.length; i++){ 
      
      values.push({ day: massEx[i].day, sum: massEx[i].sum, valyt: massEx[i].valyt}) 
    }
    for(let i = 0; i < values.length; i++){
      if(values[i].valyt == 'EUR'){
        values[i].sum = String(Math.round(values[i].sum * course.PLN))
      }if(values[i].valyt == 'USD'){
        values[i].sum = String(Math.round(values[i].sum  * course.PLN))
      }
    }
    
    for(let i = 0; i < day.length; i++){
        
      let val = values.filter(x => x.day === day[i]).map(x => +x.sum).reduce((partialSum, a) => partialSum + a, 0)
      valuesEx.push({ day: day[i], sum: val.toString()}) 
      
    }

   
    return  [valuesEx, valuesIn, day]

   }
  
  
    function arrForStatisticsExpensSumm(arr){
     let mass =  arr.filter(item => item.type == 'expense')
      let categories = [...new Set(mass.map(x => x.category))]
      let values = []
      let val1 =[]

      for(let i = 0; i < mass.length; i++){ 
        val1.push({ category: mass[i].category, sum: mass[i].sum, valyt: mass[i].valyt}) 
      }
      for(let i = 0; i < val1.length; i++){
        if(val1[i].valyt == 'EUR'){
          val1[i].sum = String(Math.round(val1[i].sum * course.PLN))
        }if(val1[i].valyt == 'USD'){
          val1[i].sum = String(Math.round(val1[i].sum  * course.PLN))
        }
      }
   
      for(let i = 0; i < categories.length; i++){
        
        let val = val1.filter(x => x.category === categories[i]).map(x => +x.sum).reduce((partialSum, a) => partialSum + a, 0)
        let curr = val1.filter(x => x.category === categories[i]).map(x => x.valyt).reduce((a) => a.length > 1 ? a : a)
        values.push({ category: categories[i], sum: val.toString(), valyt: curr.toString()}) 
      }
    return values
    }


 

  function addTransaction(obj) {
    let copyList = [...transactions]
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
  function activeValut(val){
     
      setSelectValyt(val)
    
    
    // setSelectValyt('PLN')
  }
 
 
  function amount(arr){
    
    let amount =0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].valyt === selectValyt){
      amount += Number(arr[i].sum)
      }if(arr[i].valyt != selectValyt && selectValyt === "PLN" ){
        amount += Number(arr[i].sum * course.PLN )
      }if(arr[i].valyt != selectValyt && selectValyt === "EUR"){
        amount += Number(arr[i].sum * course.EUR )
      }if(arr[i].valyt != selectValyt && selectValyt === "USD" && arr[i].valyt === "PLN"){
        amount += Number(arr[i].sum / course.PLN )
      }if(arr[i].valyt != selectValyt && selectValyt === "USD" && arr[i].valyt === "EUR"){
        amount += Number(arr[i].sum / course.EUR )
      }
    } 
     return Math.round(amount);
     
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
    {/* <Convert/> */}
      <div className="flex justify-end">
      <Datepick dateFilter={filterDate} closeHandler={closeDateFilter}/>
      <h1 className=" text-zinc-300 text-lg justify-end mr-6 ml-28 pl-1  my-1" >Recent Transaction</h1>
      </div>
      <div className=" flex flex-wrap justify-end    ">
      
      <div className="bg-white rounded-lg py-4 z-10 ">
        <Tabs data={tabsContent}  deleteHandler={deleteTransaction} useFilter={useFilter} filterCategory={filterCategory} useDate={useDataFilter} nameDate={nameDate} editHandler={editForm} searchId={getIdForm} searchIndexTab={getIndexActivaTab} />
        <TotalAmount getAmount={getAmount} data={dataState} activeValut={activeValut} />
        
        <div className="mt-4 ml-5 pr-2 flex place-content-center space-x-8  text-left">
        <Modal isEditForm={false}  addNewTransaction={addTransaction}  />
        <Select isFullWidth={true} items={category}  handleCategory={categoryHandler} />
        </div>
        
        </div>
      </div>
      <Statistics chartData={statistics} comparsion={comparsion} income={statisticRevenue} />
    </div>
    )
}

export default App;
