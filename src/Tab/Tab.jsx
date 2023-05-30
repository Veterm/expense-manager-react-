import { useState } from "react";
import  {Tab}  from '@headlessui/react'
import Card from "../Card/Card";
import empty from "../img/empty.png"
import data from "../data/ModelData";



function Tabs(props) {
  
  const { data, deleteHandler, editHandler, searchId, useFilter, filterCategory, useDate, nameDate} = props;
  const {category, setCategory} = useState('');
  const lupa = <div className="flex justify-center mt-44 mx-40 px-1">
  <img className=" " src={empty} alt="" />
</div>;

function contentCard(){
  if(data[1].content.length ===0 ){
    return false
  }else{
    return true
  }
}
function handler(name){
  console.log(name)
}





  return (
    
    <div className="">
      <Tab.Group
        onChange={(index) => {
          console.log('Changed selected tab to:', index)
        }}
      >
        <Tab.List className="" >
          <div className="">
          
            {data.map((item, i) => (
              <Tab
                key={i}
                value={item.name}
                onChange={handler}
                className={({ selected }) =>
                  ` font-bold p-2 text-gray-500 focus:outline-none ${
                    selected
                    ?  " border-b-4 border-pink-900 text-pink-900 "
                      : "text-gray-500 border-0 "
                  }`
                  
                }
              >
                {console.log(item.name)}
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
                    {item.content.filter(x => useDate ? x.day == nameDate : true).filter(x => useFilter ? x.category == filterCategory : true).filter(x => x == 0 ? lupa : true).map((x, i) => (

                      <Card
                        key={i}
                        icon={x.icon}
                        description={x.description}
                        sum={x.sum}
                        valyt={x.valyt}
                        category={x.category}
                        day={x.day}
                        id={x.id}
                        deleteHandler={deleteHandler}
                        editHandler={editHandler}
                        searchId={searchId}
                      />

                    ))}
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