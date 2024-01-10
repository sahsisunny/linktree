'use server'
import mongoConnect from '@/libs/mongoConnect'
import { getPageByUri, getUriByEmailModel } from '@/models/uriModel'

// GET
export async function getUriByEmail(email: string) {
   mongoConnect()

   try {
      const page = await getUriByEmailModel(email)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function getUriByUri(uri: string) {
   mongoConnect()

   try {
      const page = await getPageByUri(uri)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
