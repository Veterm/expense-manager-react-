import { Dialog, Transition } from "@headlessui/react";

import { Fragment, useEffect, useState } from "react";
import Select from "../select/Select";
import Toggle from "../toggle/Toggle";
import { Datepicker, Input, initTE } from "tw-elements";
initTE({ Datepicker, Input });


import wallet  from '../img/bag.png'



function Modal({addNewTransaction}) {
  let [isOpen, setIsOpen] = useState(true);
  let [form, setForm] = useState({ sum: '', valyt: 'PLN', category: '', description: '', type: "expense", day: '', icon: wallet});
  let [isDis, setIsDis] = useState(true);
  const currency = [ {name: 'PLN'}, {name: 'USD'}, {name: 'EUR'}];
  const people = [
    {name: "Category"},
    { name: "education" },
    { name: "selfcare" },
    { name: "salary" },
    { name: "travel" },
    { name: "entertainment" },
    { name: "food" },
    { name: "other" },
  ];
 
  
  function onSubmitHandler() {
    setForm({ sum: '', valyt: 'PLN', category: '', description: '', type: "expense", day: '', icon: wallet})
  }
  
  function closeModal() {
    setIsOpen(false);
  }
  
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    setIsDis(dis())
    
  }, [form])
  
  function  dis() {
    
    let res = Object.values(form).every(x => x)
    
    return !res
  }




  function toggleHandler(enabled){
    console.log(`toggle`,enabled)
    setForm({...form, type: enabled == true ? 'income' : 'expense'})
  }

  function categoryHandler(name){
    setForm({...form, category: name})

  }
  function currencyHandler(name){
    setForm({...form, valyt: name})
  }



  function handler(e){
    setForm({...form, [e.target.name]: e.target.value })
  }
  var d = new Date(form.day);

      var   dayy =  `${d.getDate()}/${d.getMonth() +1}/${d.getFullYear()}`; 
   
   console.log(dayy)

  return (
    <>
      <div className=" inline inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md  bg-pink-900 drop-shadow-xl px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Add transaction
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

          <div className="fixed inset-0 overflow-y-auto">
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
                          required
                          
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
                        <Select isFullWidth={true} items={people} value={form.category} onChange={categoryHandler} handleCategory={categoryHandler} />
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
                          className="  rounded-md border-0 mb-5  py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Description"
                        />
                        <input
                          type="date"
                          name="day"
                          value={form.day}
                          onChange={handler}
                          id="daye"
                          required
                          className=" text-left text-rose-900 font-medium pl-11 rounded-md border-0 mb-5  py-1.5 pl-12 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Transaction date"
                        />
                        {/* <div
  className="relative mb-3"
  data-te-datepicker-init
  data-te-inline="true"
  data-te-input-wrapper-init>
  <input
    name="date"
    value={form.date}
    onChange={handler}
    id="date"
                          
    className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    placeholder="Select a date" />
  <label
    htmlFor="floatingInput"
    className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    >Select a date</label>
</div> */}

                  </div>
                  <div className=" flex  justify-between">
                    <button
                      id='addTransaction'                    
                      type="button"
                      disabled={isDis}
                      
                      className="inline-flex justify-center text-center rounded-md border border-transparent bg-rose-100 px-4 py-3 text-sm font-medium text-gray-800 hover:bg-rose-400 hover:text-red-50 disabled:hover:bg-rose-100 disabled:hover:text-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {closeModal(), addNewTransaction(form), onSubmitHandler()}}
                      
                    >
                      Add new transaction
                    </button>
                    <Toggle name="type" enabled={form.type == "income"} toggleHandler={toggleHandler} />
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
