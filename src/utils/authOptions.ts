import typedClientPromise from '@/libs/mongoClient'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from 'next-auth/providers/github'

const authOptions: NextAuthOptions = {
   adapter: MongoDBAdapter(typedClientPromise),

   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID!,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      }),
      GithubProvider({
         clientId: process.env.GITHUB_CLIENT_ID!,
         clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      }),
   ],
}

export default authOptions
