import authOptions from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'

async function AccountPage() {
   const sesion = await getServerSession(authOptions)
   const username = sesion?.user?.name

   if (!sesion) {
      redirect('/login')
   }
   return (
      <section className="flex flex-col justify-center h-screen  p-20">
         <h1 className="text-3xl font-bold">Account</h1>
         <p className="text-xl">Username: {username}</p>
      </section>
   )
}

export default AccountPage
