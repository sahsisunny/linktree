'use server'
import { UrlModel, getUrlByUrl } from '@/models/url'
import mongoose from 'mongoose'
import { getDomainFromUrl } from '@/utils/getDomainFromUrl'

export default async function grabUserProfile(uri: string, url: string) {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   const urlTitle = await getDomainFromUrl(url)
   if (!urlTitle) {
      return {
         error: 'Invalid URL',
      }
   }
   mongoose.connect(MONGO_URL)
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
      return
   }
}
