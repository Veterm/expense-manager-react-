import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import select from '../img/select.png'

export default function Select({ name, handleCategory, items, isFullWidth }) {

  const [selectedCategory, setSelected] = useState({ name });

  useEffect(() => {
    handleCategory(selectedCategory.name)

  }, [selectedCategory])

  return (
    <div className="flex z-20">
      <Listbox value={selectedCategory} onChange={setSelected}>
        {({ open }) => (
          <div className={`relative z-20 ${isFullWidth ? 'w-full' : 'w-16'} `}>

            <Listbox.Button className=" w-44 pl-3  py-1.5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-200 sm:text-sm sm:leading-6 
           relative w-full cursor-default rounded-lg bg-white ">
              <span className="block truncate text-pink-900 font-medium" >{selectedCategory.name ? selectedCategory.name : items[0].name}</span>

              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center ">
                <img className={open ? "rotate-180" : ""} src={select} alt="" />
              </span>
            </Listbox.Button>
            {open && (
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options static className="focus:ring-rose-200  absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {items.map((person, personIdx) => (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none   py-2 pl-3 pr-4 ${active ? "bg-rose-200 text-amber-900" : "text-gray-900"
                        }`
                      }
                      value={person}
                    >
                      {({ selectedCategory }) => (
                        <>
                          <span
                            className={`block truncate ${selectedCategory ? "font-medium" : "font-normal"
                              }`}
                          >
                            {person.name}
                          </span>
                          {selectedCategory ? (
                            <span className="absolute w-42 inset-y-0 left-0 flex items-center pl-3 text-pink-900">

                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            )}
          </div>
        )}
      </Listbox>
    </div>
  );
}
