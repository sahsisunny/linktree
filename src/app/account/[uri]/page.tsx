import authOptions from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import { redirect } from 'next/navigation'

type SearchParams = {
   username?: string
}

async function AccountPage({ searchParams }: { searchParams: SearchParams }) {
   const sesion = await getServerSession(authOptions)
   const username: string = searchParams.username || ''

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
