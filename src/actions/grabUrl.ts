'use server'
import { UrlModel, getUrlByUrl } from '@/models/url'
import mongoose from 'mongoose'
import { getPageTitleWithPuppeteer } from '@/utils/getTitleFromUrl'

export default async function grabUrl(email: string, url: string) {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   const urlTitle = await getPageTitleWithPuppeteer(url)
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
      console.log(`Creating page for ${url} with email ${email}`)
      const pageDoc = await UrlModel.create({
         email: email,
         url: url,
         title: urlTitle,
         shortUrl: url,
         order: 0,
         isPinned: false,
         isDeleted: false,
         isArchived: false,
      })
      console.log(JSON.parse(JSON.stringify(pageDoc)))

      return {
         message: 'Page created successfully',
         data: JSON.parse(JSON.stringify(pageDoc)),
      }
   } catch (error) {
      console.log(error)
      return
   }
}
