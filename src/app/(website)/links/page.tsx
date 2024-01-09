import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

import getUri from '@/actions/getUri'
import {
   getUserAllUrls,
   getUserArchivedUrls,
   getUserDeletedUrls,
} from '@/actions/urlCrud'
import AddButton from '@/components/admin/AddButton'
import EditLinks from '@/components/admin/EditLinks'
import MobilePreview from '@/components/admin/MobilePreview'
import { Url } from '@/types/url'
import authOptions from '@/utils/authOptions'

async function Links() {
   const sesion = await getServerSession(authOptions)
   const email = sesion?.user?.email || ''
   const uri = await getUri(email)
   const urls = await getUserAllUrls(uri)
   const archivedUrls = await getUserArchivedUrls(uri)
   const deletedUrls = await getUserDeletedUrls(uri)

   if (!sesion) {
      redirect('/login')
   }
   return (
      <section className="flex justify-start min-h-screen xl:px-20 p-6 mt-8">
         <div className="flex flex-col gap-4 md:w-[70%] w-full">
            <AddButton email={email} />
            {urls.map((url: Url, index: number) => (
               <EditLinks
                  key={index}
                  url={url.url}
                  title={url.title}
                  isArchive={url.isArchived}
                  isDeleted={url.isDeleted}
                  totalUrls={urls.length}
                  order={url.order}
               />
            ))}
            <h1
               className={`${
                  archivedUrls.length > 0 ? 'block' : 'hidden'
               } text-2xl font-bold text-center w-full mt-8`}
            >
               Archived Links
            </h1>
            {archivedUrls.map((url: Url, index: number) => (
               <EditLinks
                  key={index}
                  url={url.url}
                  title={url.title}
                  isArchive={url.isArchived}
                  isDeleted={url.isDeleted}
                  totalUrls={urls.length}
                  order={url.order}
               />
            ))}
            <h1
               className={`${
                  deletedUrls.length > 0 ? 'block' : 'hidden'
               } text-2xl font-bold text-center w-full mt-8`}
            >
               Deleted Links
            </h1>
            {deletedUrls.map((url: Url, index: number) => (
               <EditLinks
                  key={index}
                  url={url.url}
                  title={url.title}
                  isArchive={url.isArchived}
                  isDeleted={url.isDeleted}
                  totalUrls={urls.length}
                  order={url.order}
               />
            ))}
         </div>
         <MobilePreview uri={uri} />
      </section>
   )
}

export default Links

export function generateMetadata() {
   return {
      title: `Links - LinkHub`,
      description: `Add, edit and remove links from your LinkHub.`,
   }
}
