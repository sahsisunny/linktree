import React from 'react'
import UserItem from './UserItem'
import { User } from '@/types/user.s'

type Props = {
   users: User[]
}

function HomeUserSection({ users }: Props) {
   return (
      <section className="flex flex-col justify-center items-center h-screen sm:p-20 p-6 text-center">
         <h1 className="sm:text-4xl text-3xl font-bold">
            Recently Joined User
         </h1>
         <div className="mt-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center justify-center md:justify-start animate-infinite-scroll gap-10 h-80">
               {users.map((user: User) => (
                  <UserItem
                     key={user.id}
                     name={user.name}
                     uri={user.uri}
                     image={user.image}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default HomeUserSection
