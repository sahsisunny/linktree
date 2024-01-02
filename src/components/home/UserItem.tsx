import Image from 'next/image'
import React from 'react'

const UserItem = () => {
   return (
      <div className="duration-300 hover:-rotate-0 -rotate-12 group  overflow-hidden rounded-2xl h-52 w-72 bg p-5 flex flex-col items-start gap-4">
         <div className="text-gray-50 w-full">
            <span className="font-bold text-3xl">Sunny Sahsi</span>
            <p className="text-xs">Frontend Developer</p>
         </div>
         <button className="duration-300 hover:bg-black border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3">
            @sahsisunny
         </button>

         <div className="group-hover:scale-125 duration-200 absolute bottom-2 right-2 w-[110px] z-5 rounded-full">
            <Image
               src="https://avatars.githubusercontent.com/u/70854507?v=4"
               alt="avatar"
               width={200}
               height={200}
               layout="responsive"
               className="rounded-full"
            />
         </div>
      </div>
   )
}

export default UserItem
