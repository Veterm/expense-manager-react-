import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input });
import { useEffect, useState } from "react";
import close from "../img/close.png"

function Datepick({dateFilter, closeHandler}){
  const [selectedDate, setDate] = useState('')
  const [closeFilter, setClose] = useState(false)

  useEffect(() => {
    dateFilter(selectedDate)

  }, [selectedDate])
  useEffect(() => {
    closeHandler(closeFilter)

  }, [closeFilter])

  function handlerDate(e) {

    let d = new Date(e.target.value);
    let date = `${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}/${(d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)}/${d.getFullYear()}`;
    setDate(date)
    // console.log(date)
  }

  function closeDataFilter(e){
    setClose(true)
    // e.target.value = null;
  }
  // console.log(closeFilter)

  return (
    <div className="relative">
    <input
      type="text"
      name="day"
      onChange={handlerDate}
      id="daye"
      onFocus={
        (e) => {
          e.currentTarget.type = "date";
          e.currentTarget.focus();
        }
      }
      onBlur={(e) => (e.currentTarget.type = "text")}
      className=" text-left -z-10 w-28 pl-2 rounded-md border-0 py-0  my-1  pr-5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
      placeholder="Date filter"
    />
    <div className="absolute inset-y-0 right-0 pt-1.5 pr-1 hover:opacity-75  ">
    <button className=" left-4" onClick={()=>{closeDataFilter()}}>
      <img src={close} alt="" />
    </button>
    </div>
    </div>
  )
}

export default Datepick;