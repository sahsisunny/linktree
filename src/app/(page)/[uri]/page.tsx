import React from 'react'

import { getProfileDetails } from '@/actions/updateUrls'
import uriExist from '@/actions/uriExist'
import LinkItem from '@/components/publicPage/LinkItem'
import NoUserFound from '@/components/publicPage/NoUserFound'
import ProfileSection from '@/components/publicPage/ProfileSection'
import { Url } from '@/types/url'
import { getUserAllUrls } from '@/actions/urlCrud'

export default async function PublicPage({
   params,
}: {
   params: { uri: string }
}) {
   const uri = params.uri
   const uriExists = await uriExist(uri)
   if (!uriExists) {
      return <NoUserFound uri={uri} />
   }
   const urls = await getUserAllUrls(uri)
   const profileData = await getProfileDetails(uri)

   return (
      <section className="flex flex-col gap-4 justify-center items-center sm:p-20 p-4 w-full">
         <ProfileSection
            uri={profileData.uri}
            name={profileData.name}
            bio={profileData.bio}
            image={profileData.image}
         />

         {urls.map((url: Url) => (
            <LinkItem key={url.url} url={url.url} title={url.title} />
         ))}
      </section>
   )
}

export function generateMetadata({ params }: { params: { uri: string } }) {
   return {
      title: `${
         params.uri.charAt(0).toUpperCase() + params.uri.slice(1)
      }'s Links`,
   }
}
