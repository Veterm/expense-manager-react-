import { useState, useEffect } from 'react'
// import { Progress } from "@material-tailwind/react";
import { Progress } from 'flowbite-react';
import mastercard from '../img/mastercard.png'
import zebra from '../img/zebra.png'
import panda from '../img/pandalittl.png'
import koala from '../img/koalalittl.png'


function CreditCard({amountDollar, data, addNewBankCard, infoCard, user}){
    const [addCard, setAddCard] = useState(false);

    useEffect(() => {
        addNewBankCard(addCard)
    
      }, [addCard])
    
    function addBankkCard(){
        
        setAddCard(true)
        
    }  
       
    
    
    
    function integer() {
        let intDot = (Number(amountDollar(data)[0]) % 1).toFixed(2).toString().slice(1)
        let intIncome= Math.round(amountDollar(data)[0]).toString()
        let intIncomeDot= new Intl.NumberFormat('en-US').format(intIncome)
        let intExpense = Math.round(amountDollar(data)[1]).toString()
        let init = Number(intIncome) - (Number(intIncome) - Number(intExpense))
        let intLimit = new Intl.NumberFormat('en-US').format(init)
        // if(intLimit == 0 || intLimit < 0){
        //     intIncome = 0
        // }
        let completed = (Number(intExpense) * 100)/Number(intIncome)
        return [intDot, intIncome, intLimit, intIncomeDot, completed ]
    }

   
    
    
    return(
        <div className="flex   w-auto h-48 pr-5">
            
            <div>
            
            <div className="  flex bg-red-100 justify-between drop-shadow-xl w-72 h-44 rounded-lg ">
            <img className="pl-7 pt-3 absolute z-20 h-16" src={mastercard} alt="" />
            <div className="pt-4 pl-6 absolute pr-4  text-base text-right text-gray-500 ">
            {infoCard ? <h1 className="font-semibold ml-40 tracking-wider">{infoCard.card_number}</h1> : <h1 className="font-semibold ml-36 tracking-wider">Card number</h1>}
            <img className="ml-52 mt-2 rounded-full border-2   border-white" src={user} alt="" />
            </div>
            <div className=' blur bg-white/80 h-24 w-72  rounded-b-lg  border-black justify-end absolute mt-20'>
            </div>
            <div className='absolute mt-24 pt-3 '>
            <h1 className=' text-xs  text-gray-500'>Bank Card</h1>   
            <h1 className='text-gray-500 pl-8 text-lg'><b>$ {integer()[1]}</b>{integer()[0]}</h1> 
            </div>
            <div className='absolute mt-28  h-7 w-12 border-4  border-rose-200 rounded-full ml-56 '>
            {infoCard ? <h1 className='text-gray-500 pt-0.5 font-bold text-xs'>{infoCard.card_m}/{infoCard.card_y}</h1> : <h1 className='text-gray-500  font-bold text-xs'>m/y</h1>}
            </div>
            <img className="rounded-lg relative w-72 opacity-5 " src={zebra} alt="" />
             </div>
             
            <div className="w-full  mt-6">
                <div className='flex  text-gray-500 justify-between text-lg'>
                <h1 className='text-sm pt-2'>Budget limit</h1>
                <h1>${integer()[2]}/${integer()[3]}</h1>
                </div>
            <Progress  className='bg-rose-50 text-rose-800' progress={integer()[4]} color='dark'/>
             </div>
             
        {/* {!addCard ? <div className=" mt-8 flex   drop-shadow-xl w-72 h-44 rounded-lg ">
            <button onClick={addBankkCard}  className='text-zinc-600 font-serif text-6xl rounded-lg w-72 h-44 border-red-200  hover:opacity-90 from-red-100 via-red-100 to-zinc-100 hover:bg-gradient-to-bl focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400'>+</button>
        </div> : ''} */}
        </div>
        </div>

    )
}

export default CreditCard;