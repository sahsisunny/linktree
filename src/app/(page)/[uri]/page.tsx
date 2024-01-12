import React from 'react'

import { getThemeByUriId } from '@/actions/themeCrud'
import { getUriByUri } from '@/actions/uriCrud'
import { getUserAllUrls } from '@/actions/urlCrud'
import { getProfileDetails } from '@/actions/userProfileCrud'
import LinkItem from '@/components/publicPage/LinkItem'
import NoUserFound from '@/components/publicPage/NoUserFound'
import ProfileSection from '@/components/publicPage/ProfileSection'
import { StyleType } from '@/types/theme'
import { Url } from '@/types/url'

export default async function PublicPage({
   params,
}: {
   params: { uri: string }
}) {
   const uriParam = params.uri
   const uriPage = await getUriByUri(uriParam)

   if (!uriPage?.uri) {
      return <NoUserFound uri={uriParam} />
   }
   const urls = await getUserAllUrls(uriPage.uri)
   const profileData = await getProfileDetails(uriPage.uri)
   let theme = {} as StyleType
   try {
      theme = await getThemeByUriId(uriPage._id)
   } catch (error) {
      console.error(error)
   }

   return (
      <main
         className={`flex flex-col gap-4 justify-center min-h-screen items-center sm:p-20 p-4 w-full ${theme?.background}`}
      >
         <ProfileSection
            uri={profileData.uri}
            name={profileData.name}
            bio={profileData.bio}
            image={profileData.image}
         />

         {urls.map((url: Url) => (
            <LinkItem
               key={url.url}
               url={url.url}
               favicon={url.favicon}
               title={url.title}
               LinkListStyle={theme?.linkListStyle}
               background={theme?.background}
            />
         ))}
      </main>
   )
}

export function generateMetadata({ params }: { params: { uri: string } }) {
   return {
      title: `${
         params.uri.charAt(0).toUpperCase() + params.uri.slice(1)
      }'s Links`,
   }
}
