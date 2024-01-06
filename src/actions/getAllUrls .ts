'use server'
import mongoConnect from '@/libs/mongoConnect'
import { UrlModel } from '@/models/url'

export default async function getAllUrls(uri: string) {
   mongoConnect()

   try {
      const page = await UrlModel.find({ uri: uri, isArchived: false })
         .sort({ order: 1 })
         .exec()

      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
