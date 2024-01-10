'use server'
import { getServerSession } from 'next-auth'

import getUri from '@/actions/getUri'
import HomeForm from '@/components/home/HomeForm'
import HomeOutput from '@/components/home/HomeOutput'
import authOptions from '@/utils/authOptions'

async function HeroSection() {
   const session = await getServerSession(authOptions)
   const email = session?.user?.email
   if (!email) return <HomeForm />
   const uri = await getUri(email)
   return (
      <>
         {!uri && <HomeForm email={email} />}
         {!!uri && <HomeOutput uri={uri} />}
      </>
   )
}

export default HeroSection
