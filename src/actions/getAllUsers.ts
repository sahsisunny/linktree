'use server'
import mongoConnect from '@/libs/mongoConnect'
import { PageModel } from '@/models/uriModel'

export default async function getAllUsers() {
   mongoConnect()

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
      console.error(error)
      return
   }
}
