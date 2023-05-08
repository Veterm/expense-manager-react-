import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input });

function Datepick(){
  function handlerDate(e) {

    let d = new Date(e.target.value);
    let dayy = `${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}/${(d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1)}/${d.getFullYear()}`;

    console.log(dayy)

  }
  return (
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
      className=" text-left w-20 pl-2 rounded-md border-0   py-1.5  pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
      placeholder="Date filter"
    />

  )
}

export default Datepick;