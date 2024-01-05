import LinkItem from '@/components/publicPage/LinkItem'
import ProfileSection from '@/components/publicPage/ProfileSection'
import getAllUrls from '@/actions/getAllUrls '
import uriExist from '@/actions/uriExist'
import React from 'react'
import { Url } from '@/types/url'
import NoUserFound from '@/components/publicPage/NoUserFound'

async function PublicPage({ params }: { params: { uri: string } }) {
   const uri = params.uri
   const uriExists = await uriExist(uri)
   if (!uriExists) {
      return <NoUserFound uri={uri} />
   }
   const urls = await getAllUrls(uri)

   return (
      <section className="flex flex-col gap-4 justify-center items-center sm:p-20 p-4 w-full">
         <ProfileSection
            username="sahsisunny"
            bio="I'm a Software Engineer"
            image="https://avatars.githubusercontent.com/u/70854507?v=4"
         />

         {urls.map((url: Url) => (
            <LinkItem key={url.url} url={url.url} title={url.title} />
         ))}
      </section>
   )
}

export default PublicPage
