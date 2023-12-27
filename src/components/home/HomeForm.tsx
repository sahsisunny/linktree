'use client'
import grabUsername from '@/actions/grabUsername'
import { signIn } from 'next-auth/react'
import React from 'react'

function HomeForm() {
   const [error, setError] = React.useState('')
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const input = form.querySelector('input')
      const username = input?.value
      if (!username) {
         setError('Username is required')
      }
      if (username) {
         const result = await grabUsername(username)
         if (result.uri) {
            const uri = result.uri
            await signIn('google', {
               callbackUrl: `/account/${uri}`,
            })
         } else {
            setError('Username is taken')
         }
      }
   }

   return (
      <>
         <form
            onSubmit={handleSubmit}
            className="inline-flex items-center  shadow-gray-500/20   text-black"
         >
            <span className="bg-white py-4 pl-4">linktree.io/</span>
            <input
               type="text"
               className="py-4 outline-none "
               placeholder="username"
            />
            <button type="submit" className="bg-blue-500  py-4 px-6 text-white">
               Join Free
            </button>
         </form>
         {error && (
            <p className=" text-red-500 text-sm font-semibold mt-2 border">
               {error}
            </p>
         )}
      </>
   )
}

export default HomeForm
