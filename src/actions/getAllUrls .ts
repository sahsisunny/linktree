'use server'
import { UrlModel } from '@/models/url'
import mongoose from 'mongoose'

export default async function getAllUrls(uri: string) {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      const page = await UrlModel.find({ uri: uri })
      console.log(JSON.parse(JSON.stringify(page)))
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
