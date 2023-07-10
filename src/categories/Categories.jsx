import { useEffect, useState } from "react";
import Select from '../select/Select'

import game from '../img/gamepad-2.png'
import food from '../img/Food.png'
import shop from '../img/Shopping.png'
import car  from '../img/Trasnport.png'
import wallet  from '../img/bag.png'
import health from '../img/health.png'
import educ from '../img/education.png'
import products from '../img/shop.png'
import plane from '../img/plane.png'

function AddCategories(){
    const [newCategory, setNewCategory]=useState({icon: '', name: ''})
    let [isOpen, setIsOpen] = useState(false)
    let categoryList = { "education": educ,  "restaurant":food, "salary": wallet ,  "travel": plane ,  "entertainment": game , "selfcare": health, "products": products , 'card replenishment': wallet, "transport": car, "other": shop }
    let icons = Object.values(categoryList)
    let category = Object.keys(categoryList)
    let iconsSelect = [
        {name: <img  className="w-6 h-6 " src={game} alt="icon" /> },
        { name:  <img  className="w-6 h-6 " src={food} alt="icon" />},
        { name: <img  className="w-6 h-6 " src={shop} alt="icon" />},
        { name:  <img  className="w-6 h-6 " src={car} alt="icon" />},
        { name: <img  className="w-6 h-6 " src={wallet} alt="icon" />},
        { name:  <img  className="w-6 h-6  " src={health} alt="icon" />},
        { name:  <img  className="w-6 h-6 " src={products} alt="icon" /> },
        { name:  <img  className="w-6 h-6 " src={plane} alt="icon" />},
       
      ];
    // let iconsSelect = icons.map((item, i) => <img key={i} className="w-6 h-6 " src={item} alt="icon" />)
    console.log(newCategory)
    function closeModal() {
        setIsOpen(false);
      }
      
      function openModal() {
        setIsOpen(true);
      }
      function handler(e){
        setNewCategory({...newCategory, [e.target.name]: e.target.value })
      }
    

      function categoryHandler(name){
        // console.log(name.props.id)
        setNewCategory({...newCategory, icon: name })
        
    }
    function addNewCategory(){
        newCategory
    }
    
    return(
        <div>
       
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
              <button onClick={openModal} className="flex justify-center py-1 w-12 h-12 bg-rose-100 rounded-full text-3xl  text-gray-500 ">+</button>
              <h1 className="text-xs  text-gray-500 font-medium ">add</h1>
              </div>
            </div>
            </div>
        </div>
        {isOpen && <div  className="w-60 h-9 flex justify-between transition duration-300  rounded-lg mt-5">
                    <input name={'name'} value={newCategory.name} onChange={handler} type="text" placeholder="Category" className="block  rounded-md border-0 h-9 w-40 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"/>
                    <Select  items= {iconsSelect}  onChange={categoryHandler} handleCategory={categoryHandler}/>
        </div>}
        </div>
    )
}

export default AddCategories;

