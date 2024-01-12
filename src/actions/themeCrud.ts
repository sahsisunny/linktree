'use server'
import mongoConnect from '@/libs/mongoConnect'
import {
   createStyleModel,
   getStyleByUriIdModel,
   updateBackgroundModel,
   updateLinkBackgroundModel,
   updateLinkTypeModel,
} from '@/models/themeModel'

export async function getThemeByUriId(uriId: string) {
   mongoConnect()
   try {
      const theme = await getStyleByUriIdModel(uriId)
      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.error(error)
      return
   }
}

export async function createTheme(uriId: string) {
   mongoConnect()
   try {
      const theme = await createStyleModel(uriId)
      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.error(error)
      return
   }
}

export async function updateBackground(uriId: string, background: string) {
   mongoConnect()
   try {
      const theme = await updateBackgroundModel(uriId, background)
      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.error(error)
      return
   }
}

export async function updateLinkTheme(uriId: string, background: string) {
   mongoConnect()
   try {
      const theme = await updateLinkBackgroundModel(uriId, background)
      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.error(error)
      return
   }
}

export async function updateLinkType(uriId: string, type: string) {
   mongoConnect()
   try {
      const theme = await updateLinkTypeModel(uriId, type)
      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.error(error)
      return
   }
}
