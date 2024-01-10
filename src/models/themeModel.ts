import { Document, model, models, Schema, UpdateQuery } from 'mongoose'

import { LinkListStyle, StyleType } from '@/types/theme'

const themeSchema = new Schema<StyleType & Document>({
   uriId: { type: String, required: true },
   background: { type: String, default: 'bg' },
   fontStyle: { type: String },
   fontName: { type: String },
   linkListStyle: {
      background: { type: String, default: 'bg' },
      type: { type: String, default: 'round' },
      border: { type: String, default: 'border-2' },
   },
   profileStyle: { type: String },
})

export const StyleModel = models?.Style || model('Style', themeSchema)

export const getStyleByUriId = async (uriId: string) => {
   return await StyleModel.findOne({ uriId })
}

const createUpdateQuery = (
   updates: Partial<StyleType>,
): UpdateQuery<StyleType> => {
   return { $set: updates }
}

export const updateStyle = async (
   uriId: string,
   updates: Partial<StyleType>,
) => {
   return await StyleModel.updateOne({ uriId }, createUpdateQuery(updates))
}

export const updateBackground = async (uriId: string, background: string) => {
   return await updateStyle(uriId, { background })
}

export const updateFontStyle = async (uriId: string, fontStyle: string) => {
   return await updateStyle(uriId, { fontStyle })
}

export const updateFontName = async (uriId: string, fontName: string) => {
   return await updateStyle(uriId, { fontName })
}

export const updateLinkListStyle = async (
   uriId: string,
   linkListStyle: LinkListStyle,
) => {
   return await updateStyle(uriId, { linkListStyle })
}

export const updateProfileStyle = async (
   uriId: string,
   profileStyle: string,
) => {
   return await updateStyle(uriId, { profileStyle })
}

// create with default values
export const createStyle = async (uriId: string) => {
   return await StyleModel.create({
      uriId,
      background: 'bg',
      fontStyle: 'font-sans',
      fontName: 'sans',
      linkListStyle: {
         background: 'bg',
         type: 'round',
         border: 'border-none',
      },
      profileStyle: 'default',
   })
}
