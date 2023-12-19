import {
   LoginWithGoogle,
   LoginWithGithub,
   LoginWithTwitter,
} from '@/components/buttons/LoginButton'
export default function Login() {
   return (
      <main className="">
         <div className="max-w-md mx-auto flex flex-col gap-6 p-6 shadow">
            <h1 className="text-4xl font-bold text-center">Sign In</h1>
            <p className="text-center text-gray-500">
               Sign in with Google to start using Linktree.
            </p>
            <div className="flex flex-col gap-3">
               <LoginWithGoogle />
               <LoginWithGithub />
               <LoginWithTwitter />
            </div>
         </div>
      </main>
   )
}