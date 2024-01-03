import React from 'react'
import { BsCardHeading } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { FiArchive } from 'react-icons/fi'

function AddButton() {
   return (
      <div className="flex justify-center flex-col">
         <button className=" flex justify-center gap-2 rounded-[30px] py-4 bg-gray-200 text-black w-full hover:bg-gray-100">
            <FaPlus className="text-xl" />
            Add new
         </button>
         <div className="flex justify-between gap-4 mt-4">
            <button className="flex justify-center gap-2 rounded-[30px] text-white p-4 border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100">
               <BsCardHeading className="text-xl" />
               Add Header
            </button>
            <button className="flex justify-center gap-2 rounded-[30px] text-white p-4 border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100">
               <FiArchive className="text-xl" />
               View Archive
            </button>
         </div>
      </div>
   )
}

export default AddButton
