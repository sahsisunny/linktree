'use server'
import mongoConnect from '@/libs/mongoConnect'
import { getUriByUri } from '@/models/uriModel'

export default async function uriExist(searchUri: string) {
   mongoConnect()

   try {
      const page = await getUriByUri(searchUri)
      const { uri } = page
      return { uri }
   } catch (error) {
      console.log(error)
      return
   }
}
