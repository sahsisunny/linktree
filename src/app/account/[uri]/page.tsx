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
      <div className="flex flex-col items-center justify-center py-2">
         <h1 className="text-3xl font-bold">Account</h1>
         <p className="text-xl">Username: {username}</p>
      </div>
   )
}

export default AccountPage
