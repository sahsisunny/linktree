import { model, models, Schema } from 'mongoose'

const UrlSchema = new Schema({
   url: { type: String },
   favicon: { type: String },
   uriId: { type: String, required: true },
   uri: { type: String, required: true },
   title: { type: String },
   addedAt: { type: Date, default: Date.now() },
   updatedAt: { type: Date, default: Date.now() },
   shortUrl: { type: String, unique: true },
   order: { type: Number },
   isPinned: { type: Boolean },
   isDeleted: { type: Boolean },
   isArchived: { type: Boolean },
})

export const UrlModel = models?.Url || model('Url', UrlSchema)

export async function getUrlByShortUrl(shortUrl: string) {
   return await UrlModel.findOne({ shortUrl: shortUrl })
}
export async function getUrlByUrl(url: string) {
   return await UrlModel.findOne({ url: url })
}

export async function deleteUrl(url: string, isDeleted: boolean) {
   return await UrlModel.updateOne({ url: url }, { isDeleted: isDeleted })
}

export async function deleteUrlForever(url: string) {
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

export const archiveUrl = async (url: string, newArchived: boolean) => {
   return await UrlModel.updateOne({ url: url }, { isArchived: newArchived })
}

export const updateFaviconModel = async (url: string, newFavicon: string) => {
   return await UrlModel.updateOne({ url: url }, { favicon: newFavicon })
}
