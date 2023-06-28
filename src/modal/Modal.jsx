import { Dialog, Transition } from "@headlessui/react";

import { Fragment, useEffect, useState } from "react";
import Select from "../select/Select";
import Toggle from "../toggle/Toggle";
import Datepick from "../datepicker/Datepicker";



import wallet  from '../img/bag.png'



function Modal(props) {
const  {addNewTransaction, isEditForm, onClose, activeUser} = props;
  let [isOpen, setIsOpen] = useState(isEditForm);
  // let [editForm, setEdForm] = useState();
  let [form, setForm] = useState({ sum: '', valyt: 'PLN', category: '', description: '', type: "expense", day: "", icon: wallet, });
  
  let [isDis, setIsDis] = useState(true);
  
  const currency = [ {name: 'PLN'}, {name: 'USD'}, {name: 'EUR'}];
  const category = [
    {name: "Category"},
    { name: "education" },
    { name: "selfcare" },
    { name: "salary" },
    { name: "travel" },
    { name: "transport"},
    { name: "entertainment" },
    { name: "products" },
    { name: "restaurant" },
    { name: "card replenishment"},
    { name: "other" },
  ];
 
  
  
  function onSubmitHandler() {
    setForm({ sum: '', valyt: 'PLN', category: '', description: '', type: "expense", day: '', icon: wallet })
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    if(!isOpen && onClose){
      onClose()
    }
  }, [isOpen])

  useEffect(() => {
    setIsDis(dis())
  }, [form])
  
  function  dis() {
    
    let res = Object.values(form).every(x => x)
    
    return !res
  }

  // function activeUserIcon(){
  //   if(activeUser == 'panda'){
  //     return panda
  //   }if(activeUser == 'Koala'){
  //     return koala
  //   }
  // }


  function toggleHandler(enabled){
    
    setForm({...form, type: enabled == true   ? 'income' : 'expense'})
  }

  function categoryHandler(name){
  
    
    setForm({...form, category: name})
    
  }
  function currencyHandler(name){
    // if( name == 'salary'){
    //   setSlary = true 
    // }
    setForm({...form, valyt: name})
  }
 
  function handler(e){
    setForm({...form, [e.target.name]: e.target.value })
  }
  function handlerDate(e){
    
    let d = new Date(e.target.value);
     let   dayy =  `${d.getDate() < 10 ? "0" + d.getDate() : d.getDate()}/${(d.getMonth() +1)<10 ? "0" + (d.getMonth() +1) : (d.getMonth() +1) }/${d.getFullYear()}`; 
     
     setForm({...form, [e.target.name]: dayy })
   
  }

 
  
  
  

  return (
    <>
    {isEditForm? '' : <div className=" inline inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md  bg-pink-900 drop-shadow-xl px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add transaction
        </button>
      </div>}
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" open={isOpen} className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform  rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 text-center font-bold text-pink-900 border-b-2 border-pink-900"
                  >
                    NEW TRANSACTION
                  </Dialog.Title>
                  <div className="my-4 flex space-x-12">
                    <div className="basis-1/2 ">
                      <div className="relative rounded-md shadow-sm flex">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          value={form.sum}
                          onChange={handler}
                          name="sum"
                          id="sum"
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Amount"
                        />
                        <div className="absolute inset-y-0 right-0 flex  justify-end">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                         <Select items={currency} value={form.valyt} onChange={currencyHandler} handleCategory={currencyHandler} />
                        </div>
                      </div>
                    </div>
                    
                    <div className=" basis-1/2 ">
                        <Select isFullWidth={true} items={category} value={form.category} onChange={categoryHandler} handleCategory={categoryHandler} />
                    </div>  
                  </div>
                  <div className=" flex mt-5 justify-between">
                  <input
                          type="text"
                          name="description"
                          value={form.description}
                          onChange={handler}
                          id="description"
                          required
                          className="  rounded-md border-0 mb-5 mr-12 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Description"
                        />
                        <input
                          type="text"
                          name="day"
                          value={form.day}
                          onChange={handlerDate}
                          id="daye"
                          onFocus={
                            (e)=> {
                              e.currentTarget.type = "date";
                              e.currentTarget.focus();
                             }
                            }
                            onBlur={(e) => (e.currentTarget.type = "text")}
                          className=" text-left  pl-2 rounded-md border-0 mb-5  py-1.5  pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:outline-offset-0 focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Transaction date"
                        /> 
                    

                  </div>
                  <div className=" flex  justify-between">
                    <button
                      id='addTransaction'                    
                      type="button"
                      disabled={isDis}
                      
                      className="inline-flex justify-center text-center rounded-md border border-transparent bg-rose-100 px-4 py-3 text-sm font-medium text-gray-800 hover:bg-rose-400 hover:text-red-50 disabled:hover:bg-rose-100 disabled:hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => { closeModal(), addNewTransaction(form), onSubmitHandler()}}
                      
                    >
                      Add new transaction
                    </button>
                    <Toggle name="type" enabled={form.type  == "income" || (form.category == 'salary') || (form.category == 'card replenishment') } toggleHandler={toggleHandler} />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Modal;
