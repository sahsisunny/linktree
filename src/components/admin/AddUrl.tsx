'use client'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import grabUrl from '@/actions/grabUrl'

interface Props {
   setClose: () => void
   email: string
}

const AddUrl: React.FC<Props> = ({ setClose, email }) => {
   const [url, setUrl] = useState('')
   const onSubmit = async () => {
      const res = await grabUrl(email, url)
      if (res?.error) {
         console.log(res.error)
      } else {
         setClose()
      }
   }
   return (
      <div className="flex justify-center flex-col bg shadow-2xl border-x-2 text-black p-4 gap-4 rounded-xl">
         <div className="flex justify-between w-full">
            <h1 className="text-2xl font-bold">Enter Url</h1>
            <button
               className="bg-transparent text-gray-200 p-2 text-2xl rounded-full hover:bg-gray-200 hover:text-black"
               onClick={setClose}
            >
               <IoCloseSharp />
            </button>
         </div>
         <div className="flex justify-center w-full gap-4">
            <input
               className="w-full bg-white text-black rounded-full outline-none text-xl font-semibold  py-2 px-6 border-2"
               type="text"
               placeholder="URL"
               value={url}
               onChange={(e) => setUrl(e.target.value)}
            />

            <button
               className="bg text-black px-6 py-2 rounded-full border-y-2"
               onClick={onSubmit}
            >
               Add
            </button>
         </div>
      </div>
   )
}

export default AddUrl
