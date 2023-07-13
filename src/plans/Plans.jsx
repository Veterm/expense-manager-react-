import { useEffect, useState } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage"
import Modal from "../modal/Modal";

import mauntains from "../img/forest.png"

function Plans({newGoal, addNewGoal}){
    console.log(newGoal)
    return(
        <div className="mt-24">
         <h1 className=" text-zinc-300  text-lg ml-40">Planning and goals</h1>
        <div className=" flex mr-6 h-52 bg-white rounded-lg ">
        <div className="grid">
        <h1 className=" text-zinc-500 text-lg w-56 text-left ml-5 mt-4 text-xl">Here you can create a goal and watch your progress...</h1>  
        <div className="flex ml-5">
            <div className="mt-12">
            <Modal isEditForm={false} nameButtom={'Create a goal'} transactionModal={false} addNewGoal={addNewGoal} goalModal={true}/>
            </div>
        <img className="w-28 h-28 ml-20 " src={mauntains} alt="" />
        </div>
        </div>
        </div>
        </div>
    )
}

export default Plans;