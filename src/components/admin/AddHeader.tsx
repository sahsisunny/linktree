'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { LuImage } from 'react-icons/lu'

import getUri from '@/actions/getUri'

interface Props {
   setClose: () => void
   email: string
}

const AddHeader: React.FC<Props> = ({ setClose, email }) => {
   const [image, setImage] = useState<File | null>(null)
   const [fullName, setFullName] = useState('')
   const [bio, setBio] = useState('')

   const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
         setImage(files[0])
      }
   }

   const onSubmit = async () => {
      const uri = await getUri(email)
      console.log({
         uri: uri,
         image: image,
         fullName: fullName,
         bio: bio,
      })
   }

   return (
      <div className="flex justify-center flex-col bg shadow-2xl border-x-2 text-black p-4 gap-4 rounded-xl">
         <div className="flex justify-between w-full">
            <h1 className="text-2xl font-bold">Add Header</h1>
            <button
               className="bg-transparent text-gray-200 p-2 text-2xl rounded-full hover:bg-gray-200 hover:text-black"
               onClick={setClose}
            >
               <IoCloseSharp />
            </button>
         </div>
         <div className="flex flex-col justify-center w-full gap-4">
            <div className="flex justify-center w-full gap-4">
               <div className="flex justify-center w-full gap-4">
                  <label
                     htmlFor="image"
                     className="flex flex-col justify-center items-center rounded-full  text-black  w-[150px] h-[150px] cursor-pointer border-2"
                  >
                     <input
                        type="file"
                        id="image"
                        className="hidden"
                        onChange={onImageChange}
                     />

                     {image ? (
                        <Image
                           src={URL.createObjectURL(image)}
                           alt="profile image"
                           className="w-[150px] h-[150px] object-cover rounded-full"
                           width={150}
                           height={150}
                        />
                     ) : (
                        <LuImage className="text-[110px] text-white " />
                     )}
                  </label>
               </div>
            </div>

            <input
               className="w-full  text-black text-center rounded-full outline-none font-semibold py-2 px-6 border-2"
               type="text"
               placeholder="Full Name"
               value={fullName}
               onChange={(e) => setFullName(e.target.value)}
            />

            <textarea
               className="w-full bg-white text-black rounded-lg outline-none py-2 px-6 no-scrollbar "
               placeholder="Enter something about yourself"
               value={bio}
               onChange={(e) => setBio(e.target.value)}
            />

            <button
               className="bg-transparent px-6 py-2 rounded-full border-y-2 hover:bg-blue-500 hover:text-white"
               onClick={onSubmit}
            >
               Add
            </button>
         </div>
      </div>
   )
}

export default AddHeader
