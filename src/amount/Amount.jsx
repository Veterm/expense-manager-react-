
import { Fragment, useEffect, useState } from "react";
import Card from "../Card/Card";
import trash from "./../img/trash.png"

function TotalAmount({getAmount}){
    return(
        <div className="flex justify-center mt-5">
        <div className=" text-center  px-10 pt-3 text-lg font-base font-bold border-t-4 border-pink-900 text-pink-900   drop-shadow-xl  ">
        Total amount: {getAmount()} zł
        </div>
        
        </div>
    )
}

export default TotalAmount;