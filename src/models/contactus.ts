import { Document, model, Schema } from 'mongoose'

interface ContactUs {
   name: string
   email: string
   message: string
   date: Date
}

const contactUsSchema = new Schema({
   name: { type: String, required: true },
   email: { type: String, required: true },
   message: { type: String },
   date: { type: Date, default: Date.now },
})

export const ContactUsModel = model<ContactUs & Document>(
   'ContactUs',
   contactUsSchema,
)
