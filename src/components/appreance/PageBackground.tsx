'use client'
import React from 'react'

import { updateBackground } from '@/actions/themeCrud'
import { GradientName } from '@/constants'

interface PageBackgroundProps {
   uriId: string
}
function PageBackground({ uriId }: PageBackgroundProps) {
   const updateBackgroundHandler = async (background: string) => {
      await updateBackground(uriId, background)
      window.location.reload()
   }
   return (
      <>
         <h1 className="text-2xl font-bold text-center w-full mt-8">
            Background
         </h1>
         <div className="flex flex-wrap justify-center gap-4">
            {GradientName.map((gradient) => (
               <div
                  key={gradient}
                  className={`w-[200px] h-[300px] rounded-[28px] border-2 cursor-pointer ${gradient}`}
                  onClick={() => updateBackgroundHandler(gradient)}
               ></div>
            ))}
         </div>
      </>
   )
}

export default PageBackground
