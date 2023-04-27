
import { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import trash from "./../img/trash.png"

function TotalAmount({getAmount, deleteTransaction}){
    return(
        <div className="flex justify-between mt-5">
        <div className="rounded-md text-left pt-4 py-3  ml-3 pr-14  font-base font-bold ring-2 ring-inset ring-rose-100  drop-shadow-xl  pl-2  text-sm   ">
        Total amount: {getAmount()} zł
        </div>
        <div className=" hover:bg-rose-200 pt-4 rounded-md text-left mr-8 py-3 font-base font-bold ring-2 ring-inset ring-rose-100  drop-shadow-xl    text-sm ">
        <button className="" type="button" >
        <img className="pr-4 pl-4" src={trash} alt="" />
        </button>
        </div>
        </div>
    )
}

export default TotalAmount;