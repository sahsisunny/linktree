'use client'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { signIn } from 'next-auth/react'

export const LoginWithGoogle = () => {
   return (
      <button
         onClick={() => signIn('google')}
         className="flex items-center justify-center gap-3 shadow bg-white text-black rounded-md w-full text-center py-4 hover:shadow-lg"
      >
         <FcGoogle className="text-2xl" />

         <span>Sign in with Google</span>
      </button>
   )
}
