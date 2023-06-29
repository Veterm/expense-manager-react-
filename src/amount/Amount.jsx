import Select from "../select/Select";
import { Fragment, useEffect, useState } from "react";

import panda from '../img/pandalittl.png'
import koala from '../img/koalalittl.png'


function TotalAmount({getAmount, activeValut, data, userFilterHandlerPanda, userFilterHandlerKoala}){
    const currency = [ {name: 'PLN'}, {name: 'USD'}, {name: 'EUR'}];
    const [valut, setValut] = useState('PLN'); 

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

      function filterPanda(){
        userFilterHandlerPanda('panda')
      }
      function filterKoala(){
        userFilterHandlerKoala('koala')
      }
      

    return(
        <div className="flex justify-center mt-5  ">
        <div className="  flex  justify-between text-center   pt-3 text-lg font-base font-bold border-t-4 border-pink-900 text-pink-900     ">
        <h2 className=" mt-1 pr-4">Total amount: {getAmount(data)} {valut} </h2>
        <Select name={'PLN'} items={currency} onChange={currencyHandler} handleCategory={currencyHandler}/>
        <div className="flex ml-2 space-x-2 pt-0.5 ">
        <button onClick={()=>filterPanda()}>
        <img className="w-7 h-7 rounded-full border-2 border-pink-100" src={panda} alt="" />
        </button>
        <button onClick={()=>filterKoala()}>
        <img className="w-7 h-7 rounded-full border-2 border-pink-100" src={koala} alt="" />
        </button>
        </div>
        </div>
        
        </div>
    )
}

export default TotalAmount;