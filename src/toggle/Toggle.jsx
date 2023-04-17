import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Toggle() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='place-content-center  mr-10 z-10 '>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-teal-600' : 'bg-rose-800'}
          relative inline-flex h-[32px] w-[68px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only"></span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        
      </Switch>
      <div className="pr-2 pl-1 font-semibold">
        {enabled ? 'income' : "expense"}
     </div>
    </div>
  )
}

export default Toggle;