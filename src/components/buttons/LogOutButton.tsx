'use client'
import React from 'react'
import { signOut } from 'next-auth/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const LogOutButton = () => {
   return (
      <button
         onClick={() => signOut()}
         className="flex items-center gap-2 justify-center hover:shadow p-2 border rounded-md"
      >
         <span>Sign Out</span>
         <FontAwesomeIcon icon={faRightFromBracket} className="h-6" />
      </button>
   )
}

export default LogOutButton
