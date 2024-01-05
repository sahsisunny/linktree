import getAllUsers from '@/actions/getAllUsers'
import HeroSection from '@/components/home/HeroSection'
import HomeUserSection from '@/components/home/HomeUserSection'
import { Users } from '@/types/user.s'

export default async function HomePage() {
   const users = (await getAllUsers()) as Users
   return (
      <>
         <HeroSection />
         <HomeUserSection users={users} />
      </>
   )
}
