'use client'
import React from 'react'
import { signOut } from 'next-auth/react'

const LogOutButton = () => {
   return (
      <button
         onClick={() => signOut()}
         className="flex items-center gap-2 justify-center hover:shadow p-2 border rounded-md"
      >
         <span>Sign Out</span>
      </button>
   )
}

export default LogOutButton
