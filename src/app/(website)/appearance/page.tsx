import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

import { getUriByEmail } from '@/actions/uriCrud'
import MobilePreview from '@/components/admin/MobilePreview'
import LinkBackground from '@/components/appreance/LinkBackground'
import LinkTypeStyle from '@/components/appreance/LinkTypeStyle'
import PageBackground from '@/components/appreance/PageBackground'
import authOptions from '@/utils/authOptions'
import { createTheme, getThemeByUriId } from '@/actions/themeCrud'

async function AppearancePage() {
   const sesion = await getServerSession(authOptions)

   if (!sesion) {
      redirect('/login')
   }
   const email = sesion?.user?.email || ''
   const uri = await getUriByEmail(email)
   const theme = await getThemeByUriId(uri?._id)
   if (!theme) {
      await createTheme(uri?._id)
   }

   return (
      <section className="flex justify-start min-h-screen xl:px-20 p-6 mt-8">
         <div className="flex flex-col gap-4 md:w-[70%] w-full">
            <PageBackground uriId={uri?._id} />
            <LinkBackground uriId={uri?._id} />
            <LinkTypeStyle uriId={uri?._id} />
         </div>
         <MobilePreview uri={uri.uri} />
      </section>
   )
}

export default AppearancePage

export function generateMetadata() {
   return {
      title: `Appearance - LinkHub`,
      description: `Change your appearance`,
   }
}
