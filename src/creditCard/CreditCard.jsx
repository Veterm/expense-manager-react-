import { useState } from 'react'
import mastercard from '../img/mastercard.png'
import zebra from '../img/zebra.png'


function CreditCard({summaCard}){

   
    
    return(
        <div className="flex  place-content-center  w-96 h-48">
            <div>
            
            <div className="  flex bg-red-100 justify-between drop-shadow-xl w-72 h-44 rounded-lg ">
            <img className="pl-5 pt-3 absolute z-20 h-16" src={mastercard} alt="" />
            <div className="pt-4 ml-40 pl-6 absolute pr-4  text-base text-right text-gray-500 ">
            <h1 className="font-semibold tracking-wider">8765 4646</h1>
            <h2>Name user</h2>
            </div>
            <div className=' blur bg-white/80 h-24 w-72  rounded-b-lg  border-black justify-end absolute mt-20'>
            </div>
            <div className='absolute mt-24 pl-6 pt-3'>
            <h1 className='pr-16 text-xs text-gray-500'>Bank Card</h1>   
            <h1 className='text-gray-500 pr-10 text-lg'><b>$ 2.345</b>.80</h1> 
            </div>
            <div className='absolute mt-28  h-7 w-14 border-4  border-rose-200 rounded-full ml-52 '>
            <h1 className='text-gray-500 pt-0.5 font-bold text-xs'>07/24</h1>
            </div>
            <img className="rounded-lg relative w-72 opacity-5 " src={zebra} alt="" />
             </div>
             {/* <div className="bg-rose-100 w-72 h-44 rounded-lg border-solid border-4 border-rose-900">

             </div> */}
             </div>
        </div>

    )
}

export default CreditCard;