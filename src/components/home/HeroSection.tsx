'use server'
import getUri from '@/actions/getUri'

import authOptions from '@/utils/authOptions'
import { getServerSession } from 'next-auth'
import HomeForm from '@/components/home/HomeForm'
import HomeOutput from '@/components/home/HomeOutput'

async function HeroSection() {
   const session = await getServerSession(authOptions)
   const email = session?.user?.email
   if (!email) return null
   const uri = await getUri(email)
   return (
      <section className="flex flex-col justify-center h-screen sm:p-20 p-6">
         <h1 className="sm:text-6xl text-4xl font-bold">
            Your one link <br />
            for everything
         </h1>
         <h2 className="text-xl mt-6">
            Share your profile, social media, and more with a single link.
         </h2>
         {!uri && <HomeForm />}
         {!!uri && <HomeOutput uri={uri} />}
      </section>
   )
}

export default HeroSection
