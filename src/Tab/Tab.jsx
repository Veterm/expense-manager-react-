import { useState } from "react";
import  {Tab}  from '@headlessui/react'
import Card from "../Card/Card";
import empty from "../img/empty.png"
import data from "../data/ModelData";



function Tabs(props) {
  
  const { data, deleteHandler, editHandler, filterUser, useFilterUserPanda, useFilterUserKoala, searchId, searchIndexTab, useFilter, filterCategory, useDate, nameDate, activeUser} = props;
  const [filterData, setFilterData] = useState(0)
  const lupa = <div className="flex justify-center mt-44 mx-40 px-1">
  <img className=" " src={empty} alt="" />
</div>;



// setFilterData(data.filter(x => useFilter ? x.category == filterCategory : true))
// console.log(filterData)
// function activeIndex(index){
//   searchIndexTab(index)
// }
// activeIndex(selectedIndex)

// function getAmount(items) {
//     let amount = 0;
//   for (let i = 0; i < items.length; i++) {
//     amount += Number(items[i].sum)
//   }return amount;
// }

// console.log(getAmount(data[selectedIndex].content))

  return (
    
    <div className="">
      <Tab.Group  onChange={(index) => {
        searchIndexTab(index)
      }}
        
    
        
      >
        
        <Tab.List className="" >
          <div className="">
          
            {data.map((item, i) => (
              <Tab
                key={i}
                className={({ selected }) =>
                  ` font-bold p-2 text-gray-500 focus:outline-none ${
                    selected
                    ?  " border-b-4 border-pink-900 text-pink-900 "
                      : "text-gray-500 border-0 "
                  }`
                  
                }
              >
               
                {item.name}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="h-96 overflow-y-scroll">
          { data.map((item, i) => (
            <Tab.Panel key={i}>
              
              <div className="divide-y-2  divide-neutral-100  ">
              
                {item.content.length > 0 && 
                  <>
                    {item.content.filter(x => useDate ? x.day == nameDate : true).filter(x => useFilter ? x.category == filterCategory : true).filter(x => useFilterUserPanda? x.user == filterUser: true).filter(x => useFilterUserKoala? x.user == filterUser: true).map((x, i) => (

                <Card
                    key={i}
                    icon={x.icon}
                    description={x.description}
                    sum={x.sum}
                    valyt={x.valyt}
                    category={x.category}
                    day={x.day}
                    id={x.id}
                    user={x.user}
                    deleteHandler={deleteHandler}
                    editHandler={editHandler}
                    searchId={searchId}
                    activeUser={activeUser}
                  />

                    ))}
                    { ((item.content.filter(x => useFilter ? x.category == filterCategory : true).length == 0 )
                    || (item.content.filter(x => useDate ? x.day == nameDate : true).length == 0) || (item.content.filter(x => useDate ? x.day == nameDate : true).filter(x => useFilter ? x.category == filterCategory : true).length == 0)|| (item.content.filter(x => useDate ? x.day == nameDate : true).filter(x => useFilter ? x.category == filterCategory : true).filter(x => useFilterUserKoala? x.user == filterUser: true).length == 0 )|| (item.content.filter(x => useFilterUserPanda? x.user == filterUser: true).length == 0 )|| (item.content.filter(x => useDate ? x.day == nameDate : true).filter(x => useFilter ? x.category == filterCategory : true).filter(x => useFilterUserPanda? x.user == filterUser: true).length == 0 )|| (item.content.filter(x => useFilterUserPanda? x.user == filterUser: true).length == 0) || (item.content.filter(x => useFilterUserKoala? x.user == filterUser: true).length == 0 )) && lupa}
                    
                  </>
                } 
                { item.content.length == 0 &&
                  lupa
                }
              </div>
            </Tab.Panel>
          ))}
          
        </Tab.Panels>
       
      </Tab.Group>
    </div>
  );


}

export default Tabs;