'use server'
import { PageModel } from '@/models/page'
import mongoose from 'mongoose'

export default async function getAllUsers() {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      const page = await PageModel.find()
      return page.map((p) => {
         return {
            id: p._id,
            uri: p.uri,
            image: p.image,
            name: p.name,
         }
      })
   } catch (error) {
      console.log(error)
      return
   }
}
