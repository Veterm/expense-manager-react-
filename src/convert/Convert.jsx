import { useEffect, useState } from "react";
import CurrencyService from "../services/CurrencyServisce";

function Convert(){
    const [course, setCourse] = useState({ USD: null, EUR: null, PLN: null})
    
    const currencyService = new CurrencyService();
    useEffect(()=> {
      currencyService.getCours().then(res => setCourse({USD: res.data.USD, PLN: res.data.PLN, EUR: res.data.EUR} ))
    }, [])
    // setCourse({ USD: res.rates.USD, EUR: res.rates.EUR, PLN: res.rates.PLN})
    // currencyService.getCours().then(res =>  console.log(res.data.USD, res.data.PLN, res.data.EUR ))
    // currencyService.getCours().then(res => setCourse({USD: res.data.USD, PLN: res.data.PLN, EUR: res.data.EUR} ))
    // console.log(course)
    return(
        <div>
        <input type="number" />
      <select name="" id="">
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
          </select>
        <div></div>
        </div>
    )
}
export default Convert;