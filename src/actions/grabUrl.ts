'use server'
import mongoConnect from '@/libs/mongoConnect'
import { getUrlByUrl, UrlModel } from '@/models/url'
import { getDomainFromUrl } from '@/utils/urlUtils'

export default async function grabUrl(uri: string, url: string) {
   mongoConnect()

   const urlTitle = await getDomainFromUrl(url)
   if (!urlTitle) {
      return {
         error: 'Invalid URL',
      }
   }
   try {
      const page = await getUrlByUrl(url)
      if (page) {
         return {
            error: 'Page already exists',
            data: JSON.parse(JSON.stringify(page)),
         }
      }
      const pageDoc = await UrlModel.create({
         url: url,
         uri: uri,
         title: urlTitle,
         shortUrl: url,
         order: 0,
         isPinned: false,
         isDeleted: false,
         isArchived: false,
      })
      return {
         message: 'Page created successfully',
         data: JSON.parse(JSON.stringify(pageDoc)),
      }
   } catch (error) {
      console.log(error)
      return
   }
}
