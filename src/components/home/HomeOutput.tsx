'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { LuCopy, LuExternalLink } from 'react-icons/lu'

import LogoImage from '../../../public/LinkHub.webp'
import GithubLabel from '@/components/Label/Github'
import useToast from '@/hooks/useToast'
import Tooltip from '@/components/Tooltip'
import Toast from '../Toast'

interface HomeOutputProps {
   uri: string
}

function HomeOutput({ uri }: HomeOutputProps) {
   const { showToast, toasts } = useToast()

   const copyToClipboard = (text: string, event?: React.MouseEvent) => {
      event?.preventDefault()
      navigator.clipboard.writeText(text)
      showToast('Copied to clipboard', 3000, 'success')
   }

   return (
      <section className="flex flex-col justify-center items-center text-center lg:p-20 py-28 px-6  gap-6 w-full sm:h-screen">
         <GithubLabel />
         <h1 className="sm:text-5xl text-4xl font-bold">
            Your one link for everything
         </h1>
         <h2 className="sm:text-xl text-md font-normal">
            Share your profile, social media, and more with a single link.
         </h2>
         <div className="max-w-lg w-full p-3 flex items-center bg text-black justify-between rounded-[64px] transition-all shadow-2xl">
            <div className="flex items-center gap-x-2">
               <Image
                  src={LogoImage}
                  width={40}
                  height={40}
                  alt="LinkHub Logo"
                  className="rounded-full cursor-pointer "
               />
               <span className="lg:text-2xl text-lg tracking-wide ">
                  linkhub.io/{uri}
               </span>
            </div>
            <div className="flex items-center gap-x-2">
               <Tooltip text="Copy">
                  <button
                     className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-base h-10  w-10  hover:border-2"
                     aria-label="Copy to clipboard"
                     onClick={() =>
                        copyToClipboard(`${window.location.origin}/${uri}`)
                     }
                  >
                     <LuCopy />
                  </button>
               </Tooltip>
               <Tooltip text="Open in new tab">
                  <Link
                     className="border font-medium text-center transition-all ease-in duration-75 disabled:opacity-50 disabled:cursor-not-allowed flex items-center leading-120 select-none rounded-full justify-center text-base h-10  w-10  hover:border-2"
                     aria-label="Open in new tab"
                     href={`/${uri}`}
                     target="_blank"
                  >
                     <LuExternalLink />
                  </Link>
               </Tooltip>
            </div>
         </div>
         {toasts.map((toast) => (
            <Toast key={toast.id} {...toast} />
         ))}{' '}
      </section>
   )
}

export default HomeOutput
