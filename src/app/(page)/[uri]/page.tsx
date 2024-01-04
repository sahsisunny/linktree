import LinkItem from '@/components/publicPage/LinkItem'
import ProfileSection from '@/components/publicPage/ProfileSection'
import getAllUrls from '@/actions/getAllUrls '
import React from 'react'
import { Url } from '@/types/url'

async function PublicPage() {
   const uri = 'sunny'
   if (!uri) {
      return <div>404</div>
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
