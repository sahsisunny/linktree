'use client'
import { RiDraggable } from 'react-icons/ri'

import { EditInput } from '@/components/admin/EditInput'
import CheckBoxInput from '@/components/admin/CheckBoxInput'
import EditTools from '@/components/admin/EditTools'
import { extractBaseUrl } from '@/utils/getDomainFromUrl'
import React from 'react'
import Image from 'next/image'

interface EditLinksProps {
   url: string
   title: string
   isArchived?: boolean
   isPinned?: boolean
}

function EditLinks({ url, title, isArchived, isPinned }: EditLinksProps) {
   const dragItem = React.useRef<HTMLDivElement>(null)
   const dragItemNode = dragItem.current
   const dragItemIndex = 0

   const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
      if (dragItemNode) {
         e.dataTransfer.setDragImage(dragItemNode, 20, 20)
      }
   }
   return (
      <div
         ref={dragItem}
         draggable
         data-index={dragItemIndex}
         className="w-full rounded-[30px] bg-white text-black flex bg border-x-2"
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
                     src={`https://www.google.com/s2/favicons?sz=126&domain_url=${extractBaseUrl(
                        url,
                     )}`}
                     alt=""
                     className="rounded-full"
                     width={50}
                     height={50}
                  />
               </div>
               <div className="flex flex-col gap-2 w-full">
                  <EditInput initialText={title || 'Link Title'} />
                  <EditInput initialText={url || 'Link URL'} />
                  <EditTools />
               </div>
            </div>
         </div>

         <div className="flex justify-center items-center sm:p-4 p-2 w-1/10 ">
            <CheckBoxInput />
         </div>
      </div>
   )
}

export default EditLinks
