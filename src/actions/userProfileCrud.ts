'use server'
import mongoConnect from '@/libs/mongoConnect'
import { getPageByEmail, getPageByUri, updateProfile } from '@/models/uriModel'

export async function updateUserProfile(
   uri: string,
   bio?: string,
   name?: string,
   image?: string,
) {
   mongoConnect()

   try {
      const page = await updateProfile(uri, bio, name, image)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.error(error)
      return
   }
}

export async function getProfileDetails(uri: string) {
   mongoConnect()
   try {
      const page = await getPageByUri(uri)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.error(error)
      return
   }
}

export async function getProfileDetailsByEmail(email: string) {
   mongoConnect()
   try {
      const page = await getPageByEmail(email)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.error(error)
      return
   }
}
