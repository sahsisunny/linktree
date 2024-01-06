'use client'
import Link from 'next/link'
import React from 'react'

interface HomeOutputProps {
   uri: string
}

function HomeOutput({ uri }: HomeOutputProps) {
   return (
      <section className="flex flex-col justify-center h-screen sm:p-20 p-6">
         <h1 className="sm:text-6xl text-4xl font-bold">
            Your one link <br />
            for everything
         </h1>
         <h2 className="text-xl mt-6">
            Share your profile, social media, and more with a single link.
         </h2>
         <div className="flex items-center  shadow-gray-500/20 text-black sm:flex-row flex-col mt-10">
            <div className="flex border-r border-gray-300">
               <span className="bg-white py-4 pl-4 rounded-l-lg sm:rounded-none">
                  LinkHub.io/
               </span>
               <input
                  type="text"
                  className=" bg-white py-4  border-none outline-none focus:ring-0 focus:border-none rounded-r-lg sm:rounded-none"
                  placeholder="username"
                  value={uri}
                  readOnly
               />
            </div>

            <Link
               className="bg-blue-500  py-4 px-6 text-white rounded-lg sm:rounded-none mt-5 sm:mt-0"
               href={`/${uri}`}
            >
               Go to profile
            </Link>
         </div>
      </section>
   )
}

export default HomeOutput
