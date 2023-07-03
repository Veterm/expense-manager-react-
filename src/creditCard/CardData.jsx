import { useState, useEffect } from 'react'
import Select from '../select/Select'

import panda from '../img/pandalittl.png'
import koala from '../img/koalalittl.png'
import addCard from '../img/addCard.png'


function CardData({getInfoBankCard}){
    const [cardForm, setCardForm] = useState({user: 'panda', card_number: '', card_m: '', card_y: ''})
    const [rightMounth, setRightMounth] = useState(true)
    let users =[
  
  //  { name: { id: 1, name: <img id='panda' className="panda" src={panda} alt="" />} , },
  //  { name: {id: 2, name: <img id='koala' className="koala" src={koala} alt="" />} , }

        {name: 'panda'},
        {name: "koala"}
]

let dd = new Date();
let year =dd.getFullYear().toString().slice(2)
function checkMounth(){
    if(Number(cardForm.card_m)>12 || Number(cardForm.card_m)<1 || Number(cardForm.card_y)< year){
        setRightMounth(false)
    }if(rightMounth == false && (Number(cardForm.card_m)<13 && Number(cardForm.card_m)>1 ) || rightMounth == false && (Number(cardForm.card_y)>= year )){
        setRightMounth(true)
        
    }if(Number(cardForm.card_m)<13 && Number(cardForm.card_m)>1 ){
      if(Number(cardForm.card_m)<10){
        cardForm.card_m = '0' + cardForm.card_m
      }if(cardForm.card_number.length % 2 === 0){
        cardForm.card_number = '*'.repeat((cardForm.card_number.length )/ 2) + ' ' + cardForm.card_number.toString().slice((cardForm.card_number.length )/ 2)
      }if(cardForm.card_number.length % 2 != 0){
        cardForm.card_number = '*'.repeat(((cardForm.card_number.length )/ 2) +1) + ' ' + cardForm.card_number.toString().slice((cardForm.card_number.length )/ 2)
      }
        getInfoBankCard(cardForm)
        setCardForm({user: 'panda', card_number: '', card_m: '', card_y: ''})
    }
}


function handler(e){
    setCardForm({...cardForm, [e.target.name]: e.target.value })
  }

function userHandler(name){
    // console.log(name.props.id)
    
    setCardForm({...cardForm, user: name})
}



    return (
        <div className='mt-14 flex flex-col '>
        <div className='flex'>
         {rightMounth == false && <h1 className='text-rose-700 text-lg'>Incorrect date</h1>}   
        <h1 className={`text-lg text-zinc-300 ${rightMounth == false ? "pl-20" : 'pl-48' }`}>Card details</h1>
        </div>
        <div className='flex w-auto h-10  mr-5 space-x-1 rounded-lg z-10 '>
        <Select  items= {users} name={'panda'}  onChange={userHandler} handleCategory={userHandler}/>
        <input type="text"  onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }} placeholder="card number" 
                          className=" w-28 rounded-md border-0   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6" 
                          if={1}
                          name={'card_number'}
                          maxLength={8}
                          value={cardForm.card_number}
                          onChange={handler}
                          />
         
         <input type="text"  onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }} placeholder="m/" 
                          className={` w-7 rounded-md ${rightMounth == false && 'ring-rose-700'} border-0 pl-1 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6`} 
                          name={'card_m'}
                          id={2}
                          value={cardForm.card_m}
                          maxLength={2}
                          onChange={handler}
                          />
        {/* <h1 className='text-lg text-zinc-700 pt-1'>/</h1>  */}
         <input type="text"  onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }} placeholder="/y" 
                          className={` w-7 rounded-md ${rightMounth == false && 'ring-rose-700'} border-0 pl-1.5 pr-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6`}
                          name={'card_y'}
                          id={2}
                          value={cardForm.card_y}
                          maxLength={2}
                          onChange={handler}
                          />
        <button onClick={()=>{checkMounth(), giveInfoCard()}}>
        <img className="pt-1 pl-2" src={addCard} alt="" />
        </button>
        </div>
        </div>
    )
}

export default CardData;