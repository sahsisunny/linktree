import mongoose from 'mongoose'

export default async function mongoConnect() {
   const MONGO_URL = process.env.MONGO_URL
   if (!MONGO_URL) {
      throw new Error('Invalid/Missing environment variable: "MONGO_URL"')
   }
   mongoose.connect(MONGO_URL)
   try {
      return mongoose
   } catch (error) {
      console.log(error)
      return
   }
}
