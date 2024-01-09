import Link from 'next/link'
import React from 'react'

function MobilePreview({ uri }: { uri: string }) {
   return (
      <div className="phone fixed top-25 xl:right-20 right-6 md:flex hidden rounded-[32px] w-[25%] h-[80vh] ">
         {uri ? (
            <iframe
               src={uri}
               width="100%"
               height="100%"
               title={`${uri} preview`}
               sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
               className="rounded-[25px]"
            ></iframe>
         ) : (
            <div className="flex flex-col  rounded-[25px] bg justify-center items-center w-full h-full">
               <h1 className="text-2xl font-bold">Create a Username first</h1>
               <Link
                  href="/"
                  className="bg-transparent underline p-2 text-2xl "
               >
                  Home
               </Link>
            </div>
         )}
      </div>
   )
}

export default MobilePreview
