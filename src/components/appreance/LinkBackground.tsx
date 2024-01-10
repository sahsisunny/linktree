'use client'
import React from 'react'

import { updateLinkTheme } from '@/actions/themeCrud'
import { GradientName } from '@/constants'

interface LinkBackgroundProps {
   uriId: string
}
function LinkBackground({ uriId }: LinkBackgroundProps) {
   const updateLinkThemeHandler = async (background: string) => {
      await updateLinkTheme(uriId, background)
      window.location.reload()
   }
   return (
      <>
         <h1 className="text-2xl font-bold text-center w-full mt-8">
            Link Background
         </h1>
         <div className="flex flex-wrap justify-center gap-4"></div>
         <div className="flex flex-wrap justify-center gap-4">
            {GradientName.map((gradient, index) => (
               <div
                  key={index}
                  className={`sm:w-1/2 w-full h-[80px]  border-2 ${gradient} flex justify-between items-center p-4 cursor-pointer`}
                  onClick={() => updateLinkThemeHandler(gradient)}
               >
                  <div className="w-16 h-16  rounded-full bg-gray-400"></div>
                  <p className=" text-center text-xl">
                     {gradient.toUpperCase()}
                  </p>
                  <div className="w-10 h-5 rounded-full bg-gray-400"></div>
               </div>
            ))}
         </div>
      </>
   )
}

export default LinkBackground
