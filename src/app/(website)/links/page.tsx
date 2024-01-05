import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

import getAllUrls from '@/actions/getAllUrls '
import getUri from '@/actions/getUri'
import AddButton from '@/components/admin/AddButton'
import EditLinks from '@/components/admin/EditLinks'
import MobilePreview from '@/components/admin/MobilePreview'
import { Url } from '@/types/url'
import authOptions from '@/utils/authOptions'

async function Links() {
   const sesion = await getServerSession(authOptions)
   const email = sesion?.user?.email || ''
   const uri = await getUri(email)
   const urls = await getAllUrls(uri)

   if (!sesion) {
      redirect('/login')
   }
   return (
      <section className="flex justify-start min-h-screen xl:px-20 p-6 mt-8">
         <div className="flex flex-col gap-4 md:w-[70%] w-full">
            <AddButton email={email} />
            {urls.map((url: Url, index: number) => (
               <EditLinks key={index} url={url.url} title={url.title} />
            ))}
         </div>
         <MobilePreview uri={uri} />
      </section>
   )
}

export default Links
