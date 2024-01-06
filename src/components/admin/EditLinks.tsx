'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdDeleteOutline, MdLockOpen, MdLockOutline } from 'react-icons/md'
import { RiDraggable } from 'react-icons/ri'

import { EditInput } from '@/components/admin/EditInput'
import DeleteDialog from '@/dialog/DeleteDialog'
import { extractBaseUrl } from '@/utils/getDomainFromUrl'

interface EditLinksProps {
   url: string
   title: string
}

function EditLinks({ url, title }: EditLinksProps) {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [isLocked, setIsLocked] = useState(false)

   const handleDelete = async () => {
      setIsModalOpen(!isModalOpen)
   }

   const dragItem = React.useRef<HTMLDivElement>(null)
   const dragItemNode = dragItem.current
   const dragItemIndex = 0

   const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      if (dragItemNode) {
         e.dataTransfer.setDragImage(dragItemNode, 20, 20)
      }
   }
   return (
      <div className="bg w-full rounded-[30px] border-x-2">
         <div
            ref={dragItem}
            draggable
            data-index={dragItemIndex}
            className="w-full rounded-[30px]  flex "
         >
            <div
               onDragStart={handleDragStart}
               className="sm:flex justify-center items-center cursor-pointer hidden w-1/10 "
            >
               <RiDraggable className="text-3xl" />
            </div>

            <div className="flex flex-col gap-2 p-4 w-full">
               <div className="flex  gap-2 w-full">
                  <div className="flex justify-center items-center p-2 w-[50px]">
                     <Image
                        src={`https://www.google.com/s2/favicons?sz=256&domain_url=${extractBaseUrl(
                           url,
                        )}`}
                        alt=""
                        className="rounded-full"
                        width={50}
                        height={50}
                     />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                     <EditInput initialText={title} />
                     <EditInput initialText={url} />
                     <div className="flex gap-2 w-[full]">
                        <MdDeleteOutline
                           className="text-2xl cursor-pointer"
                           onClick={handleDelete}
                        />
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
                  </div>
               </div>
            </div>
         </div>
         {isModalOpen && (
            <DeleteDialog
               isOpen={isModalOpen}
               onClose={() => setIsModalOpen(false)}
               url={url}
            ></DeleteDialog>
         )}
      </div>
   )
}

export default EditLinks
