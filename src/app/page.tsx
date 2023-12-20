'use server'
import getUri from '@/actions/getUri'
import HomeForm from '@/components/home/HomeForm'
import HomeOutput from '@/components/home/HomeOutput'
import authOptions from '@/utils/authOptions'
import { getServerSession } from 'next-auth'

export default async function HomePage() {
   const session = await getServerSession(authOptions)
   const uri = await getUri(session)
   return (
      <section className="pt-32">
         <div className="max-w-md mb-6">
            <h1 className="text-6xl font-bold">
               Your one link <br />
               for everything
            </h1>
            <h2 className="text-gray-500  text-xl mt-6">
               Share your profile, social media, and more with a single link.
            </h2>
         </div>
         {!uri && <HomeForm />}
         {!!uri && <HomeOutput uri={uri} />}
      </section>
   )
}
