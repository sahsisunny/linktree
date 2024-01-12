import React, { useState } from 'react'
import Image from 'next/image'
import { IoCloseSharp } from 'react-icons/io5'
import { LuImage } from 'react-icons/lu'
import { imageUpload } from '@/actions/uploadImage'

import { updateUserUrlFavicon } from '@/actions/urlCrud'
import useToast from '@/hooks/useToast'
import Toast from '../Toast'

interface FaviconModalProps {
   setClose: () => void
   url: string
   favicon: string
}

const FaviconModal: React.FC<FaviconModalProps> = ({
   setClose,
   url,
   favicon,
}) => {
   const [image, setImage] = useState<File | string>(
      favicon || `https://www.google.com/s2/favicons?domain=${url}&sz=256`,
   )
   const { showToast, toasts } = useToast()

   const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
         const selectedFile = files[0]

         if (!selectedFile.type.includes('image')) {
            showToast('Please select an image file', 3000, 'info')

            return
         }
         const imageObjectURL = URL.createObjectURL(selectedFile)
         const img = new window.Image()
         img.onload = () => {
            const ratio = img.width / img.height
            if (Math.abs(ratio - 1) > 0.1) {
               showToast(
                  'Please select an image with a 1:1 ratio',
                  3000,
                  'info',
               )
            } else if (selectedFile.size > 1024 * 1024) {
               showToast(
                  'Please select an image smaller than 1MB',
                  3000,
                  'info',
               )
            } else {
               setImage(selectedFile)
            }
         }
         img.src = imageObjectURL
      }
   }

   const onSubmit = async () => {
      if (image) {
         const imageUrl = await imageUpload(image as File)
         const faviconUrl = await updateUserUrlFavicon(url, imageUrl)
         if (faviconUrl) {
            setClose()
            window.location.reload()
         }
      }
      setClose()
   }

   return (
      <div className="flex justify-center flex-col p-4 gap-4 rounded-xl">
         <div className="flex justify-between w-full">
            <h1 className="text-2xl font-bold">Upload Favicon</h1>
            <button
               className="bg-transparent text-gray-200 p-2 text-2xl rounded-full hover:bg-gray-200 hover:text-black"
               onClick={setClose}
            >
               <IoCloseSharp />
            </button>
         </div>
         <div className="flex flex-col justify-center w-full gap-4">
            <div className="flex justify-center w-full gap-4">
               <label
                  htmlFor="faviconImage"
                  className="flex flex-col justify-center items-center rounded-full text-black w-[150px] h-[150px] cursor-pointer border-2"
               >
                  <input
                     accept="image/*"
                     type="file"
                     id="faviconImage"
                     className="hidden"
                     onChange={onImageChange}
                  />
                  {image ? (
                     <Image
                        src={
                           typeof image === 'string'
                              ? image
                              : URL.createObjectURL(image)
                        }
                        alt="Slect a favicon"
                        className="w-[150px] h-[150px] object-cover rounded-full"
                        width={150}
                        height={150}
                     />
                  ) : (
                     <LuImage className="text-[110px] text-white " />
                  )}
               </label>
            </div>
            <button
               className="bg-transparent px-6 py-2 rounded-full border-y-2 hover:bg-blue-500 hover:text-white"
               onClick={onSubmit}
            >
               Upload
            </button>
         </div>
         {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
         ))}
      </div>
   )
}

export default FaviconModal
