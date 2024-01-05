'use client'
import React, { useState } from 'react'
import { BsCardHeading } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'
import { FiArchive } from 'react-icons/fi'

import AddUrl from '@/components/admin/AddUrl'

import EditHeader from './EditHeader'

interface Props {
   email: string
}

const AddButton: React.FC<Props> = ({ email }) => {
   const [showAddUrl, setShowAddUrl] = useState(true)
   const [showAddHeader, setShowAddHeader] = useState(false)

   const handleToggleAddUrl = () => {
      setShowAddUrl((prev) => !prev)
   }

   const handleToggleAddHeader = () => {
      setShowAddHeader((prev) => !prev)
   }

   return (
      <>
         {showAddHeader ? (
            <EditHeader
               setClose={() => setShowAddHeader(false)}
               email={email}
            />
         ) : (
            <>
               {showAddUrl ? (
                  <div className="flex justify-center flex-col">
                     <button
                        className="flex justify-center gap-2 rounded-[30px] text-white py-3 border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100"
                        onClick={handleToggleAddUrl}
                     >
                        <FaPlus className="text-xl" />
                        Add new
                     </button>
                     <div className="flex justify-between gap-4 mt-4">
                        <button
                           className="flex justify-center gap-2 rounded-[30px] text-white p-3 border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100"
                           onClick={handleToggleAddHeader}
                        >
                           <BsCardHeading className="text-xl" />
                           Edit Header
                        </button>
                        <button className="flex justify-center gap-2 rounded-[30px] text-white p-3 border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100">
                           <FiArchive className="text-xl" />
                           View Archive
                        </button>
                     </div>
                  </div>
               ) : (
                  <AddUrl setClose={handleToggleAddUrl} email={email} />
               )}
            </>
         )}
      </>
   )
}

export default AddButton
