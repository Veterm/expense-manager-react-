import { useEffect, useState } from "react";

import "./Accounts.css"
import panda from '../img/panda.png'
import coal from '../img/coals.png'

function Accounts({clickOnCoala, clickOnPanda}){
    const [activeUser1, setActiveUser1] = useState('')

    function clickOnPanda1(){
        setActiveUser1('panda')
    }
    function clickOnCoala1(){
        setActiveUser1('koala')
    }

// console.log(activeUser1)
    return(
        <div>
            
            <div className='flex flex-col space-y-4  text-gray-500 text-lg font-medium'>
                <button onClick={() => { clickOnPanda(), clickOnPanda1() }} className='  first_block '>
                    <img className={`transition duration-300  hover:-translate-y-1 rounded-full border-2 hover:border-rose-100 hover:shadow-xl ${activeUser1 == 'panda' && ' border-rose-50 shadow-md shadow-zinc-600'} `} src={panda} alt="" />
                    <h1 className=" second_block tracking-wide ">Cute panda</h1>
                </button>
                <button onClick={() => { clickOnCoala(), clickOnCoala1()}} className=" first_block ">
                    <img className={`transition duration-300 rounded-full border-2 hover:border-rose-100 hover:shadow-xl hover:-translate-y-1 ${activeUser1 == 'koala' && ' border-rose-50 shadow-md shadow-zinc-600'}  `} src={coal} alt="" />
                    <h1 className=" second_block tracking-wide">Sweet koala</h1>
                </button>
            </div>
        </div>
    )
}


export default Accounts;