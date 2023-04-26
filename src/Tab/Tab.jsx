import { useState } from "react";
import  {Tab}  from '@headlessui/react'
import Card from "../Card/Card";
import data from "../data/ModelData";



function Tabs(data) {

  return (
    <div className="">
      <Tab.Group>
        <Tab.List className="">
          <div className="">
            {data.data.map((item, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  ` font-bold p-2 text-gray-500 focus:outline-none ${
                    selected
                      ? " border-b-4 border-pink-900 text-pink-900 "
                      : "text-gray-500 border-0 "
                  }`
                }
              >
                {item.name}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="">
          {data.data.map((item, i) => (
            <Tab.Panel key={i}>
              <div className="divide-y-2  divide-neutral-100 ">
                {item.content.map((x, i) => (
                  <Card
                    key={i}
                    icon={x.icon}
                    description={x.description}
                    sum={x.sum}
                    valyt={x.valyt}
                    category={x.category}
                    day={x.day}
                  />
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );


}

export default Tabs;