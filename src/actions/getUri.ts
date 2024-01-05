'use server'
import mongoConnect from '@/libs/mongoConnect'
import { getUriByEmail } from '@/models/page'

export default async function getUri(email: string) {
   mongoConnect()

   try {
      const page = await getUriByEmail(email)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
