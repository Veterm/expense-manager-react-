
import { useEffect, useState } from "react";
import Tabs from "./Tab/Tab";
import Accounts from "./accounts/Accounts";
import data from "./data/ModelData";
import TotalAmount from "./amount/Amount";
import Modal from "./modal/Modal";
import Statistics from "./statistics/Statistics";
import Datepick from "./datepicker/Datepicker";
import CardData from "./creditCard/CardData";
import AddCategories from "./categories/Categories";
import Plans from "./plans/Plans";
import ActuelDate from "./actualDate/ActualDate";

import "./App.css";
import Select from "./select/Select";
import CreditCard from "./creditCard/CreditCard";
import {useLocalStorage} from "./hooks/useLocalStorage"
import CurrencyService from "./services/CurrencyServisce";
import panda from './img/pandalittl.png'
import koala from './img/koalalittl.png'




function App() {
  
 
  const [activTran, setActiveTran] = useState('');
  const [activeTab, setActiveTab] = useState(0);
  // const [addBankCard, setAddBankCard] = useState(false)
  const [filterCategory, setCategory] = useState('');
  const [useFilter, setUseFilter] = useState(false);
  const [useDataFilter, setDataFilter]= useState(false);
  const [nameDate, setNameDate] = useState('');
  
  const [course, setCourse] = useState({ USD: null, EUR: null, PLN: null})
  const [selectValyt, setSelectValyt] = useState('PLN')
  const [transactions, satTransaction]= useLocalStorage([], 'transaction');
  const [userStorage, setUserStorage] = useLocalStorage([], 'user');


  // const INITIAL_STATE = {
  //   user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
  //   isFetching: false,
  //   error: false,
  // };

  const [storageInfoCardKoala, setStorageInfoCardKoala] = useLocalStorage([], 'Koala' )
  const [storageInfoCardPanda, setStorageInfoCardPanda] = useLocalStorage([], 'Panda' )
  //  const [storageInfoCardKoala, setStorageInfoCardKoala] = useLocalStorage([], 'cards_infoKoala' )
  const [dataState, setStateData] = useState(transactions);
  const [filterUser, setFilterUser] = useState('')
  const [activeUser, setActiveUser] = useState(userStorage)
  const [infoCardPanda, setInfoCardPanda]= useState(storageInfoCardPanda)
  const [infoCardKoala, setInfoCardKoala]= useState(storageInfoCardKoala)
  const [useFilterUserPanda, setUseFilterUserPanda] = useState(false)
  const [useFilterUserKoala, setUseFilterUserKoala] = useState(false)
  const [newGoal, setNewGoal] = useState('')
  const [statistics, setStatistics] = useState({
    labels: arrForStatisticsExpensSumm(transactions).map(item => item.category),

    datasets: [{
      label: 'PLN',
      data: arrForStatisticsExpensSumm(transactions).map(item => item.sum),
      backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
    }],
  })
  const [statisticRevenue, setStatisticRevenue] = useState({
    labels:arrForStatisticsCompare(transactions)[2],

    datasets: [{
      label: 'PLN',
      data: arrForStatisticsCompare(transactions)[1].map(item => item.sum),
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
    { name: "card replenishment"},
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
  
    setUserStorage(activeUser)
  },[activeUser])

  useEffect(()=>{
    setStorageInfoCardPanda(infoCardPanda)
  },[infoCardPanda])

  useEffect(()=>{
    setStorageInfoCardKoala(infoCardKoala)
  },[infoCardKoala])

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
function kostal(){
  if(activeUser.length == 0){
    setActiveUser('panda')
  }
  // }if(infoCardKoala.length == 0){
  //   setInfoCardKoala({user: 'Koala', card_number: 'Card number', card_m: 'm', card_y: 'd'})
  // }
}
kostal() 
    
   
    useEffect(()=>{
      setStatisticRevenue({
        labels:arrForStatisticsCompare(transactions)[2],
    
        datasets: [{
          label: 'PLN',
          data: arrForStatisticsCompare(transactions)[1].map(item => item.sum),
          backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
        }],
      });
    },[transactions])

    useEffect(()=>{
      if(useDataFilter){
      setStatistics({
        labels: arrForStatisticsExpensSumm(transactions).map(item => item.category),
    
        datasets: [{
          label: 'PLN',
          data: arrForStatisticsExpensSumm(transactions).map(item => item.sum),
          backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
        }],
      });
    }else{
      setStatistics({
        labels: arrForStatisticsExpensSumm(transactions).map(item => item.category),
    
        datasets: [{
          label: 'PLN',
          data: arrForStatisticsExpensSumm(transactions).map(item => item.sum),
          backgroundColor: ['#72262b', '	#500724', '#ad737d', '#d8ccce', '	#be185d', '#ffb5a7', '#ff4d6d', 'ff8fa3'],
        }],
      });
    }
    },[useDataFilter])
 

   function arrForStatisticsCompare(arr){
    
    let massIn =  arr.filter(item => item.type == 'income')
    let massEx =  arr.filter(item => item.type == 'expense')
    let day = [...new Set(arr.map(x => x.day))]
    let valuesRevenue=[]
    let values = []
    let val1=[]
    let valuesEx =[]
    let valuesIn =[]
    let valInRev

    for(let i = 0; i<day.length; i++){
      let day1 = day[i];
      let year = day1.substring(6, 10)
      let mounth = day1.substring(3, 5)
      let dateoF = day1.substring(0, 2)
      let dateTransact = String(year + '-' + mounth + '-' + dateoF)
      let date = (new Date(dateTransact));
      
      day[i]= date
      }
      day.sort((date1, date2) => date1 - date2)
      for(let i = 0; i<day.length; i++){
        let monthName = day[i].toLocaleString('default', { month: 'long' }) + ' ' + day[i].getFullYear();
        day[i] = monthName
      }
      
     
      let day1 = [...new Set(day)]
      
     
     
     
    for(let i = 0; i < massIn.length; i++){ 
      
      val1.push({ day: massIn[i].day, sum: massIn[i].sum, valyt: massIn[i].valyt}) 
    }
    
    // console.log(transactions)
     
    for(let i = 0; i<val1.length; i++){
      let day1 = val1[i].day;
      let year = day1.substring(6, 10)
      let mounth = day1.substring(3, 5)
      let dateoF = day1.substring(0, 2)
      let dateTransact = String(year + '-' + mounth + '-' + dateoF)
      let date = new Date(dateTransact);
      let monthName = date.toLocaleString('default', { month: 'long' }) + ' ' + year;
      let dateMonth = date.getDate()+ ' '+ date.toLocaleString('default', { month: 'long' })
      val1[i].day= monthName
      
      }


        

    for(let i = 0; i < val1.length; i++){
      if(val1[i].valyt == 'EUR'){
        val1[i].sum = String(Math.round(val1[i].sum * course.PLN))
      }if(val1[i].valyt == 'USD'){
        val1[i].sum = String(Math.round(val1[i].sum  * course.PLN))
      }
    }

    for(let i = 0; i < day1.length; i++){
        
      let val = val1.filter(x => x.day === day1[i]).map(x => +x.sum).reduce((partialSum, a) => partialSum + a, 0)
      valuesIn.push({ day: day1[i], sum: val.toString() })
      
      
      
    }
    
  
    
    
    for(let i = 0; i < massEx.length; i++){ 
      
      values.push({ day: massEx[i].day, sum: massEx[i].sum, valyt: massEx[i].valyt}) 
    }

    for(let i = 0; i<values.length; i++){
      let day1 = values[i].day;
      let year = day1.substring(6, 10)
      let mounth = day1.substring(3, 5)
      let dateoF = day1.substring(0, 2)
      let dateTransact = String(year + '-' + mounth + '-' + dateoF)
      let date = new Date(dateTransact);
      let monthName = date.toLocaleString('default', { month: 'long' }) + ' ' + year;
      values[i].day= monthName
      }

    for(let i = 0; i < values.length; i++){
      if(values[i].valyt == 'EUR'){
        values[i].sum = String(Math.round(values[i].sum * course.PLN))
      }if(values[i].valyt == 'USD'){
        values[i].sum = String(Math.round(values[i].sum  * course.PLN))
      }
    }
    
    for(let i = 0; i < day1.length; i++){
        
      let val = values.filter(x => x.day === day1[i]).map(x => +x.sum).reduce((partialSum, a) => partialSum + a, 0)
      valuesEx.push({ day: day1[i], sum: val.toString()}) 
      
    }
    
   
    return  [valuesEx, valuesIn, day1]

   }
  
   
  
    function arrForStatisticsExpensSumm(arr){
      if(useDataFilter){
        arr = arr.filter(item=> item.day == nameDate)
      }
     
     
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



    

  function filerCardDate(arr){
  let listFiltred =[]
   let copy = arr
   let day = [...new Set(arr.map(x => x.day))]

   for(let i = 0; i<day.length; i++){
    let day1 = day[i];
    let year = day1.substring(6, 10)
    let mounth = day1.substring(3, 5)
    let dateoF = day1.substring(0, 2)
    let dateTransact = String(year + '-' + mounth + '-' + dateoF)
    let date = (new Date(dateTransact));
    
    day[i]= date
    }
    day.sort((date1, date2) => date1 - date2)

    for(let i = 0; i<day.length; i++){
      let   monthName =  `${day[i].getDate() < 10 ? "0" + day[i].getDate() : day[i].getDate()}/${(day[i].getMonth() +1)<10 ? "0" + (day[i].getMonth() +1) : (day[i].getMonth() +1) }/${day[i].getFullYear()}`;
      // let monthName = day[i].toLocaleString('default', { month: 'long' }) + ' ' + day[i].getFullYear();
      day[i] = monthName
    }

    for(let i = 0; i < day.length; i++){
        
      let val = copy.filter(x => x.day === day[i])
      listFiltred.push({ ...copy[i],day: day[i], })
      
    }
    // for(let i = 0; i<copy.length; i++){

    // }
    return listFiltred
  }
  // console.log(filerCardDate(dataState))




  function addTransaction(obj) {
    if(obj.category == 'salary' || obj.category == 'card replenishment' ){
      obj.type = 'income'
    }
    
    let copyList = [...transactions]
    copyList.push(obj)
    obj.user = activeUser;
    obj.id = copyList.length;
    setStateData(copyList)
  }

  function addNewGoal(obj){
  
    setNewGoal(obj)
  }


    
 function getInfoBankCard(info){
  if(info.user == 'panda'){
    setInfoCardPanda(info)
  }else(
    setInfoCardKoala(info)
  )
  
 }

//   function addNewBankCard(boo){
//     setAddBankCard(boo)
// } 


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

  function userFilterHandlerPanda(name){
    if(name != undefined ){
      setUseFilterUserKoala(false)
      setUseFilterUserPanda(!useFilterUserPanda)
      setFilterUser(name)
    }
  }
  function userFilterHandlerKoala(name){
    if(name != undefined  ){
      setUseFilterUserPanda(false)
      setUseFilterUserKoala(!useFilterUserKoala)
      setFilterUser(name)
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
  }
 
  // function dataPandaCard(){
  //   let newArr = dataState.filter(item => item.user == 'panda')
  //   return newArr
  // }

  // function dataKoalaCard(){
  //   let newArr = dataState.filter(item => item.user == 'koala')
  //   return newArr
  // }
  
 function amountDollar(arr){
  let copy = arr.filter(item => item.type == "income")
  let copy2 = arr.filter(item => item.type == "expense")
  let amount2= 0;
  let amount =0;
  for (let i = 0; i < copy.length; i++){
    if(copy[i].valyt === 'USD'){
      amount += Number(copy[i].sum)
      }if(copy[i].valyt  === "PLN"){
        amount += Number(copy[i].sum / course.PLN )
      }if(copy[i].valyt  === "EUR"){
        amount += Number(copy[i].sum / course.EUR )
      }
  }

  for (let i = 0; i < copy2.length; i++){
    if(copy2[i].valyt === 'USD'){
      amount2 += Number(copy2[i].sum)
      }if(copy2[i].valyt  === "PLN"){
        amount2 += Number(copy2[i].sum / course.PLN )
      }if(copy2[i].valyt  === "EUR"){
        amount2 += Number(copy2[i].sum / course.EUR )
      }
  }
  return [amount, amount2]
 }

 function clickOnPanda(){
  setActiveUser('panda')
}
function clickOnCoala(){
  setActiveUser('koala')
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
    let copy = dataState.filter(item => item.type == "income")
    // setSummaCard(amount((copy)).toFixed(2))
    if (!useFilter && !useDataFilter) {
      
      if (activeTab === 0) {
        let newArrIn = dataState.filter(item => item.type == "income")
        let newArrEx = dataState.filter(item => item.type == "expense")
        return (amount(newArrIn)- amount(newArrEx))
        
      } if (activeTab == 1) {
        let newArr = dataState.filter(item => item.type == "income")
        
        return amount((newArr))
      } if (activeTab == 2) {
        let newArr = dataState.filter(item => item.type == "expense")
        return amount((newArr))
      }
    } if (useFilter && !useDataFilter ) {
     
      if (dataState.length > 0) {
        let newArr = dataState.filter(item => item.category == filterCategory)
        return amount((newArr))
      } else {
        return 0;
      }
    } if (useDataFilter && !useFilter) {
      
      if (dataState.length > 0) {
        let newArr = dataState.filter(item => item.day == nameDate)
        return amount((newArr))
      } else {
        return 0;
      }
    }


  }

//  console.log(activeUser)

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
    <div className=" border-2  rounded-lg bg-greyBG my-4 pb-2">
    <div className="mx-6">

      <div className="flex   ">
      <h1 className=" text-zinc-300 justify-items-start text-lg  pl-5 my-1 pr-6 mr-20">Account</h1>
      <h1 className=" text-zinc-300 justify-items-start text-lg my-1 pr-2 mr-64">Add a new category</h1>
      <Datepick dateFilter={filterDate} closeHandler={closeDateFilter}/>
      <h1 className=" text-zinc-300 text-lg justify-end  pl-32  my-1" >Recent Transaction</h1>
      </div>
      <div className=" flex flex-wrap    ">
        <div className="grid grid-cols-1 ">
          <div className="flex space-x-5 z-10 h-60">
            <div>
      <Accounts clickOnPanda={clickOnPanda} clickOnCoala={clickOnCoala} activeUser={activeUser}/>
      <ActuelDate/>
      </div>
      <AddCategories/>
      </div>
      <div className="col-span-2">
        <Plans newGoal={newGoal} addNewGoal={addNewGoal}/>
      </div>
      </div>
      <div >
      <div className=" space-y-20">
     <CreditCard amountDollar={amountDollar} infoCard={infoCardPanda} data={dataState.filter(item => item.user == 'panda')}   user={panda}  />
      <CreditCard amountDollar={amountDollar} infoCard={infoCardKoala} data={dataState.filter(item => item.user == 'koala')}   user={koala}/> 
      </div>
      <CardData getInfoBankCard={getInfoBankCard}/>
      </div>
      <div className="bg-white rounded-lg py-4 z-10 ">
        <Tabs data={tabsContent} activeUser={activeUser} filerCardDate={filerCardDate} filterUser={filterUser} useFilterUserKoala={useFilterUserKoala} useFilterUserPanda={useFilterUserPanda} deleteHandler={deleteTransaction} useFilter={useFilter} filterCategory={filterCategory} useDate={useDataFilter} nameDate={nameDate} editHandler={editForm} searchId={getIdForm} searchIndexTab={getIndexActivaTab} />
        <TotalAmount getAmount={getAmount}  data={dataState} useFilterUserPanda={useFilterUserPanda} useFilterUserKoala={useFilterUserKoala} activeValut={activeValut} userFilterHandlerPanda={userFilterHandlerPanda} userFilterHandlerKoala={userFilterHandlerKoala}/>
        
        <div className="mt-4 ml-5 pr-2 flex place-content-center space-x-8  text-left">
        <Modal isEditForm={false} nameButtom={'Add transaction'} transactionModal={true} goalModal={false} addNewTransaction={addTransaction}   />
        <Select isFullWidth={true} items={category}  handleCategory={categoryHandler} />
        </div>
        
        </div>
        
      </div>
      <Statistics chartData={statistics} comparsion={comparsion} income={statisticRevenue} />
    </div>
    </div>
    )
}

export default App;
