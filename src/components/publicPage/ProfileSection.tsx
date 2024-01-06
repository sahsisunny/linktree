import Image from 'next/image'

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
            src={image}
            alt={name}
            className="sm:w-35 w-25 sm:h-35 h-25 rounded-full"
            width={150}
            height={150}
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
