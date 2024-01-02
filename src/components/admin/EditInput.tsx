'use client'
import React, { useState, useEffect, useRef } from 'react'
import { MdOutlineModeEdit } from 'react-icons/md'

interface EditInputProps {
   initialText: string
}

export const EditInput: React.FC<EditInputProps> = ({ initialText }) => {
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

   const handleEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
         setIsEditing(false)
         onTextChange(inputValue)
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
               className="text-xl font-bold w-full outline-none bg-transparent focus:border-b-2 border-white"
               value={inputValue}
               onChange={handleInputChange}
               onKeyDown={handleEnterKey}
               ref={inputRef}
            />
         ) : (
            <>
               <h2 className="text-xl font-bold">{inputValue}</h2>
               <button className="text-xl" onClick={handleEditClick}>
                  <MdOutlineModeEdit className="text-xl" />
               </button>
            </>
         )}
      </div>
   )
}
