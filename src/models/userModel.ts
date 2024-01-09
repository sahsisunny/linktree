import { Document, model, Schema } from 'mongoose'

interface User {
   _id: string
   email: string
   name: string
   image: string
}

const userSchema = new Schema<User & Document>({
   email: { type: String, required: true },
   name: { type: String, required: true },
   image: { type: String, required: true },
})

export const UserModel = model<User & Document>('User', userSchema)

export const getAllUsers = async () => {
   return await UserModel.find()
}
