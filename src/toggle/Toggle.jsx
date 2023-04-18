import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Toggle({value, toggleHandler}) {
  const [enabled, setEnabled] = useState(false)
  
   
 
  // console.log(value)

  return (
    <div className='place-content-center  mr-16 z-10 '>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        // onClick={toggleChecked}
        className={`${enabled ? 'bg-teal-600' : 'bg-rose-800'}
          relative inline-flex h-[26px] w-[62px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only"></span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        
      </Switch>
      <div className="pr-1 pl-2 font-semibold text-xs">
        {enabled ? 'income' : "expense"}
     </div>
    </div>
  )
}

export default Toggle;