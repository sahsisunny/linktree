'use client'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'

import getUri from '@/actions/getUri'
import { isValidUrl } from '@/utils/urlUtils'
import { addUserUrl } from '@/actions/urlCrud'

interface Props {
   setClose: () => void
   email: string
}

const AddUrl: React.FC<Props> = ({ setClose, email }) => {
   const [url, setUrl] = useState('')
   const [error, setError] = useState('Enter the URL')
   const onSubmit = async () => {
      const uri = await getUri(email)
      const res = await addUserUrl(uri, url)
      if (res?.error) {
         setError(res.error)
      } else {
         setClose()
         window.location.reload()
      }
   }

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      if (isValidUrl(value)) {
         setUrl(value)
         setError('')
      } else {
         setUrl(value)
         setError('Invalid URL')
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
         <div className="flex flex-col justify-center w-full gap-4">
            <div className="flex w-full gap-2">
               <input
                  className="w-full bg-white text-black rounded-full outline-none text-xl font-semibold  py-2 px-6 border-2"
                  type="text"
                  placeholder="URL"
                  value={url}
                  autoFocus
                  onChange={onChange}
               />

               <button
                  className="bg text-black px-6 py-2 rounded-full border-y-2"
                  onClick={onSubmit}
               >
                  Add
               </button>
            </div>
            {error ? (
               <p className="text-red-600 pl-4 block">{error}</p>
            ) : (
               <p className="text-green-600 pl-4 block">Valid URL</p>
            )}
         </div>
      </div>
   )
}

export default AddUrl
