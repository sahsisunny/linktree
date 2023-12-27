'use client'
import Link from 'next/link'
import React from 'react'

interface HomeOutputProps {
   uri: string
}

function HomeOutput({ uri }: HomeOutputProps) {
   return (
      <div className="inline-flex items-center  shadow-gray-500/20   text-black">
         <span className="bg-white py-4 pl-4">linktree.io/</span>
         <input
            type="text"
            className=" bg-white py-4  border-none outline-none focus:ring-0 focus:border-none"
            placeholder="username"
            value={uri}
            readOnly
         />
         <Link
            className="bg-blue-500  py-4 px-6 text-white"
            href={`/account/${uri}`}
         >
            Go to profile
         </Link>
      </div>
   )
}

export default HomeOutput
