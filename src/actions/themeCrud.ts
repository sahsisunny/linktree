'use server'
import mongoConnect from '@/libs/mongoConnect'
import { createStyle, getStyleByUriId } from '@/models/themeModel'

export async function getThemeByUriId(uriId: string) {
   mongoConnect()
   try {
      const theme = await getStyleByUriId(uriId)
      console.log(JSON.parse(JSON.stringify(theme)))

      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.log(error)
      return
   }
}

export async function createTheme(uriId: string) {
   mongoConnect()
   try {
      const theme = await createStyle(uriId)
      console.log(JSON.parse(JSON.stringify(theme)))

      return JSON.parse(JSON.stringify(theme))
   } catch (error) {
      console.log(error)
      return
   }
}
