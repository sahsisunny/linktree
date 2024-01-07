'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { MdDeleteOutline, MdOutlineUnarchive } from 'react-icons/md'
import { RiDraggable } from 'react-icons/ri'
import { GoListOrdered } from 'react-icons/go'

import { EditInput } from '@/components/admin/EditInput'
import DeleteDialog from '@/components/dialog/DeleteDialog'
import UpdateOrder from '@/components/dialog/UpdateOrder'
import { extractBaseUrl } from '@/utils/urlUtils'

interface EditLinksProps {
   url: string
   title: string
   isArchive: boolean
   totalUrls: number
   order: number
}

function EditLinks({
   url,
   title,
   isArchive,
   totalUrls,
   order,
}: EditLinksProps) {
   const [isModalOpen, setIsModalOpen] = useState(false)
   const [isUpdateOrderOpen, setIsUpdateOrderOpen] = useState(false)
   const handleDelete = async () => {
      setIsModalOpen(!isModalOpen)
      setIsUpdateOrderOpen(false)
   }
   const handleOrder = async () => {
      setIsUpdateOrderOpen(!isUpdateOrderOpen)
      setIsModalOpen(false)
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
                        src={`https://www.google.com/s2/favicons?domain=${extractBaseUrl(
                           url,
                        )}&sz=256`}
                        alt=""
                        className="rounded-full"
                        width={50}
                        height={50}
                     />
                  </div>
                  <div className="flex flex-col gap-2 w-[90%]">
                     <EditInput initialText={title} url={url} maxLength={20} />
                     <EditInput initialText={url} url={url} maxLength={50} />
                     <div className="flex gap-2 w-[full]">
                        {isArchive ? (
                           <MdOutlineUnarchive
                              className="text-2xl cursor-pointer"
                              onClick={handleDelete}
                           />
                        ) : (
                           <MdDeleteOutline
                              className="text-2xl cursor-pointer"
                              onClick={handleDelete}
                           />
                        )}
                        <GoListOrdered
                           className="text-2xl cursor-pointer"
                           onClick={handleOrder}
                        />
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
               isArchive={isArchive}
            ></DeleteDialog>
         )}
         {isUpdateOrderOpen && (
            <UpdateOrder
               isOpen={isUpdateOrderOpen}
               onClose={() => setIsUpdateOrderOpen(false)}
               url={url}
               totalUrls={totalUrls}
               order={order}
            ></UpdateOrder>
         )}
      </div>
   )
}

export default EditLinks
