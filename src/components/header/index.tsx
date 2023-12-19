import React from 'react'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import LogOutButton from '../buttons/LogOutButton'
import authOptions from '@/utils/authOptions'

async function Header() {
   const session = await getServerSession(authOptions)
   return (
      <header className="bg-white border-b-2 py-4">
         <div className="max-w-4xl flex justify-between mx-auto px-6">
            <div className="flex gap-6 ">
               <Link
                  href="/"
                  className="flex items-center gap-2 text-md font-semibold text-blue-500"
               >
                  <FontAwesomeIcon icon={faLink} className="h-4" />

                  <span>LinkTree</span>
               </Link>
               <nav className="flex items-center  gap-4 text-gray-500 text-sm">
                  <Link href="/about">About</Link>
                  <Link href="/contact">Contact</Link>
                  <Link href="/projects">Projects</Link>
               </nav>
            </div>
            {session ? (
               <nav className="flex gap-4 text-sm text-slate-500 items-center">
                  <Image
                     src={session.user?.image || '/images/default-avatar.png'}
                     width={30}
                     height={30}
                     alt={session.user?.name || 'User image'}
                     className="rounded-full"
                  />
                  <span className="font-semibold">
                     {session.user?.name?.split(' ')[0]}
                  </span>
                  <LogOutButton />
               </nav>
            ) : (
               <nav className="flex gap-4 text-sm text-slate-500 items-center">
                  <Link href="/login">Sign in</Link>
                  <Link href="/login">Create Account</Link>
               </nav>
            )}
         </div>
      </header>
   )
}

export default Header
