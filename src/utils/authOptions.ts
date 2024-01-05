import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import typedClientPromise from '@/libs/mongoClient'
import { MongoDBAdapter } from '@auth/mongodb-adapter'

let clientId = process.env.GOOGLE_CLIENT_ID
let clientSecret = process.env.GOOGLE_CLIENT_SECRET

if (!clientId || !clientSecret) {
   throw new Error(
      'Please define the GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET environment variables',
   )
}

const authOptions: NextAuthOptions = {
   adapter: MongoDBAdapter(typedClientPromise),
   secret: process.env.SECRET,

   providers: [
      GoogleProvider({
         clientId,
         clientSecret,
      }),
   ],
}

export default authOptions
