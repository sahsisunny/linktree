'use server'
import { getUriByEmail } from '@/models/page'
import mongoose from 'mongoose'

export default async function getUri(session: any) {
   const email = session?.user?.email
   mongoose.connect(process.env.MONGO_URL!)
   try {
      const page = await getUriByEmail(email!)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
