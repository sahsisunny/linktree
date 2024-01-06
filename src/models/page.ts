import { model, models, Schema } from 'mongoose'

const pageSchema = new Schema(
   {
      uri: { type: String, required: true, min: 1, unique: true },
      email: { type: String, required: true, min: 1, unique: true },
      image: { type: String, required: true, min: 1 },
      name: { type: String, required: true, min: 1 },
      bio: { type: String },
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

export async function getUriByUri(uri: string) {
   return await PageModel.findOne({ uri: uri })
}

export async function updateProfile(
   uri: string,
   bio?: string,
   name?: string,
   image?: string,
) {
   const updateFields: { [key: string]: string } = {}

   if (bio !== undefined && bio !== '') {
      updateFields.bio = bio
   }

   if (name !== undefined && name !== '') {
      updateFields.name = name
   }

   if (image !== undefined && image !== '') {
      updateFields.image = image
   }
   console.log(updateFields)

   return await PageModel.updateOne({ uri: uri }, { $set: updateFields })
}

// get page by uri
export async function getPageByUri(uri: string) {
   return await PageModel.findOne({ uri: uri })
}
