'use client'
import HomeForm from '@/components/home/HomeForm'

export default function Home() {
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
         <HomeForm />
      </section>
   )
}
