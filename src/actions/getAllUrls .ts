'use server'
import { UrlModel } from '@/models/url'
import mongoose from 'mongoose'

export default async function getAllUrls(email: string) {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      const page = await UrlModel.find({ email: email })
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
