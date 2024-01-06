'use server'
import mongoConnect from '@/libs/mongoConnect'
import { archiveUrl, deleteUrl, getUrlByUrl, UrlModel } from '@/models/url'
import { getDomainFromUrl } from '@/utils/urlUtils'

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

export async function addUserUrl(uri: string, url: string) {
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
            error: 'URL already exists',
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

export async function getUserAllUrls(uri: string) {
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
