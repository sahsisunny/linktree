import { Schema, models, model } from 'mongoose'

const UrlSchema = new Schema(
   {
      url: { type: String },
      uri: { type: String },
      title: { type: String },
      addedAt: { type: Date, default: Date.now() },
      updatedAt: { type: Date, default: Date.now() },
      shortUrl: { type: String, unique: true },
      order: { type: Number },
      isPinned: { type: Boolean },
      isDeleted: { type: Boolean },
      isArchived: { type: Boolean },
   },
   { timestamps: true },
)

export const UrlModel = models?.Url || model('Url', UrlSchema)

export async function getUrlByShortUrl(shortUrl: string) {
   return await UrlModel.findOne({ shortUrl: shortUrl })
}
export async function getUrlByUrl(url: string) {
   return await UrlModel.findOne({ url: url })
}

export async function deleteUrl(url: string) {
   return await UrlModel.deleteOne({ url: url })
}

export async function updateUrl(url: string, newUrl: string) {
   return await UrlModel.updateOne({ url: url }, { url: newUrl })
}

export const updateTitle = async (url: string, newTitle: string) => {
   return await UrlModel.updateOne({ url: url }, { title: newTitle })
}

export const updateOrder = async (url: string, newOrder: number) => {
   return await UrlModel.updateOne({ url: url }, { order: newOrder })
}

export const updatePinned = async (url: string, newPinned: boolean) => {
   return await UrlModel.updateOne({ url: url }, { isPinned: newPinned })
}

export const updateDeleted = async (url: string, newDeleted: boolean) => {
   return await UrlModel.updateOne({ url: url }, { isDeleted: newDeleted })
}

export const updateArchived = async (url: string, newArchived: boolean) => {
   return await UrlModel.updateOne({ url: url }, { isArchived: newArchived })
}
