import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Select from "../select/Select";
import Toggle from "../toggle/Toggle";



function Modal(addNewTransaction) {
  let [isOpen, setIsOpen] = useState(true);
  let [form, setForm] = useState({ amount: '', valyt: 'PLN', category: '', description: '', type: "expense", date: ''});
  // let [state, setArray] = useState({
  //   description: 'Book',
  //   sum: "45",
  //   valyt: "€",
  //   type: "expense",
  //   category: "education",
  //   day: "14/04/2023",
  //   icon: game,
  // },
  // {
  //   description: 'Shampoo',
  //   sum: "69",
  //   valyt: 'zł' ,
  //   type: "expense",
  //   category: "selfcare",
  //   day: "13/04/2023",
  //   icon: shop,
  // },
  // {
  //   description: 'Work',
  //   sum: "7000",
  //   valyt: "$",
  //   type: "income",
  //   category: "salary",
  //   day: "14/04/2023",
  //   icon: shop,
  // },
  // {
  //   description: 'Zakopane',
  //   sum: "250",
  //   valyt: "€",
  //   type: "expense",
  //   category: "travel",
  //   day: "14/04/2023",
  //   icon: car,
  // },
  // {
  //   description: 'Pizza',
  //   sum: "60",
  //   valyt: "zł",
  //   type: "expense",
  //   category: "entertainment",
  //   day: "20/04/2023",
  //   icon: food,
  // },
  // );

  function closeModal() {
    setIsOpen(false);
  }
  
  function openModal() {
    setIsOpen(true);
  }

  function toggleHandler({enabled}){
    console.log(enabled)
    
    // setForm({...form, type: value})
  }

  function categoryHandler(name){
    // console.log(form)
    
    setForm({...form, category: name})
  }

  function handler(e){
    setForm({...form, description: e.target.value })
  //  console.log(form)
  }

  function handlerDate(e){
    setForm({...form, date: e.target.value })
  //  console.log(form)
  }

  function handlerValut(e){
    setForm({...form, valyt: e.target.value })
  //  console.log(form)
  }

  function handlerAmount(e){
    setForm({...form, amount: e.target.value })
  //  console.log(form)
  }
   console.log(form)

  return (
    <>
      <div className="fixed inline inset-0 flex items-center justify-center">
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
                  <div className="mt-2 flex space-x-12">
                    <div className="basis-1/2 ">
                      <div className="relative mt-2 rounded-md shadow-sm flex">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <span className="text-gray-500 sm:text-sm">$</span>
                        </div>
                        <input
                          type="text"
                          value={form.amount}
                          onChange={handlerAmount}
                          name="price"
                          id="price"
                          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Amount"
                        />
                        <div className="absolute inset-y-0 right-0 flex  justify-end">
                          <label htmlFor="currency" className="sr-only">
                            Currency
                          </label>
                          <select
                            value={form.valyt}
                            onChange={handlerValut}
                            id="currency"
                            name="currency"
                            className="h-full   font-medium rounded-md border-0 bg-transparent py-0 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-rose-200 sm:text-sm focus:outline-none"
                          >
                            <option  value={'USD'}>USD</option>
                            <option  value={'PLN'}>PLN</option>
                            <option  value={'EUR'}>EUR</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    
                    <div className=" basis-1/2 ">
                        <Select value={form.category} onChange={categoryHandler} handleCategory={categoryHandler} />
                    </div>  
                  </div>
                  <div className=" flex mt-5 justify-between">
                  <input
                          type="text"
                          name="description"
                          value={form.description}
                          onChange={handler}
                          id="description"
                          className=" rounded-md border-0 mb-5  py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Description"
                        />
                        <input
                          type="date"
                          name="date"
                          value={form.date}
                          onChange={handlerDate}
                          id="date"
                          className=" text-left   rounded-md border-0 mb-5  py-1.5 pl-12 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-rose-200 sm:text-sm sm:leading-6"
                          placeholder="Transaction date"
                        />
                        
                        
                  </div>
                  <div className=" flex  justify-between">
                    <button
                      type="button"
                      className="inline-flex justify-center text-center rounded-md border border-transparent bg-rose-100 px-4 py-3 text-sm font-medium text-gray-800 hover:bg-rose-400 hover:text-red-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {closeModal, addNewTransaction()}}
                    >
                      Add new transaction
                    </button>
                    <Toggle name="type" value={form.type} onChange={toggleHandler} />
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
