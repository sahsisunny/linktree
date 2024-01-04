import Image from 'next/image'

interface ProfileSectionProps {
   username: string
   bio: string
   image: string
}

const ProfileSection = ({ username, bio, image }: ProfileSectionProps) => {
   return (
      <div className="flex flex-col justify-center items-center text-center w-full">
         <Image
            src={image}
            alt=""
            className="sm:w-35 w-24 sm:h-35 h-24 rounded-full"
            width={150}
            height={150}
         />
         <h1 className="sm:text-2xl text-xl font-bold mt-4">@{username}</h1>
         <p className="sm:text-xl text-md text-gray-300">{bio}</p>
      </div>
   )
}

export default ProfileSection
