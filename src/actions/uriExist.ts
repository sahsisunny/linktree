'use server'
import mongoConnect from '@/libs/mongoConnect'
import { getUriByUri } from '@/models/uriModel'

export default async function uriExist(uri: string) {
   mongoConnect()

   try {
      const page = await getUriByUri(uri)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
