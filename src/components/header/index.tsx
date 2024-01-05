import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { IoShapesOutline } from 'react-icons/io5'
import { LuListTree } from 'react-icons/lu'

import authOptions from '@/utils/authOptions'

import LogOutButton from '../buttons/LogOutButton'

async function Header() {
   const session = await getServerSession(authOptions)
   return (
      <header className="w-full sticky top-10 z-50 xl:px-20 px-6">
         <div className="w-full mx-auto flex justify-between px-4 bg-white py-2 rounded-[35px]  ">
            <div className="flex gap-6 ">
               <Link
                  href="/"
                  className="flex items-center gap-2 text-md font-semibold text-blue-500"
               >
                  <FaLink className="text-2xl" />

                  <span>LinkTree</span>
               </Link>
               <nav className="md:flex items-center text-black font-semibold   text-sm hidden ">
                  {session ? (
                     <>
                        <Link
                           href="/links"
                           className="flex gap-2 py-3 px-5 hover:bg-gray-100 rounded-[10px]"
                        >
                           <LuListTree className="text-xl" />
                           Links
                        </Link>
                        <Link
                           href="/contact"
                           className="flex gap-2 py-3 px-5 hover:bg-gray-100 rounded-[10px]"
                        >
                           <IoShapesOutline className="text-xl" />
                           Appearance
                        </Link>
                        <Link
                           href="/projects"
                           className="flex gap-2 py-3 px-5 hover:bg-gray-100 rounded-[10px]"
                        >
                           <IoMdSettings className="text-xl" />
                           Settings
                        </Link>
                     </>
                  ) : (
                     <>
                        <Link
                           href="/about"
                           className=" py-3 px-5 hover:bg-gray-100 rounded-[10px]"
                        >
                           About
                        </Link>
                        <Link
                           href="/contact"
                           className=" py-3 px-5 hover:bg-gray-100 rounded-[10px]"
                        >
                           Contact
                        </Link>
                        <Link
                           href="/projects"
                           className=" py-3 px-5 hover:bg-gray-100 rounded-[10px]"
                        >
                           Projects
                        </Link>
                     </>
                  )}
               </nav>
            </div>
            {session ? (
               <nav className="flex gap-4 text-sm  items-center">
                  <Image
                     src={session.user?.image || '/images/default-avatar.png'}
                     width={45}
                     height={30}
                     alt={session.user?.name || 'User image'}
                     className="rounded-full cursor-pointer"
                  />
                  <LogOutButton />
               </nav>
            ) : (
               <nav className="flex gap-2 text-sm text-black items-center">
                  <Link
                     href="/login"
                     className=" py-3 px-5 hover:bg-gray-200 rounded-[10px] bg-gray-100"
                  >
                     Sign in
                  </Link>
               </nav>
            )}
         </div>
      </header>
   )
}

export default Header
