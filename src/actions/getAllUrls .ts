'use server'
import mongoose from 'mongoose'

import { UrlModel } from '@/models/url'

export default async function getAllUrls(uri: string) {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      const page = await UrlModel.find({ uri: uri })
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
