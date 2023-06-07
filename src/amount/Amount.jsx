import Select from "../select/Select";
import { Fragment, useEffect, useState } from "react";

import Datepick from "../datepicker/Datepicker";

function TotalAmount({getAmount, activeValut}){
    const currency = [ {name: 'PLN'}, {name: 'USD'}, {name: 'EUR'}];
    const [valut, setValut] = useState(''); 

    function currencyHandler(name){
        let v = '';
        if(name == 'PLN'){
            v = 'zł'
        }if(name == 'USD'){
            v = "$"
        }if(name == 'EUR'){
            v = '€'
        }
        setValut(v)
        activeValut(name)
      }
      

    return(
        <div className="flex justify-center mt-5 ">
        <div className=" z-40 flex  justify-between text-center  px-10 pt-3 text-lg font-base font-bold border-t-4 border-pink-900 text-pink-900     ">
        <h2 className=" mt-1 pr-4">Total amount: {getAmount()} {valut} </h2>
        <Select items={currency} onChange={currencyHandler} handleCategory={currencyHandler}/>
        </div>
        
        </div>
    )
}

export default TotalAmount;