'use client'
import { RiDraggable } from 'react-icons/ri'

import { EditInput } from '@/components/admin/EditInput'
import CheckBoxInput from '@/components/admin/CheckBoxInput'
import EditTools from '@/components/admin/EditTools'
import React from 'react'

function EditLinks() {
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
            className="sm:flex justify-center items-center cursor-pointer hidden"
         >
            <RiDraggable className="text-3xl" />
         </div>
         <div className="w-full flex flex-col gap-2 p-4">
            <div className="flex justify-between gap-2">
               <div className="flex flex-col justify-between gap-2 w-full">
                  <EditInput initialText="Link Title" />
                  <EditInput initialText="Link Title" />
               </div>
            </div>
            <EditTools />
         </div>
         <div className="flex justify-center items-center sm:p-4 p-0">
            <CheckBoxInput />
         </div>
      </div>
   )
}

export default EditLinks
