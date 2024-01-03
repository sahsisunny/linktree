import AddButton from '@/components/admin/AddButton'
import EditLinks from '@/components/admin/EditLinks'
import MobilePreview from '@/components/admin/MobilePreview'
import React from 'react'
import authOptions from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

async function Links() {
   const sesion = await getServerSession(authOptions)
   const email = sesion?.user?.email || ''

   if (!sesion) {
      redirect('/login')
   }
   return (
      <section className="flex justify-start h-screen xl:px-20 p-6 mt-8">
         <div className="flex flex-col gap-4 md:w-[70%] w-full">
            <AddButton email={email} />
            <EditLinks />
            <EditLinks />
            <EditLinks />
         </div>
         <MobilePreview />
      </section>
   )
}

export default Links
