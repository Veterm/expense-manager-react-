import { useEffect, useState } from "react";

import game from '../img/gamepad-2.png'
import food from '../img/Food.png'
import shop from '../img/Shopping.png'
import car  from '../img/Trasnport.png'
import wallet  from '../img/bag.png'
import trash from "./../img/trash.png"
import pencil from "./../img/pencil.png"

function AddCategories(){


    const categoryList = { "education": shop,  "restaurant":food, "salary": wallet ,  "travel": car ,  "entertainment": game , "selfcare": shop, "products": food , 'card replenishment': wallet, "transport": car, "other": shop }
    const icons = Object.values(categoryList)
    const category = Object.keys(categoryList)
    
    return(
        <div className="flex w-60 h-68 bg-white mr-6  rounded-lg  ">
            <div className="h-68">
            <div className="grid grid-cols-3 py-4 pl-3 gap-4 h-68 overflow-y-scroll">
                {icons.map((item, i) => (
                    <div className="flex flex-wrap  justify-center">
                    <div key={i} className="flex justify-center py-3 w-12 h-12 bg-rose-100 rounded-full  ">
                        <img key={i} className="w-6 h-6 " src={item} alt="icon" />  
                    </div>
                    <h1 className="text-xs  text-gray-500 font-medium ">{category[i]}</h1>
                    </div>
                ))}
                <div className="flex flex-wrap justify-center ">
              <button className="flex justify-center py-1 w-12 h-12 bg-rose-100 rounded-full text-3xl  text-gray-500 ">+</button>
              <h1 className="text-xs  text-gray-500 font-medium ">add</h1>
              </div>
            </div>
            </div>
           
        </div>
    )
}

export default AddCategories;

