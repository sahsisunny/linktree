import getAllUsers from '@/actions/getAllUsers'
import HeroSection from '@/components/home/HeroSection'
import HomeUserSection from '@/components/home/HomeUserSection'
import ShowCase from '@/components/home/ShowCase'
import { Users } from '@/types/user'

export default async function HomePage() {
   const users = (await getAllUsers()) as Users
   return (
      <>
         <div className="flex lg:flex-row flex-col justify-center items-center min-h-screen">
            <HeroSection />
            <ShowCase />
         </div>
         {users && <HomeUserSection users={users} />}
      </>
   )
}
export function generateMetadata() {
   return {
      title: `LinkHub - All your important links in one place`,
      description: `LinkHub is a free tool for optimising your internet presence, whether you’re a blogger, an artist or run a content platform. You get one link to house all the content you’re driving followers to. Share that link anywhere, like your Instagram bio, Facebook posts or Twitch profile. Let your content live longer than the feed.`,
   }
}
