'use server'

import { PageModel } from '@/models/page'
import mongoose from 'mongoose'

export default async function grabUsername(username: string) {
   mongoose.connect(process.env.MONGO_URL!)
   try {
      const pageDoc = await PageModel.create({ uri: username })
      return JSON.parse(JSON.stringify(pageDoc))
   } catch (error) {
      console.log(error)
      return { error: 'Something went wrong' }
   }
}
