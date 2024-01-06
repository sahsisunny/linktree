import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

import authOptions from '@/utils/authOptions'

async function SettingsPage() {
   const session = await getServerSession(authOptions)
   const username = session?.user?.name

   if (!session) {
      redirect('/login')
   }

   return (
      <section className="flex flex-col justify-center h-screen p-20">
         <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
         <div className="mb-4">
            <p>Welcome, {username}!</p>
            {/* Display other user details as needed */}
         </div>
         <button className="bg-red-500 text-white px-4 py-2 rounded">
            Delete My Account
         </button>
      </section>
   )
}

export default SettingsPage

export function generateMetadata() {
   return {
      title: `Account - LinkHub`,
      description: `Account page for LinkHub.`,
   }
}
