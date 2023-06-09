import { Fragment, useEffect, useState } from "react";
import Modal from "../modal/Modal";


import "./card.css";
import game from '../img/gamepad-2.png'
import food from '../img/Food.png'
import shop from '../img/Shopping.png'
import car  from '../img/Trasnport.png'
import wallet  from '../img/bag.png'
import trash from "./../img/trash.png"
import pencil from "./../img/pencil.png"
import panda from '../img/pandalittl.png'
import koala from '../img/koalalittl.png'
import health from '../img/health.png'
import educ from '../img/education.png'
import products from '../img/shop.png'
import plane from '../img/plane.png'



   
const icons = { "education": educ, "selfcare": health , 'salary': wallet ,  "travel": plane , "transport": car, "entertainment": game ,"restaurant":food,  "products": products , 'card replenishment': wallet,  "other": shop }
const currency = {PLN: 'zł', USD: "$", EUR: "€" }



function Card(props) {
  const {  sum, valyt,  category, description, day, id, deleteHandler, editHandler, user,  searchId, activeUser} = props;
  
  const [editForm, setEditForm] = useState(false);


  function editTransaction(){
  
    setEditForm(!editForm)
  
}
  function activeUserIcon(){
    if(activeUser == 'panda'){
      return panda
    }if(activeUser == 'Koala'){
      return koala
    }
  }
 

  return (
    <>
     <div className=" flex bg-white  ">
    <div className="card bg-white pr-4">
      <div className="flex text-left text-gray-950 space-x-4 ">
        <div className="flex justify-center bg-neutral-200 rounded-md ">
          <img className="mx-2 w-6 h-6 self-center" src={icons[category]} alt="icon" />
        </div>
        <div className="flex flex-col ">
          <h1 className="font-base font-bold capitalize ">{description}</h1>
          <h1 className="text-xs text-zinc-500">{category}</h1>
        </div>
      </div>
      <div className="info text-right text-gray-500 ">
        <h1 className="font-base font-bold">{`${sum} ${currency[valyt]}`}</h1>
        <h1 className="text-zinc-500 text-xs">{day}</h1>
      </div>
      </div>
      <div className="inline-flex flex-col">
      <button type="button" onClick={() => { deleteHandler(id) }} className="place-self-start pt-4 pb-2 pl-1 pr-2 hover:opacity-75 ">
        <img className="" src={trash} alt="" />
      </button>
      <button type="button" onClick={()=>{editTransaction(), searchId(id)}} className=" pl-1.5 hover:opacity-75 pt-2 ">
          <img className=" " src={pencil} alt="" />
        </button>
        <img className="w-6 h-6 mt-3 ml-0.5"src={user == 'panda'? panda : koala} alt="" />
        {editForm && <Modal isEditForm={true} goalModal={false} transactionModal={true} onClose={() => {setEditForm(false)}} addNewTransaction={editHandler}  />}

      </div>
    </div> 
    
    </>
  );
};

export default Card;
