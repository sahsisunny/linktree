'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { GoListOrdered } from 'react-icons/go'
import {
   MdDeleteForever,
   MdDeleteOutline,
   MdOutlineArchive,
   MdOutlineUnarchive,
   MdRestoreFromTrash,
} from 'react-icons/md'
import { RiDraggable } from 'react-icons/ri'

import {
   archiveUserUrl,
   deleteUserUrl,
   deleteUserUrlForever,
} from '@/actions/urlCrud'
import { EditInput } from '@/components/admin/EditInput'
import UpdateOrder from '@/components/dialog/UpdateOrder'
import Tooltip from '@/components/Tooltip'
import { extractBaseUrl } from '@/utils/urlUtils'
import FaviconModal from '@/components/admin/FaviconModal'

interface EditLinksProps {
   url: string
   title: string
   isArchive: boolean
   isDeleted: boolean
   totalUrls: number
   order: number
   favicon: string
}

function EditLinks({
   url,
   title,
   isArchive,
   isDeleted,
   totalUrls,
   order,
   favicon,
}: EditLinksProps) {
   const [updateOrderModal, setUpdateOrderModal] = useState(false)
   const [editFavicon, setEditFavicon] = useState(false)

   const handleDelete = async () => {
      await deleteUserUrl(url, !isDeleted)
      window.location.reload()
   }
   const handleOrder = async () => {
      setUpdateOrderModal(!updateOrderModal)
   }
   const handleArchive = async () => {
      await archiveUserUrl(url, !isArchive)
      window.location.reload()
   }
   const handleDeleteForever = async () => {
      await deleteUserUrlForever(url)
      window.location.reload()
   }
   const handleEditFavicon = async () => {
      setEditFavicon(!editFavicon)
      console.log(favicon)
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
               <div className="flex flex-col sm:flex-row  gap-2 w-full">
                  <div className="flex justify-center items-center p-2 sm:w-[50px] ">
                     <Tooltip onClick={handleEditFavicon} text="Edit Favicon">
                        <Image
                           onClick={handleEditFavicon}
                           src={
                              favicon ||
                              `https://www.google.com/s2/favicons?domain=${url}&sz=256`
                           }
                           alt={`Favicon for ${extractBaseUrl(url)}`}
                           className="rounded-full"
                           width={50}
                           height={50}
                        />
                     </Tooltip>
                  </div>
                  <div className="flex flex-col gap-2 sm:w-[90%]">
                     <EditInput initialText={title} url={url} maxLength={20} />
                     <EditInput initialText={url} url={url} maxLength={50} />
                     <div className="flex gap-4 w-[full]">
                        {isArchive ? (
                           <Tooltip onClick={handleArchive} text="Unarchive">
                              <MdOutlineUnarchive className="text-2xl cursor-pointer" />
                           </Tooltip>
                        ) : (
                           <Tooltip onClick={handleArchive} text="Archive">
                              <MdOutlineArchive className="text-2xl cursor-pointer" />
                           </Tooltip>
                        )}

                        <Tooltip onClick={handleOrder} text="Change Order">
                           <GoListOrdered className="text-2xl cursor-pointer" />
                        </Tooltip>
                        {updateOrderModal && (
                           <UpdateOrder
                              isOpen={updateOrderModal}
                              onClose={() => setUpdateOrderModal(false)}
                              url={url}
                              totalUrls={totalUrls}
                              order={order}
                           ></UpdateOrder>
                        )}

                        {isDeleted ? (
                           <>
                              <Tooltip onClick={handleDelete} text="Restore">
                                 <MdRestoreFromTrash className="text-2xl cursor-pointer" />
                              </Tooltip>
                              <Tooltip
                                 onClick={handleDeleteForever}
                                 text="Delete Forever"
                              >
                                 <MdDeleteForever className="text-2xl cursor-pointer" />
                              </Tooltip>
                           </>
                        ) : (
                           <Tooltip onClick={handleDelete} text="Delete">
                              <MdDeleteOutline className="text-2xl cursor-pointer" />
                           </Tooltip>
                        )}
                     </div>
                  </div>
               </div>
               {editFavicon && (
                  <FaviconModal
                     url={url}
                     favicon={favicon}
                     setClose={handleEditFavicon}
                  />
               )}
            </div>
         </div>
      </div>
   )
}

export default EditLinks
