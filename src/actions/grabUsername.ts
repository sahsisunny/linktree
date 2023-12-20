'use server'

import { PageModel, getPageByEmail } from '@/models/page'
import authOptions from '@/utils/authOptions'
import mongoose from 'mongoose'
import { getServerSession } from 'next-auth'

export default async function grabUsername(username: string) {
   const session = await getServerSession(authOptions)
   console.log(session)
   const email = session?.user?.email
   mongoose.connect(process.env.MONGO_URL!)
   try {
      const page = await getPageByEmail(email!)
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
