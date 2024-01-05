'use server'
import mongoConnect from '@/libs/mongoConnect'
import { updateTitle } from '@/models/url'

export async function updateUrlTitle(url: string, title: string) {
   mongoConnect()
   try {
      const page = await updateTitle(url, title)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
