import { useState } from 'react'
// import { Progress } from "@material-tailwind/react";
import { Progress } from 'flowbite-react';
import mastercard from '../img/mastercard.png'
import zebra from '../img/zebra.png'


function CreditCard({amountDollar, data }){
    
      
       
        
    
    
    function integer() {
        let intDot = (Number(amountDollar(data)[0]) % 1).toFixed(2).toString().slice(1)
        let intIncome= Math.round(amountDollar(data)[0]).toString()
        let intIncomeDot= new Intl.NumberFormat('en-US').format(intIncome)
        let intExpense = Math.round(amountDollar(data)[1]).toString()
        let init = Number(intIncome) - Number(intExpense)
        let intLimit = new Intl.NumberFormat('en-US').format(init)
        // if(intLimit == 0 || intLimit < 0){
        //     intIncome = 0
        // }
        let completed = (Number(intExpense) * 100)/Number(intIncome)
        return [intDot, intIncome, intLimit, intIncomeDot, completed ]
    }

    console.log(integer()[4])
    
    
    return(
        <div className="flex  place-content-center  w-96 h-48">
            <div>
            
            <div className="  flex bg-red-100 justify-between drop-shadow-xl w-72 h-44 rounded-lg ">
            <img className="pl-7 pt-3 absolute z-20 h-16" src={mastercard} alt="" />
            <div className="pt-4 ml-40 pl-6 absolute pr-4  text-base text-right text-gray-500 ">
            <h1 className="font-semibold tracking-wider">8765 4646</h1>
            <h2>Name user</h2>
            </div>
            <div className=' blur bg-white/80 h-24 w-72  rounded-b-lg  border-black justify-end absolute mt-20'>
            </div>
            <div className='absolute mt-24 pt-3 '>
            <h1 className=' text-xs  text-gray-500'>Bank Card</h1>   
            <h1 className='text-gray-500 pl-8 text-lg'><b>$ {integer()[1]}</b>{integer()[0]}</h1> 
            </div>
            <div className='absolute mt-28  h-7 w-14 border-4  border-rose-200 rounded-full ml-52 '>
            <h1 className='text-gray-500 pt-0.5 font-bold text-xs'>07/24</h1>
            </div>
            <img className="rounded-lg relative w-72 opacity-5 " src={zebra} alt="" />
             </div>
             {/* <div className='h-5 w-full bg-zinc-50 mt-4 rounded-3xl'>
                <div className='h-full w-[--completed] bg-rose-900 rounded-3xl'>
             <span>{`${completed}%`}</span>
             </div>
             </div> */}
            <div className="w-full  mt-6">
                <div className='flex  text-gray-500 justify-between text-lg'>
                <h1 className='text-sm pt-2'>Card limit</h1>
                <h1>${integer()[2]}/${integer()[3]}</h1>
                </div>
            <Progress  className='bg-rose-50 text-rose-800' progress={integer()[4]} color='dark'/>
             </div>
             </div>
        </div>

    )
}

export default CreditCard;