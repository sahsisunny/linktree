'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { FaSignOutAlt } from 'react-icons/fa'

const LogOutButton = () => {
   return (
      <button
         onClick={() => signOut()}
         className="flex items-center gap-2 justify-center hover:shadow p-2 text-2xl  text-black"
      >
         <FaSignOutAlt />
      </button>
   )
}

export default LogOutButton
