'use client'
import React, { useState } from 'react'
import { BsCardHeading } from 'react-icons/bs'
import { FaPlus } from 'react-icons/fa6'

import { getProfileDetailsByEmail } from '@/actions/userProfileCrud'
import AddUrl from '@/components/admin/AddUrl'

import EditHeader from './EditHeader'

interface Props {
   email: string
}

const AddButton: React.FC<Props> = ({ email }) => {
   const [showAddUrl, setShowAddUrl] = useState(true)
   const [showAddHeader, setShowAddHeader] = useState(false)
   const [profile, setProfile] = useState<any>({})

   const handleToggleAddUrl = () => {
      setShowAddUrl((prev) => !prev)
   }

   const handleToggleAddHeader = async () => {
      const profile = await getProfileDetailsByEmail(email)
      setProfile(profile)
      setShowAddHeader((prev) => !prev)
   }

   return (
      <>
         {showAddHeader ? (
            <EditHeader
               setClose={() => setShowAddHeader(false)}
               email={email}
               profile={profile}
            />
         ) : (
            <>
               {showAddUrl ? (
                  <div className="flex sm:flex-row flex-col justify-between gap-4 mt-4">
                     <button
                        className="flex justify-center gap-2 rounded-[30px] text-white  border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100 sm:w-[70%] w-full py-3"
                        onClick={handleToggleAddUrl}
                     >
                        <FaPlus className="text-xl" />
                        Add new
                     </button>
                     <button
                        className="flex justify-center gap-2 rounded-[30px] text-white py-3 border-2 hover:shadow-lg border-gray-200 hover:text-black hover:bg-gray-100 sm:w-[30%] w-full"
                        onClick={handleToggleAddHeader}
                     >
                        <BsCardHeading className="text-xl" />
                        Edit Header
                     </button>
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
