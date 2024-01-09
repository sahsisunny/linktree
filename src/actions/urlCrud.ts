'use server'
import mongoConnect from '@/libs/mongoConnect'
import {
   archiveUrl,
   deleteUrl,
   getUrlByUrl,
   UrlModel,
   updateTitle,
   updateUrl,
   updateOrder,
   deleteUrlForever,
} from '@/models/urlModel'
import { getDomainFromUrl } from '@/utils/urlUtils'

// GET

export async function getUserAllUrls(uri: string) {
   mongoConnect()

   try {
      const page = await UrlModel.find({
         uri: uri,
         isArchived: false,
         isDeleted: false,
      }).sort({
         order: 1,
      })

      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function getUserArchivedUrls(uri: string) {
   mongoConnect()

   try {
      const page = await UrlModel.find({
         uri: uri,
         isArchived: true,
         isDeleted: false,
      })
         .sort({ order: 1 })
         .exec()

      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function getUserDeletedUrls(uri: string) {
   mongoConnect()

   try {
      const page = await UrlModel.find({ uri: uri, isDeleted: true })
         .sort({ order: 1 })
         .exec()

      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

// DELETE
export async function deleteUserUrlForever(url: string) {
   mongoConnect()
   try {
      const page = await deleteUrlForever(url)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function deleteUserAllUrls(uri: string) {
   mongoConnect()
   try {
      const page = await UrlModel.deleteMany({ uri: uri })
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

// UPDATE
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

export async function deleteUserUrl(url: string, isDeleted: boolean) {
   mongoConnect()
   try {
      const page = await deleteUrl(url, isDeleted)
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

export async function updateUserUrlTitle(url: string, title: string) {
   mongoConnect()
   try {
      const page = await updateTitle(url, title)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function updateUserUrl(url: string, newUrl: string) {
   mongoConnect()
   try {
      const page = await updateUrl(url, newUrl)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function updateUserUrlOrder(url: string, order: number) {
   mongoConnect()
   try {
      const page = await updateOrder(url, order)
      return JSON.parse(JSON.stringify(page))
   } catch (error) {
      console.log(error)
      return
   }
}
