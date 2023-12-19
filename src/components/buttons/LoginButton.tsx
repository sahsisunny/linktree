'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faGoogle,
   faTwitter,
   faGithub,
} from '@fortawesome/free-brands-svg-icons'
import { signIn } from 'next-auth/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
interface LoginButtonProps {
   iconName: IconProp
   text: string
   onClick: () => void
}

const LoginButton: React.FC<LoginButtonProps> = ({
   iconName,
   text,
   onClick,
}) => {
   return (
      <button
         onClick={onClick}
         className="flex items-center justify-center gap-3 shadow bg-white w-full text-center py-4 hover:shadow-lg"
      >
         <FontAwesomeIcon icon={iconName} className="h-6" />
         <span>Sign in with {text}</span>
      </button>
   )
}

export const LoginWithGoogle: React.FC = () => {
   return (
      <LoginButton
         iconName={faGoogle}
         text="Google"
         onClick={() => {
            console.log('clicked')
            signIn('google')
         }}
      />
   )
}

export const LoginWithTwitter: React.FC = () => {
   return (
      <LoginButton
         iconName={faTwitter}
         text="Twitter"
         onClick={() => signIn('twitter')}
      />
   )
}

export const LoginWithGithub: React.FC = () => {
   return (
      <LoginButton
         iconName={faGithub}
         text="Github"
         onClick={() => signIn('github')}
      />
   )
}
