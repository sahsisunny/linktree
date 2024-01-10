'use client'
import React from 'react'

import { updateLinkType } from '@/actions/themeCrud'
import { LinkStyleType } from '@/constants'

interface LinkTypeStyleProps {
   uriId: string
}
function LinkTypeStyle({ uriId }: LinkTypeStyleProps) {
   const updateLinkTypeHandler = async (type: string) => {
      await updateLinkType(uriId, type)
      window.location.reload()
   }
   return (
      <>
         <h1 className="text-2xl font-bold text-center w-full mt-8">
            Link Style
         </h1>
         <div className="flex flex-wrap justify-center gap-4"></div>
         <div className="flex flex-wrap justify-center gap-4">
            {LinkStyleType.map((type, index) => (
               <div
                  key={index}
                  className={`sm:w-1/2 w-full  h-[80px]  border-2 ${type} flex justify-between items-center p-4 cursor-pointer`}
                  onClick={() => updateLinkTypeHandler(type)}
               >
                  <div className="w-16 h-16 border-2 rounded-full"></div>
                  <p className=" text-center text-xl">{type.toUpperCase()}</p>
                  <div className="w-10 h-5 border-2 rounded-full"></div>
               </div>
            ))}
         </div>
      </>
   )
}

export default LinkTypeStyle
