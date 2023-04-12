import { useState } from "react";
import  {Tab}  from '@headlessui/react'
import Card from "../Card/Card";
import data from "../data/ModelData";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Tabs() {
    return (
        <div >
        <Tab.Group>
            <Tab.List className="">
                <Tab 
                    className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >All</Tab>
                <Tab>Revenue</Tab>
                <Tab>Expenses</Tab>
            </Tab.List>
            <Tab.Panels>
                <div className="divide-y-2 divide-neutral-100">
                    {data.map((data) => <Card icon={data.icon} description={data.description} sum={data.sum} valyt={data.valyt} category={data.category} day={data.day} />)}
                </div>
            </Tab.Panels>
         </Tab.Group> 
         </div>
    )


}

export default Tabs;