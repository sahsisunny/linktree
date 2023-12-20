'use server'

import { PageModel, getPageByEmail } from '@/models/page'
import authOptions from '@/utils/authOptions'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'

export default async function grabUsername(username: string) {
   const session = await getServerSession(authOptions)
   const email = session?.user?.email
   if (!email) {
      throw new Error('Invalid/Missing session: "email"')
   }
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      const page = await getPageByEmail(email)
      if (page) {
         console.log(`Page already exists for ${username} with email ${email}`)
         return JSON.parse(JSON.stringify(page))
      }
      console.log(`Creating page for ${username} with email ${email}`)
      const pageDoc = await PageModel.create({ uri: username, email: email })
      console.log(pageDoc)
      return JSON.parse(JSON.stringify(pageDoc))
   } catch (error) {
      console.log(error)
      return { error: 'Something went wrong' }
   }
}
