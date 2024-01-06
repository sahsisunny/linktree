'use server'
import mongoConnect from '@/libs/mongoConnect'
import { archiveUrl, deleteUrl } from '@/models/url'

export async function deleteUserUrl(url: string) {
   mongoConnect()
   try {
      const page = await deleteUrl(url)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function archiveUserUrl(url: string, archived: boolean) {
   mongoConnect()
   try {
      const page = await archiveUrl(url, archived)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
