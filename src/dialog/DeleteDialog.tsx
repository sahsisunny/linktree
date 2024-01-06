import React from 'react'
import {
   MdClose,
   MdDeleteOutline,
   MdOutlineArchive,
   MdOutlineUnarchive,
} from 'react-icons/md'

import { archiveUserUrl, deleteUserUrl } from '@/actions/urlCrud'

interface DeleteDialogProps {
   isOpen: boolean
   onClose: () => void
   url: string
   isArchive: boolean
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
   onClose,
   url,
   isArchive,
}) => {
   const handleDelete = async () => {
      await deleteUserUrl(url)
      onClose()
      window.location.reload()
   }

   const handleArchive = async () => {
      await archiveUserUrl(url, !isArchive)
      onClose()
      window.location.reload()
   }

   return (
      <div className="flex flex-col bgr rounded-[30px]">
         <div className="px-4 flex justify-center items-center relative w-full">
            <p className="text-lg font-bold w-full text-center">
               Are you sure?
            </p>
            <button
               className="bg-transparent text-gray-200 p-2 text-2xl rounded-full"
               onClick={onClose}
            >
               <MdClose className="text-2xl" />
            </button>
         </div>
         <div className="flex flex-col gap-2 p-4 w-full">
            <div className="flex justify-center gap-6 w-full">
               <button
                  className="border-2 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black rounded-full py-2 flex items-center justify-center gap-2 w-full"
                  onClick={handleDelete}
               >
                  <MdDeleteOutline className="text-2xl" />
                  Delete
               </button>

               <button
                  className="border-2 transition duration-500 ease-in-out hover:bg-gray-200 hover:text-black rounded-full py-2 flex items-center justify-center gap-2 w-full"
                  onClick={handleArchive}
               >
                  {isArchive ? (
                     <MdOutlineUnarchive className="text-2xl" />
                  ) : (
                     <MdOutlineArchive className="text-2xl" />
                  )}
                  {isArchive ? 'Unarchive' : 'Archive'}
               </button>
            </div>
         </div>
      </div>
   )
}

export default DeleteDialog
