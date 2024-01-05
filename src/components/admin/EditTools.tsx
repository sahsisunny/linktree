'use client'
import React, { useState } from 'react'
import {
   MdDeleteOutline,
   MdLockOpen,
   MdLockOutline,
   MdOutlineArchive,
   MdOutlineUnarchive,
} from 'react-icons/md'

interface EditToolsProps {
   archived?: boolean
   locked?: boolean
   hidden?: boolean
}

function EditTools() {
   const [isLocked, setIsLocked] = useState(false)
   const [isArchived, setIsArchived] = useState(false)

   return (
      <div className="flex gap-2 w-[full]">
         <MdDeleteOutline className="text-2xl cursor-pointer" />
         {isArchived ? (
            <MdOutlineUnarchive
               className="text-2xl cursor-pointer"
               onClick={() => setIsArchived(false)}
            />
         ) : (
            <MdOutlineArchive
               className="text-2xl cursor-pointer"
               onClick={() => setIsArchived(true)}
            />
         )}
         {isLocked ? (
            <MdLockOutline
               className="text-2xl cursor-pointer"
               onClick={() => setIsLocked(false)}
            />
         ) : (
            <MdLockOpen
               className="text-2xl cursor-pointer"
               onClick={() => setIsLocked(true)}
            />
         )}
      </div>
   )
}

export default EditTools
