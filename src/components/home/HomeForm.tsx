'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

import grabUsername from '@/actions/grabUsername'
import uriExist from '@/actions/uriExist'
import debounce from '@/utils/debounce'

import LogoImage from '../../../public/LinkHub.webp'
import GithubLabel from '../Label/Github'

interface Props {
   email?: string
}
const HomeForm = ({ email }: Props) => {
   const [uri, setUri] = React.useState('')
   const [error, setError] = React.useState({
      text: 'Enter the username 👆',
      type: '',
   })

   const debounceUriExist = debounce(
      async (uri: string) => {
         const result = await uriExist(uri)
         if (result?.uri === uri) {
            setError({ text: 'Oops! Username is taken 😔 ', type: 'error' })
         } else if (uri.length < 1) {
            setError({ text: 'Enter a username', type: 'error' })
         } else {
            setError({
               text: '🎉🎉 Congrats! Username is available 🎉🎉',
               type: 'success',
            })
            setUri(uri)
         }
      },
      500,
      false,
   )

   const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const trimmedInput = e.target.value.trim().toLowerCase()
      debounceUriExist(trimmedInput)
   }

   const asyncGrabUsername = async (uri: string) => {
      await grabUsername(uri)
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!uri) {
         setError({ text: 'Please enter a username', type: 'error' })
      }
      try {
         if (!email) {
            localStorage.setItem('uri', uri)
            await signIn('google', {
               callbackUrl: `/login`,
            })
         } else {
            await grabUsername(uri)
         }
      } catch (error) {
         console.error(error)
      }
   }

   React.useEffect(() => {
      const localUri = localStorage.getItem('uri')
      if (localUri) {
         asyncGrabUsername(localUri)
         localStorage.removeItem('uri')
         window.location.reload()
      }
   }, [])

   return (
      <section className="flex flex-col justify-center items-center text-center lg:p-20 py-28 px-6  gap-6 w-full sm:h-screen">
         <GithubLabel />
         <h1 className="sm:text-5xl text-4xl font-bold">
            Your one link for everything
         </h1>
         <h2 className="sm:text-xl text-md font-normal">
            Ready to simplify your online presence? Enter your username to get
            started.
         </h2>
         <form onSubmit={handleSubmit} className="relative text-white">
            <div className="max-w-lg w-full p-3 flex items-center bg-white text-black gap-x-2 justify-between rounded-[64px] border border-primaryBorder focus-within:border-gray-gray5 focus-within:shadow-focus-border transition-all">
               <div className="flex items-center gap-x-2">
                  <div>
                     <Image
                        src={LogoImage}
                        width={40}
                        height={40}
                        alt="LinkHub Logo"
                        className="rounded-full cursor-pointer bg-white"
                     />
                  </div>
                  <div className="flex items-center">
                     <span className="lg:text-2xl text-lg ">linkhub.io/</span>
                     <div className="relative">
                        <input
                           required
                           placeholder="username"
                           maxLength={20}
                           className="w-full outline-none font-normal lg:text-2xl  text-lg placeholder:font-normal bg-transparent"
                           onChange={onChangeHandler}
                           autoFocus
                           style={{ textTransform: 'lowercase' }}
                        />
                     </div>
                  </div>
               </div>
               <div>
                  <button
                     className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-base h-10  w-10   hover:bg-gray-300"
                     type="submit"
                     aria-label="Submit"
                  >
                     <FaArrowRight />
                  </button>
               </div>
            </div>

            <p
               className={`text-sm  mt-2 text-center duration-500 ${
                  error.type === 'error' ? 'text-red-500' : 'text-green-500'
               }`}
            >
               {error.text}
            </p>
         </form>
      </section>
   )
}

export default HomeForm
