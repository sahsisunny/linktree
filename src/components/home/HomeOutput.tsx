'use client'
import Link from 'next/link'
import React from 'react'

interface HomeOutputProps {
   uri: string
}

function HomeOutput({ uri }: HomeOutputProps) {
   return (
      <div className="bg-gray-200 inline-flex items-center shadow-lg shadow-gray-500/20">
         <span className="bg-gray-200 py-4 pl-4">linktree.io/</span>
         <input
            type="text"
            className="py-4 bg-gray-200 border-none outline-none focus:ring-0 focus:border-none"
            placeholder="username"
            value={uri}
            readOnly
         />
         <Link
            className="bg-blue-500 text-white py-4 px-6"
            href={`/account/${uri}`}
         >
            Go to profile
         </Link>
      </div>
   )
}

export default HomeOutput
