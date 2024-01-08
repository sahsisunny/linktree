'use client'
import { signIn } from 'next-auth/react'
import React from 'react'

import grabUsername from '@/actions/grabUsername'
import uriExist from '@/actions/uriExist'

function HomeForm() {
   const [error, setError] = React.useState('')
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const form = e.currentTarget
      const input = form.querySelector('input')
      const uri = input?.value
      if (!uri) {
         setError('Username is required')
      }
      if (uri) {
         const result = await uriExist(uri)
         if (result?.uri === uri) {
            setError('Username is taken')
         } else {
            try {
               const userProfile = await grabUsername(uri)
               if (userProfile) {
                  window.location.href = `/${userProfile.uri}`
               }
            } catch (error) {
               console.log(error)
            }
            await signIn('google', {
               callbackUrl: `/login`,
            })
         }
      }
   }

   return (
      <section className="flex flex-col justify-center sm:p-20 p-6 gap-6">
         <h1 className="sm:text-6xl text-5xl font-bold">
            Your one link for everything
         </h1>
         <h2 className="text-xl">
            Ready to simplify your online presence? Enter your username to get
            started.
         </h2>
         <form
            onSubmit={handleSubmit}
            className="flex items-center  shadow-gray-500/20 text-black sm:flex-row flex-col rounded-lg sm:rounded-none sm:gap-0 gap-4"
         >
            <div className="flex border-r border-gray-300 rounded-lg sm:rounded-none">
               <span className="bg-white py-4 pl-4 rounded-l-lg sm:rounded-none">
                  linkhub.io/
               </span>
               <input
                  type="text"
                  className="py-4 outline-none rounded-r-lg sm:rounded-none"
                  placeholder="username"
                  maxLength={20}
               />
            </div>
            {error && (
               <p className=" sm:hidden block text-red-500 text-sm font-semibold  animate-bounce duration-500">
                  {error}
               </p>
            )}
            <button
               type="submit"
               className="bg-blue-500  py-4 px-6 text-white rounded-lg sm:rounded-none"
            >
               Join Free
            </button>
         </form>
         {error && (
            <p className=" sm:block hidden text-red-500 text-sm font-semibold mt-2 animate-bounce duration-500">
               {error}
            </p>
         )}
      </section>
   )
}

export default HomeForm
