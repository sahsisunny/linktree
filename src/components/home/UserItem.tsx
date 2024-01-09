import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import DummyProfile from '../../../public/user.webp'

type Props = {
   name: string
   uri: string
   image: string
}
const UserItem = ({ name, uri, image }: Props) => {
   return (
      <div className="duration-300 hover:-rotate-0 -rotate-12 group  overflow-hidden rounded-2xl h-52 w-72 bg p-5 flex flex-col items-start gap-4">
         <div className="text-gray-50 w-full">
            <span className="font-bold text-3xl">{name}</span>
            <p className="text-xs hidden">Frontend Developer</p>
         </div>
         <Link
            className="duration-300 hover:bg-black border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800 px-3 py-2 flex flex-row items-center gap-3"
            href={`/${uri}`}
            passHref
            target="_blank"
         >
            @{uri}
         </Link>

         <div className="group-hover:scale-125 duration-200 absolute bottom-2 right-2 w-[110px] z-5 rounded-full">
            <Image
               src={image ? image : DummyProfile}
               alt={name}
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
