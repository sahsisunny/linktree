'use server'
import { getUriByEmail } from '@/models/page'
import mongoose from 'mongoose'

export default async function getUri(email: string) {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      const page = await getUriByEmail(email)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
