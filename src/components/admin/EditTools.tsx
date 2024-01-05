'use client'
import React, { useState } from 'react'
import {
   MdDeleteOutline,
   MdLockOpen,
   MdLockOutline,
   MdOutlineArchive,
   MdOutlineUnarchive,
} from 'react-icons/md'

function EditTools() {
   const [isLocked, setIsLocked] = useState(false)
   const [isArchived, setIsArchived] = useState(false)
   return (
      <div className="flex gap-2 w-[full]">
         <MdDeleteOutline className="text-2xl" />
         {isArchived ? (
            <MdOutlineUnarchive
               className="text-2xl"
               onClick={() => setIsArchived(false)}
            />
         ) : (
            <MdOutlineArchive
               className="text-2xl"
               onClick={() => setIsArchived(true)}
            />
         )}
         {isLocked ? (
            <MdLockOutline
               className="text-2xl"
               onClick={() => setIsLocked(false)}
            />
         ) : (
            <MdLockOpen
               className="text-2xl"
               onClick={() => setIsLocked(true)}
            />
         )}
      </div>
   )
}

export default EditTools
