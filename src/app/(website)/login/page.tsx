import { LoginWithGoogle } from '@/components/buttons/LoginButton'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import authOptions from '@/utils/authOptions'

export default async function Login() {
   const sesion = await getServerSession(authOptions)
   if (!!sesion) {
      redirect('/')
   }
   return (
      <section className="flex flex-col justify-center h-full  p-20">
         <div className="max-w-md mx-auto flex flex-col gap-6 p-6 shadow">
            <h1 className="text-4xl font-bold text-center">Sign In</h1>
            <p className="text-center">
               Sign in with Google to start using Linktree.
            </p>
            <div className="flex flex-col gap-3">
               <LoginWithGoogle />
            </div>
         </div>
      </section>
   )
}
