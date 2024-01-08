import React from 'react'
import mobilePic from '/public/mobile.png'
import Image from 'next/image'

function ShowCase() {
   const ImageCom = () => {
      return (
         <div className="phone  rounded-[22px] w-full h-full ">
            <Image
               src={mobilePic}
               width={500}
               height={500}
               alt="mobile"
               className=" h-full w-full rounded-[22px]"
               quality={100}
            />
         </div>
      )
   }
   return (
      <div className="w-full flex justify-center items-center mt-20 lg:mt-0 lg:w-1/2">
         <div className="card-group">
            <div className="card little-card">
               <ImageCom />
            </div>
            <div className="card big-card">
               <ImageCom />
            </div>
            <div className="card little-card">
               <ImageCom />
            </div>
            <div className="card big-card">
               <ImageCom />
            </div>
            <div className="card little-card">
               <ImageCom />
            </div>
            <div className="card big-card">
               <ImageCom />
            </div>
            <div className="card little-card">
               <ImageCom />
            </div>
            <div className="card big-card">
               <ImageCom />
            </div>
         </div>
      </div>
   )
}

export default ShowCase
