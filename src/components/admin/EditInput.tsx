'use client'
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md'
import { updateUserUrlTitle, updateUserUrl } from '@/actions/urlCrud'
import { isValidUrl } from '@/utils/urlUtils'

interface EditInputProps {
   initialText: string
   url: string
}

export const EditInput: React.FC<EditInputProps> = ({ initialText, url }) => {
   const [isEditing, setIsEditing] = useState(false)
   const [inputValue, setInputValue] = useState(initialText)
   const inputRef = useRef<HTMLInputElement>(null)

   useEffect(() => {
      if (isEditing && inputRef.current) {
         inputRef.current.focus()
      }
   }, [isEditing])

   const handleEditClick = () => {
      setIsEditing(true)
   }

   const onTextChange = (text: string) => {
      setInputValue(text)
   }

   const handleEnterKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         setIsEditing(false)
         onTextChange(inputValue)
         // if initialText is url, then update url
         if (isValidUrl(initialText)) {
            await updateUserUrl(initialText, inputValue)
            window.location.reload()
         } else {
            await updateUserUrlTitle(url, inputValue)
            window.location.reload()
         }
      }
   }

   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value)
   }

   return (
      <div className="flex gap-2 items-center w-full">
         {isEditing ? (
            <input
               type="text"
               className="font-semibold w-full outline-none bg-transparent focus:border-b-2 border-white"
               value={inputValue}
               onChange={handleInputChange}
               onKeyDown={handleEnterKey}
               ref={inputRef}
            />
         ) : (
            <>
               <p className="font-semibold max-w-[85%] whitespace-nowrap overflow-hidden overflow-ellipsis">
                  {inputValue}
               </p>
               <button className="text-xl" onClick={handleEditClick}>
                  <MdOutlineModeEdit className="text-xl" />
               </button>
            </>
         )}
      </div>
   )
}
