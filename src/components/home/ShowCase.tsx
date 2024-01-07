import React from 'react'
import mobilePic from '/public/mobile.png'
import Image from 'next/image'
import Link from 'next/link'

function ShowCase() {
   const ImageCom = ({ uri }: { uri?: string }) => {
      return (
         <div className="phone  rounded-[32px] w-full h-full ">
            <Image
               src={mobilePic}
               width={500}
               height={500}
               alt="mobile"
               className=" h-full w-full rounded-[32px]"
               quality={100}
            />
         </div>
      )
   }
   return (
      <div className="w-full flex justify-center items-center h-screen hidden">
         <div className="card-group">
            <div className="card little-card">
               <ImageCom uri="sunny" />
            </div>
            <div className="card big-card">
               <ImageCom uri="dinesh" />
            </div>
            <div className="card little-card">
               <ImageCom uri="micky" />
            </div>
            <div className="card big-card">
               <ImageCom uri="sunny" />
            </div>
            <div className="card little-card">
               <ImageCom uri="micky" />
            </div>
            <div className="card big-card">
               <ImageCom uri="dinesh" />
            </div>
            <div className="card little-card">
               <ImageCom uri="sunny" />
            </div>
            <div className="card big-card">
               <ImageCom uri="micky" />
            </div>
         </div>
      </div>
   )
}

export default ShowCase
