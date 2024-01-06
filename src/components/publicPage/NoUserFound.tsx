import Link from 'next/link'
import React from 'react'
import { FaLink } from 'react-icons/fa'

interface Props {
   uri: string
}

const NoUserFound: React.FC<Props> = ({ uri }) => {
   return (
      <section className="flex flex-col gap-4 h-screen justify-center items-center sm:p-20 p-4 w-full">
         <Link
            href="/"
            className="flex items-center gap-2 text-6xl font-semibold text-white"
         >
            <FaLink className="text-5xl " />
            <span>LinkHub</span>
         </Link>
         <h1 className="text-4xl font-semibold text-center animate-pulse">
            Oops! No User Found
         </h1>
         <p className="text-lg text-center">
            The user with username{' '}
            <span className="font-semibold text-2xl">
               {'"'}
               {uri}
               {'"'}
            </span>{' '}
            does not exist. Please check the username and try again.
         </p>
         <p className="text-lg text-center">
            If you are the owner of this username, please{' '}
            <Link
               href="/login"
               className="text-white underline cursor-pointer font-semibold hover:text-gray-200"
            >
               login
            </Link>{' '}
            to your account.
         </p>
         <Link
            href="/login"
            className="text-white underline cursor-pointer font-semibold hover:text-gray-200"
         >
            Create Your LinkHub Now
         </Link>
      </section>
   )
}

export default NoUserFound
