'use server'
import mongoConnect from '@/libs/mongoConnect'
import { UrlModel } from '@/models/url'

export default async function getAllUrls(uri: string) {
   mongoConnect()

   try {
      const page = await UrlModel.find({ uri: uri }).sort({ createdAt: -1 })
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
