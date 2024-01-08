import Image from 'next/image'
import DummyProfile from './../../../public/user.webp'

interface ProfileSectionProps {
   uri: string
   name: string
   bio: string
   image: string
}

const ProfileSection = ({ uri, name, bio, image }: ProfileSectionProps) => {
   return (
      <div className="flex flex-col justify-center items-center text-center w-full">
         <Image
            src={image ? image : DummyProfile}
            alt={name}
            width={300}
            height={300}
            className="sm:w-48 w-28 sm:h-48 h-28 rounded-full"
         />
         <span className="sm:text-xl text-md font-semibold text-gray-400 mt-2">
            @{uri}
         </span>
         <span className="sm:text-2xl text-xl font-bold text-gray-200 mt-2">
            {name}
         </span>
         <p className="sm:text-xl text-lg text-gray-300">{bio}</p>
      </div>
   )
}

export default ProfileSection
