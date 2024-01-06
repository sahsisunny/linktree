import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

import authOptions from '@/utils/authOptions'

async function AppearancePage() {
   const sesion = await getServerSession(authOptions)
   const username = sesion?.user?.name

   if (!sesion) {
      redirect('/login')
   }
   return (
      <section className="flex flex-col justify-center h-screen  p-20"></section>
   )
}

export default AppearancePage

export function generateMetadata() {
   return {
      title: `Account - LinkHub`,
      description: `Account page for LinkHub.`,
   }
}
