import { useEffect, useState } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"
import calendar from "../img/calendar.png"

function ActuelDate(){
    // const [date, setDate]=useState('');
    let dayMounth = new Date();
    
     let monthName = dayMounth.toLocaleString('default', { month: 'long' }).toUpperCase().slice(0,3) ;
     
     let dateDay = dayMounth.getDate();
    return(
        <div className="w-20 text-white h-20  rounded-2xl  tracking-wider text-lg font-bold bg-pink-900 border-4 opacity-90 border-pink-900 mt-8 ml-3">
           <h2 className="underline underline-offset-4 decoration-2">{monthName}</h2>
           <h1 className="text-3xl ">{dateDay}</h1>
            
        </div>
    )
}

export default ActuelDate;