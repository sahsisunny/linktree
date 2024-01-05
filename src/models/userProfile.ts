import { Schema, models, model } from 'mongoose'

const UserProfileSchema = new Schema(
   {
      uri: { type: String },
      image: { type: String },
      fullName: { type: String },
      bio: { type: String },
   },
   { timestamps: true },
)

export const UserProfileModel =
   models?.UserProfile || model('UserProfile', UserProfileSchema)

export async function getUserProfileByUri(uri: string) {
   return await UserProfileModel.findOne({ uri: uri })
}
