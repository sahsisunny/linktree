import typedClientPromise from '@/libs/mongoClient'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const authOptions: NextAuthOptions = {
   adapter: MongoDBAdapter(typedClientPromise),
   secret: process.env.SECRET!,

   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
   ],
}

export default authOptions
