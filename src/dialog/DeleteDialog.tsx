import React from 'react'
import { MdClose, MdDeleteOutline, MdOutlineArchive } from 'react-icons/md'

import { archiveUserUrl, deleteUserUrl } from '@/actions/delete'

interface DeleteDialogProps {
   isOpen: boolean
   onClose: () => void
   url: string
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({ onClose, url }) => {
   const handleDelete = async () => {
      await deleteUserUrl(url)
      onClose()
      window.location.reload()
   }

   const handleArchive = async () => {
      await archiveUserUrl(url, true)
      onClose()
      window.location.reload()
   }

   return (
      <div className="flex flex-col">
         <div className="px-4 flex justify-center items-center relative w-full bgr">
            <h1 className="text-2xl font-bold w-full text-center">Delete</h1>
            <button
               className="hover:bg-white hover:text-black rounded-full p-2"
               onClick={onClose}
            >
               <MdClose className="text-2xl" />
            </button>
         </div>
         <div className="flex flex-col gap-2 p-4 w-full">
            <div className="flex justify-center gap-6 w-full">
               <button
                  className="border-2 hover:bg-gray-200 hover:text-black rounded-full py-2 flex items-center justify-center gap-2 w-full"
                  onClick={handleDelete}
               >
                  <MdDeleteOutline className="text-2xl" />
                  Delete
               </button>

               <button
                  className="border-2 hover:bg-gray-200 hover:text-black rounded-full py-2 flex items-center justify-center gap-2 w-full"
                  onClick={handleArchive}
               >
                  <MdOutlineArchive className="text-2xl" />
                  Archive
               </button>
            </div>
         </div>
      </div>
   )
}

export default DeleteDialog