'use server'

import { getServerSession } from 'next-auth'

import mongoConnect from '@/libs/mongoConnect'
import { getPageByEmail, PageModel } from '@/models/page'
import authOptions from '@/utils/authOptions'

export default async function grabUsername(username: string) {
   const session = await getServerSession(authOptions)
   const email = session?.user?.email
   const image = session?.user?.image
   const name = session?.user?.name
   if (!email) {
      throw new Error('Invalid/Missing session: "email"')
   }
   mongoConnect()

   try {
      const page = await getPageByEmail(email)
      if (page) {
         return JSON.parse(JSON.stringify(page))
      }
      const pageDoc = await PageModel.create({
         uri: username,
         email: email,
         image: image,
         name: name,
      })
      return JSON.parse(JSON.stringify(pageDoc))
   } catch (error) {
      return { error: 'Something went wrong' }
   }
}
