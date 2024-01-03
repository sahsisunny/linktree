'use client'
import React from 'react'

const CheckBoxInput = () => {
   const [isChecked, setIsChecked] = React.useState(false)

   const checkHandler = () => {
      setIsChecked(!isChecked)
      console.log(isChecked)
   }
   return (
      <label className="relative inline-flex items-center cursor-pointer">
         <input
            type="checkbox"
            defaultChecked={isChecked}
            className="sr-only peer"
            onChange={checkHandler}
         />
         <div className="peer ring-0 bg-rose-400 rounded-full outline-none duration-300 after:duration-500 w-8 h-8 shadow-md peer-checked:bg-emerald-500 peer-focus:outline-none after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:h-6 after:w-6 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0"></div>
      </label>
   )
}

export default CheckBoxInput
