import { Schema, models, model } from 'mongoose'

const pageSchema = new Schema(
   {
      uri: { type: String, required: true, min: 1, unique: true },
      email: { type: String, required: true, min: 1, unique: true },
   },
   { timestamps: true },
)

export const PageModel = models?.Page || model('Page', pageSchema)

export async function getPageByEmail(email: string) {
   return await PageModel.findOne({ email: email })
}

export async function getUriByEmail(email: string) {
   const page = await getPageByEmail(email)
   return page?.uri
}
