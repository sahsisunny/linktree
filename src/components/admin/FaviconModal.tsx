import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { IoCloseSharp } from 'react-icons/io5'
import { LuImage } from 'react-icons/lu'
import { imageUpload } from '@/actions/uploadImage'

import { updateUserUrlFavicon } from '@/actions/urlCrud'
import { MdOutlineModeEdit } from 'react-icons/md'

interface FaviconModalProps {
   onClose: () => void
   url: string
   favicon: string
}

const FaviconModal: React.FC<FaviconModalProps> = ({
   onClose,
   url,
   favicon,
}) => {
   const [image, setImage] = useState<File | string>(
      favicon || `https://www.google.com/s2/favicons?domain=${url}&sz=256`,
   )
   const [error, setError] = React.useState({
      text: 'Select an image 👆',
      type: '',
   })
   const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (files && files.length > 0) {
         const selectedFile = files[0]

         if (!selectedFile.type.includes('image')) {
            setError({ text: 'Please select an image', type: 'error' })

            return
         }
         const imageObjectURL = URL.createObjectURL(selectedFile)
         const img = new window.Image()
         img.onload = () => {
            const ratio = img.width / img.height
            if (Math.abs(ratio - 1) > 0.1) {
               setError({
                  text: 'Please select an image with a 1:1 ratio',
                  type: 'error',
               })
            } else if (selectedFile.size > 1024 * 1024) {
               setError({
                  text: 'Please select an image smaller than 1MB',
                  type: 'error',
               })
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
            onClose()
            window.location.reload()
         }
      }
      onClose()
   }
   const onImageClick = () => {
      const input = document.getElementById('image')
      input?.click()
   }

   const modalRef = useRef<HTMLDivElement>(null)

   const handleClickOutside = (event: MouseEvent) => {
      if (
         modalRef.current &&
         !modalRef.current.contains(event.target as Node)
      ) {
         onClose()
      }
   }

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
         ) {
            onClose()
         }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
         document.removeEventListener('mousedown', handleClickOutside)
      }
   }, [onClose])

   return (
      <dialog
         className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-50 z-50"
         data-testid="login-modal"
      >
         <div
            ref={modalRef}
            className="bg p-8 rounded-md w-[330px] relative flex flex-col justify-center items-center  "
         >
            <button
               className="absolute top-2 right-2 text-white"
               onClick={onClose}
            >
               <IoCloseSharp style={{ fontSize: '1.5em' }} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-white">Edit Favicon</h2>

            <div className="flex flex-col justify-center w-full gap-4">
               <div className="relative flex justify-center w-full gap-4">
                  <label
                     htmlFor="faviconImage"
                     className="relative flex flex-col justify-center items-center rounded-full text-black w-[150px] h-[150px] cursor-pointer"
                  >
                     <input
                        accept="image/*"
                        type="file"
                        id="faviconImage"
                        className="hidden"
                        onChange={onImageChange}
                     />
                     {image ? (
                        <>
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
                           <span
                              className="relative bottom-[30px] left-[45px] bg-gray-700 text-white p-1 rounded-full hover:bg-gray-500"
                              onClick={onImageClick}
                           >
                              <MdOutlineModeEdit />
                           </span>
                        </>
                     ) : (
                        <LuImage className="text-[110px] text-white " />
                     )}
                  </label>
               </div>
               <p
                  className={`text-sm  mt-2 text-center duration-500 ${
                     error.type === 'error' ? 'text-red-500' : 'text-green-500'
                  }`}
               >
                  {error.text}
               </p>
               <span className="flex flex-col gap-2 text-center">
                  <p className="text-sm text-gray-300">
                     Image must be a square (1:1 ratio)
                  </p>
                  <p className="text-sm text-gray-300">
                     Image size must be less than 1MB
                  </p>
               </span>
               <button
                  className="bg-transparent px-6 py-2 rounded-full border-y-2 hover:bg-blue-500 hover:text-white"
                  onClick={onSubmit}
               >
                  Upload
               </button>
            </div>
         </div>
      </dialog>
   )
}

export default FaviconModal
