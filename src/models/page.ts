import { Schema, models, model } from 'mongoose'

const pageSchema = new Schema(
   {
      uri: { type: String, required: true, min: 1, unique: true },
   },
   { timestamps: true },
)

export const PageModel = models?.Page || model('Page', pageSchema)
